import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: "http://localhost:4000"
})

const useAxiosSecure = () => {
    console.log('hi');
    const navigate = useNavigate()
    const {logout} = useAuth()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopoeed by interceptors');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        console.log(error);
        // Do something with request error
        return Promise.reject(error);
    })

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        console.log(response);
        return response;
    }, async (error) => {
        const status = error.response.status
        // console.log('status in the interceptors error', status);
        //for 401 or 403 logout the user and move the user to the login page
        if(status === 401 || status === 403)
            await logout();
            navigate('/login')
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;