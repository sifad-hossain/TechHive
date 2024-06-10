import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import { BsGraphUp } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";


const Sidebar = () => {
    const {logout} = useAuth()
    //TODO: get isadimn value from the database
    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        <>
            <div className="w-[20%] min-h-full    flex flex-col justify-between overflow-x-hidden bg-gray-100  space-y-6 px-2 py-4  inset-y-0 left-0 transform">


                {
                    isAdmin ? <>
                        <ul>
                            <li><NavLink to='coupon'>Manage Coupon</NavLink></li>
                            <li><BsGraphUp className="w-5 h-5"></BsGraphUp><NavLink to='staticsPage'>Static Page</NavLink></li>
                            <li><NavLink to='allUsers'>All Users</NavLink></li>
                        </ul>
                    </>
                        :
                        <>
                            {/* user dashboard */}
                            <ul className="menu ">
                                <li><FcSettings className="w-5 h-5"></FcSettings><NavLink to='myProfile'>My Profile</NavLink></li>
                                <li><NavLink to='addProducts'>Add Products</NavLink></li>
                                <li><NavLink to='myProducts'>My Products</NavLink></li>
                            </ul>
                        </>
                }



                {/* Shared Nav Link */}

                <div className="divider"></div>
                <ul> <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li><button
                onClick={logout}
                ><GrLogout className="w-5 "></GrLogout><span className="mx-4 font-medium">Logout</span></button></li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;