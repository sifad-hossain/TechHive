import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";


const Dashboard = () => {

    

    return (
        <div className="w-[100%] mt-20   flex">
            <div className="w-[25%] ">
                {/* Sidebar */}
            <Sidebar></Sidebar>
            </div>

            {/* Outlet --> Dynamic content */}
            <div className=" w-[70%] mx-auto ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;