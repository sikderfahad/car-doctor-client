import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAddData = (url) => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  return useMutation(
    async (newService) => {
      const { data } = await axiosSecure.post(url, newService);
      return data;
    },
    {
      onSuccess: () => {
        // Refetch services after adding a new one
        queryClient.invalidateQueries([url]);
      },
      onError: (error) => {
        console.error("Error while adding service:", error);
      },
    }
  );
};

export default useAddData;
