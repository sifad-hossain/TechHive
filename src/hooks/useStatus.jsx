
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStatus = (id) => {
    const axiosPublic = useAxiosPublic()
   const {data: feauters =[], refetch, isLoading} = useQuery({
    queryKey: ['status', id],
    queryFn: async () => {
        const res = await axiosPublic.patch(`/tech/${id}`)
        return res.data;
    },
    retry: 3,
   })   


   return [feauters, refetch, isLoading]
};

export default useStatus;