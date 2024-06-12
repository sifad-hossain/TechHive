
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useStatus = (id) => {
    const axiosSecure = useAxiosSecure()
   const {data: product =[], refetch, isLoading} = useQuery({
    queryKey: ['status', id],
    queryFn: async () => {
        const res = await axiosSecure.patch(`/tech/${id}`)
        return res.data;
    },
    retry: 3,
   })   


   return [product, refetch, isLoading]
};

export default useStatus;