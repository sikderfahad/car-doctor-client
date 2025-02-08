import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const loadProductsData = async (axiosSecure, url) => {
  try {
    const { data } = await axiosSecure.get(url);
    return data;
  } catch (err) {
    console.log(`Error when load data: `, err);
  }
};

const useLoadData = (url) => {
  const axiosSecure = useAxiosSecure();

  const { data, refetch, isLoading, error } = useQuery({
    queryKey: [url],
    queryFn: () => loadProductsData(axiosSecure, url),
  });

  return { data, refetch, isLoading, error };
};

export default useLoadData;
