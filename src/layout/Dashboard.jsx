import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

    //TODO: get isadimn value from the database
    const [isAdmin] = useAdmin();
    console.log(isAdmin);

    return (
        <div className="w-[100%] mt-20  flex">
            <div className="w-[20%] min-h-full    flex flex-col justify-between overflow-x-hidden bg-gray-100  space-y-6 px-2 py-4  inset-y-0 left-0 transform">
                

                {
                isAdmin   ? <>
                <ul>
                <li><NavLink to='/dashboard/coupon'>Manage Coupon</NavLink></li>
                <li><NavLink to='/dashboard/staticsPage'>Static Page</NavLink></li>
                <li><NavLink to='/dashboard/allUsers'>All Users</NavLink></li>
                </ul>
                </>       
                :
                <>
                {/* user dashboard */}
                 <ul className="menu ">
                    <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
                    <li><NavLink to='/dashboard/addProducts'>Add Products</NavLink></li>
                    <li><NavLink to='/dashboard/myProducts'>My Products</NavLink></li>
                </ul>
                </>       
            }

             

                {/* Shared Nav Link */}

                <div className="divider"></div>
                <ul> <li>
                    <NavLink to='/'>Home</NavLink>
                </li></ul>
            </div>


            <div className=" w-[75%] mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;