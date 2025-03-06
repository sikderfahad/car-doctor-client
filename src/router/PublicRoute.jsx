import { Navigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

const PublicRoute = ({ children }) => {
  const { user, loading } = useAuth();
  //   if (loading)
  //     return (
  //       <h1 className="text-center text-xl font-semibold text-green-500">
  //         Loading ...
  //       </h1>
  //     );
  if (!user) return children;
  return <Navigate to={"/"} />;
};

export default PublicRoute;
