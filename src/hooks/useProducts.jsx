import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic()
   const {data: product =[], refetch, isLoading} = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
        const res = await axiosPublic.get('/products')
        return res.data;
    },
    retry: 3,
   })   
  
   return [product, isLoading, refetch ]
};

export default useProducts;