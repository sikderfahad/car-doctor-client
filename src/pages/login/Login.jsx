import { useLocation, useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import { useAuth } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import jwtOperation from "../../hooks/jwtOperation";
import showToast from "../../hooks/showToast";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { loginUserWithEmailPass, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const pass = formData.get("pass");
    try {
      const res = await loginUserWithEmailPass(email, pass);
      const user = res.user;
      // change area start

      await jwtOperation(axiosSecure, user, logout, navigate, location);

      // change area end
    } catch (err) {
      console.error("Error while login user: ", err.message);
      const invalidCredentials = err.message.includes("invalid-credential");
      if (invalidCredentials)
        showToast("Invalid user/password credentials", "error");
    }
  };
  return (
    <div>
      <AuthForm authType={"login"} handleSubmit={handleSubmit} />
    </div>
  );
};

export default Login;
