import { getIdToken } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const updateUserRole = async (props) => {
  const { user, currentUserRole, newRole, axiosSecure, refetch } = props;

  if (!user || !user?.uid || !newRole || currentUserRole !== "admin") {
    console.error("Invalid user data or insufficient permission.");
    return;
  }

  try {
    // ✅ Get Current Admin Token
    const adminUser = auth.currentUser;
    if (!adminUser) {
      console.error("Admin not authenticated.");
      return;
    }

    const token = await getIdToken(adminUser); // Get Firebase token
    const requestingUid = adminUser.uid; // Admin UID

    // ✅ Send `requestingUid` to the server
    const updateFirestoreMongoRole = await axiosSecure.patch(
      `/update-user-role?mongoId=${user?._id}`,
      {
        userId: user?.uid,
        newRole,
        requestingUid, // ✅ Send admin UID
      },
      {
        headers: { Authorization: `Bearer ${token}` }, // ✅ Send token
      }
    );

    // console.log(updateFirestoreMongoRole);
    if (updateFirestoreMongoRole?.data?.success) refetch();
  } catch (err) {
    console.error("Error updating user role: ", err);
  }
};

export default updateUserRole;
