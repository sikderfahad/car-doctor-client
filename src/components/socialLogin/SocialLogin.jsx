import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import jwtOperation from "../../hooks/jwtOperation";

const SocialLogin = () => {
  const axiosSecure = useAxiosSecure();
  const { googleSignin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(user);
  // console.log("from socialLogin: ", location);

  const handleGoogleLogin = async () => {
    try {
      const userRes = await googleSignin();
      const user = userRes.user;

      await jwtOperation(axiosSecure, user, logout, navigate, location);
    } catch (err) {
      console.error("Error while google login: ", err);
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
