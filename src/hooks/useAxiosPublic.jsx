import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://tech-hive-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;