import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const loadServicesData = async (axiosSecure, url) => {
  try {
    const { data } = await axiosSecure.get(url);
    return data;
  } catch (err) {
    console.log("Error while load car services data: ", err);
  }
};

const useLoadServices = (url) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: services,
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["car-services"],
    queryFn: () => loadServicesData(axiosSecure, url),
  });

  return { services, refetch, isLoading, error };
};

export default useLoadServices;
