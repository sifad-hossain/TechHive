import { useContext } from "react";
import { AuthContext } from "../components/authProvider/AuthProvider";


const useAuth = () => {
    const all = useContext(AuthContext)
    return all 
};

export default useAuth;