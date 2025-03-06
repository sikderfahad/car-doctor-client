import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const storeUserRoleInFirestore = async (user, role = "user") => {
  if (!user) return;
  try {
    const docRef = doc(db, "users", user?.uid);
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        name: user?.displayName || user?.email.split("@")[0],
        email: user?.email,
        role: role,
      });
    }
  } catch (err) {
    console.error("Error while store user role in Firestore: ", err);
  }
};

export default storeUserRoleInFirestore;
