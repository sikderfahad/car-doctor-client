import { useLocation, useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import showToast from "../../hooks/showToast";
import { useAuth } from "../../provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const { loginUserWithEmailPass, logout } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const pass = formData.get("pass");
    try {
      const res = await loginUserWithEmailPass(email, pass);
      const user = res.user;
      if (!user?.emailVerified) {
        return await logout();
      }
      if (user) {
        showToast(`Welcome back ${user?.displayName ? user?.displayName : ""}`);
        navigate(location?.state ? location?.state?.from : "/");
      }
    } catch (err) {
      console.log("Error while login user: ", err);
    }
    console.log(email, pass);
  };
  return (
    <div>
      <AuthForm authType={"login"} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
