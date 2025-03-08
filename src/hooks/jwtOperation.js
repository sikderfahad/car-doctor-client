import showToast from "./showToast";
import storeUserRoleInFirestore from "./storeUserRoleInFirestore";

const jwtOperation = async (axiosSecure, user, logout, navigate, location) => {
  try {
    const jwtRes = await axiosSecure.post("/jwt", {
      user: user?.email,
    });
    // console.log("jwtRes: ", jwtRes);
    if (!jwtRes?.data?.success || !user?.emailVerified) {
      return await logout();
    }
    try {
      const newUser = {
        displayName: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
        role: "user",
        uid: user?.uid,
        metadata: user?.metadata,
      };
      // console.log(newUser);

      let userExist;
      try {
        userExist = await axiosSecure.get(`/user?email=${user?.email}`);
      } catch (error) {
        if (error?.response && error.response.status === 404) {
          const postRes = await axiosSecure.post("/users", newUser);
          // console.log("new user: ", postRes);
        } else {
          throw error;
        }
      }

      if (userExist?.data?.success) {
        const patchRes = await axiosSecure.patch(
          `/users/${userExist?.data?.userId}`,
          { lastLoginAt: user?.metadata?.lastLoginAt }
        );
        // console.log("update last login info: ", patchRes);
      }
    } catch (err) {
      console.error("Error while add new user on db: ", err);
    }
    storeUserRoleInFirestore(user);

    navigate(location?.state ? location?.state?.from : "/");
    showToast(`Welcome back ${user?.displayName && user?.displayName}`);
  } catch (err) {
    console.error("Error while JWT signin: ", err);
  }
};

export default jwtOperation;
