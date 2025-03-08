import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useLoadDataById = (id) => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/car-services/${id}`);
      return data;
    },
    enabled: !!id,
    retry: (failureCount, error) => {
      // console.error("error from order: ", error);
      if (error.response && error.response.status === 404) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { data, refetch, isLoading, error };
};

export default useLoadDataById;
