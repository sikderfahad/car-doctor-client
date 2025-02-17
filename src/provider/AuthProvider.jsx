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
import { auth } from "../firebase/firebase.config";

const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignin = async () => {
    setLoading(true);
    return await signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  const createUserWithEmailPass = async (email, pass) => {
    if (!email && !pass) {
      return;
    }

    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, pass).finally(
      () => {
        setLoading(false);
      }
    );
  };

  const loginUserWithEmailPass = async (email, pass) => {
    if (!email && !pass) {
      return;
    }

    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, pass).finally(() => {
      setLoading(false);
    });
  };

  const profileUpdate = async (displayName, photoURL) => {
    setLoading(true);
    return await updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    }).finally(() => {
      setLoading(false);
    });
  };

  const emailVerify = async () => {
    setLoading(true);
    return await sendEmailVerification(auth.currentUser).finally(() => {
      setLoading(false);
    });
  };

  const logout = async () => {
    setLoading(true);
    return await signOut(auth).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      // if (!currentUser?.emailVerified) {
      //   return logout();
      // }
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const values = {
    user,
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
