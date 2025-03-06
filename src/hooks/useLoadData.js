import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAdminToken from "./useAdminToken";

const useLoadData = (url, isAdmin) => {
  const axiosSecure = useAxiosSecure();

  const adminToken = useAdminToken();

  // console.log("admin token: ", adminToken);

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: [url, adminToken],
    queryFn: async () => {
      const { data } = await axiosSecure.get(url, {
        headers: { Authorization: `Bearer ${adminToken}` },
      });
      return data;
    },
    enabled: isAdmin && !!adminToken,
    retry: (failureCount, error) => {
      if (error.response && error.response.status === 404) {
        return false;
      }
      return failureCount < 2;
    },
  });

  return { data, refetch, isLoading, error };
};

export default useLoadData;
