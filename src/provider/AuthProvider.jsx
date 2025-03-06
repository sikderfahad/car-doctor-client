import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase.config";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignin = async () => {
    setLoading(true);
    try {
      return await signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  };

  const createUserWithEmailPass = async (email, pass) => {
    if (!email && !pass) {
      return;
    }

    setLoading(true);
    try {
      return await createUserWithEmailAndPassword(auth, email, pass);
    } finally {
      setLoading(false);
    }
  };

  const loginUserWithEmailPass = async (email, pass) => {
    if (!email && !pass) {
      return;
    }

    setLoading(true);
    try {
      return await signInWithEmailAndPassword(auth, email, pass);
    } finally {
      setLoading(false);
    }
  };

  const profileUpdate = async (displayName, photoURL) => {
    if (!auth?.currentUser) return;

    setLoading(true);
    try {
      return await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
    } finally {
      setLoading(false);
    }
  };

  const emailVerify = async () => {
    if (!auth?.currentUser) return;

    setLoading(true);
    try {
      return await sendEmailVerification(auth.currentUser);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      return await signOut(auth);
    } finally {
      setUser(null);
      setRole(null);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // if (!currentUser?.emailVerified) {
      //   return logout();
      // }
      setLoading(true);
      if (!currentUser) {
        setRole(null);
        setUser(null);
        setLoading(false);
        return;
      }

      setUser(currentUser);
      const userId = currentUser?.uid;
      try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        setRole(docSnap.exists() ? docSnap.data().role : "user");
      } catch (err) {
        console.error("Error fetching role on AuthState: ", err);
        setRole("user");
      }

      setLoading(false);
      // console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const values = {
    user,
    role,
    loading,
    googleSignin,
    loginUserWithEmailPass,
    createUserWithEmailPass,
    profileUpdate,
    emailVerify,
    logout,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
