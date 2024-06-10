import { Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import Sidebar from "../components/Dashboard/Sidebar";


const Dashboard = () => {

    

    return (
        <div className="w-[100%] mt-20  flex">
            {/* Sidebar */}
            <Sidebar></Sidebar>

            {/* Outlet --> Dynamic content */}
            <div className=" w-[75%] mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;