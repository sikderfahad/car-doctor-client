import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../provider/AuthProvider";
import showToast from "../../hooks/showToast";

const SocialLogin = () => {
  const { user, googleSignin, logout } = useAuth();
  console.log(user);

  const handleGoogleLogin = async () => {
    try {
      const userRes = await googleSignin();
      const user = userRes.user;
      if (!user?.emailVerified) {
        return await logout();
      }
      showToast(`Welcome back ${user?.displayName && user?.displayName}`);
    } catch (err) {
      console.log("Error while google login: ", err);
    }
  };

  const iconStyle =
    "w-12 h-12 text-lg hover:text-2xl transition duration-500 rounded-full bg-dark7 flex items-center justify-center";
  return (
    <div className="flex gap-5 w-fit mx-auto">
      <div className={iconStyle}>
        <ImFacebook />
      </div>
      <div className={iconStyle}>
        <FaLinkedinIn />
      </div>
      <div onClick={handleGoogleLogin} className={iconStyle}>
        <FcGoogle />
      </div>
    </div>
  );
};

export default SocialLogin;
