import { Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Sidebar from "../components/Dashboard/Sidebar";


const Dashboard = () => {

    

    return (
        <div className="w-[100%] mt-20   flex">
            <div className="w-[25%] border-2 border-yellow-400">
                {/* Sidebar */}
            <Sidebar></Sidebar>
            </div>

            {/* Outlet --> Dynamic content */}
            <div className=" w-[70%] mx-auto border-2 border-rose-600">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;