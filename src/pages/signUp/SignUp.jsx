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
        console.log("Error while update user profile: ", err);
      }

      try {
        await emailVerify();
      } catch (err) {
        console.log("Error while send verify email: ", err);
      }

      if (!user?.emailVerified) {
        await logout();
        navigate("/login");
      }
      showToast("Please login after verification! Check your inbox", "info");
    } catch (err) {
      console.log("Error while create new email-pass user: ", err);
    }
    console.log(name, email, pass);
  };
  return (
    <div>
      <AuthForm authType={"signup"} handleSubmit={handleSubmit} />
    </div>
  );
};

export default SignUp;
