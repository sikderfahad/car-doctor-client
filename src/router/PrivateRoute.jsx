import { useAuth } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, allowedRole = ["user"] }) => {
  const location = useLocation();
  const { user, role, loading } = useAuth();

  if (loading) {
    return (
      <h1 className="text-center text-xl font-semibold text-green-500">
        Loading ...
      </h1>
    );
  }

  if (!user) {
    return <Navigate to={"/login"} state={{ from: location?.pathname }} />;
  }

  // return children;
  if (allowedRole.includes(role) || role === "admin" || role === "officer") {
    return children;
  }
  return <Navigate to={"/"} />;
};

export default PrivateRoute;
