//api, tanstack, axios(axios secure)

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProducts = () => {
    const axiosPublic = useAxiosPublic()

   const {data: product =[], refetch} = useQuery({
    queryKey: ['product'],
    queryFn: async () => {
        const res = await axiosPublic.get('/products')
        return res.data;
    },
    retry: 3,
   })   
  
   return [product, refetch]
};

export default useProducts;