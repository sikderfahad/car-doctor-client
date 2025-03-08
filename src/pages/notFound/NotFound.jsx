import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 lg:w-10/12 max-w-7xl h-screen mx-auto text-center flex flex-col gap-10 items-center justify-center">
      <h1 className="md:text-3xl lg:text-5xl text-red-500 animate-pulse font-semibold text-center">
        Page not found
      </h1>
      <img
        src="https://res.cloudinary.com/dwa2voehg/image/upload/v1741421358/download_rpbat3.jpg"
        alt=""
        className="w-full md:w-64 lg:w-128"
      />
      <button onClick={() => navigate("/")} className="btn btn-success">
        Back to home ➜
      </button>
    </div>
  );
};

export default NotFound;
