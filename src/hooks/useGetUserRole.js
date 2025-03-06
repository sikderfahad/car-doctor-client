import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
import { useEffect, useState } from "react";

const useGetUserRole = (user) => {
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (!user?.uid) {
      setRole(null);
      return;
    }

    const docRef = doc(db, "users", user?.uid);
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        setRole(docSnap.exists() ? docSnap.data().role : null);
      },
      (error) => {
        console.error("Error while get user role from firestore: ", error);
        setRole(null);
      }
    );

    return () => unsubscribe();
  }, [user?.uid]);

  return role;
};

export default useGetUserRole;
