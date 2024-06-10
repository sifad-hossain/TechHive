import { useContext } from "react";

import { AuthContext } from "../components/authProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useProduct = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
  
    const { data: tech = [],refetch, reset } = useQuery({
      queryKey: ['myProduct'],
      enabled: !!user?.email,
      queryFn: async () => {
        const res = await axiosSecure.get(`/products/${user.email}`)
        console.log(res);
        return res.data;
      },
    })
    return [tech, refetch, reset]
};

export default useProduct;