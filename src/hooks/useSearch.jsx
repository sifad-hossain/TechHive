import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSearch = (seacrh) => {
    const axiosPublic = useAxiosPublic()
   const {data: product =[], refetch, isLoading} = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
        const res = await axiosPublic.get(`/products-searching?search=${seacrh}`)
        return res.data;
    },
    retry: 3,
   })   
  
   return [product, isLoading, refetch, seacrh ]

};

export default useSearch;