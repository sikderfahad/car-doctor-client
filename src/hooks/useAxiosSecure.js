import { useEffect, useMemo } from "react";
import { useAuth } from "../provider/AuthProvider";
import axios from "axios";

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const axiosSecure = useMemo(() => {
    return axios.create({
      // baseURL: "http://localhost:3000",
      baseURL: "https://car-doctor-server-2025.vercel.app",
      withCredentials: true,
    });
  }, []);

  useEffect(() => {
    const interceptor = axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        console.error("Error in axios secure: ", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          try {
            await axiosSecure.post("/jwt-logout");
            await logout();
          } catch (err) {
            console.error("Error while logout: ", err);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => axiosSecure.interceptors.response.eject(interceptor);
  }, [axiosSecure, logout]);

  return axiosSecure;
};

export default useAxiosSecure;
