import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm";
import showToast from "../../hooks/showToast";
import { useAuth } from "../../provider/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();
  const { createUserWithEmailPass, profileUpdate, logout, emailVerify } =
    useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const pass = formData.get("pass");

    try {
      const res = await createUserWithEmailPass(email, pass);
      const user = res?.user;

      try {
        await profileUpdate(name);
      } catch (err) {
        console.error("Error while update user profile: ", err);
      }

      try {
        await emailVerify();
      } catch (err) {
        console.error("Error while send verify email: ", err);
      }

      if (!user?.emailVerified) {
        await logout();
        navigate("/login");
      }
      showToast("Please login after verification! Check your inbox", "info");
    } catch (err) {
      console.error("Error while create new email-pass user: ", err);
      const userExist = err.message.includes("email-already-in-use");
      if (userExist) {
        showToast(
          "User already registered. Please try again with another email",
          "error"
        );
      }
    }
  };
  return (
    <div>
      <AuthForm authType={"signup"} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignUp;
