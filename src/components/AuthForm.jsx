import FloatingInput from "./floatingInput/FloatingInput";
import authImg from "../assets/login.svg";
import SocialLogin from "./socialLogin/SocialLogin";
import { Link } from "react-router-dom";

const AuthForm = ({ authType, handleSubmit }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <img className="scale-90" src={authImg} alt="" />
        </div>

        <div className="border-2 border-gray-300 rounded-2xl p-16">
          <h1 className="text-4xl font-semibold capitalize text-center">
            {authType}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-12 flex flex-col gap-8">
              {authType != "login" && (
                <FloatingInput border={true} label={"name"} name={"name"} />
              )}
              <FloatingInput border={true} label={"email"} name={"email"} />
              <FloatingInput
                border={true}
                label={"password"}
                name={"pass"}
                type="password"
              />

              <button
                type="submit"
                className="capitalize bg-main cursor-pointer text-white py-2 rounded-xl font-semibold"
              >
                {authType}
              </button>
            </div>
          </form>
          <h1 className="font-medium text-center my-8">Or {authType} with</h1>
          <div className="">
            <SocialLogin />
          </div>
          <h1 className="text-center my-8">
            {authType == "login" ? (
              <span>
                Already have an account?{" "}
                <Link
                  className="capitalize text-blue-500 hover:underline"
                  to={"/signup"}
                >
                  signup
                </Link>
              </span>
            ) : (
              <span>
                New in here?{" "}
                <Link
                  className="capitalize text-blue-500 hover:underline"
                  to={`/login`}
                >
                  {"login"}
                </Link>
              </span>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
