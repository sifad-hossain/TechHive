import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../components/authProvider/AuthProvider";
import { GrLogout } from "react-icons/gr";



const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navLink = <>
        <NavLink
            className={({ isActive }) => isActive ? 'text-[#3498DB] text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold text-[#ECF0F1]'}
            to='/'>Home</NavLink>
        <NavLink
            className={({ isActive }) => isActive ? 'text-[#3498DB] text-[17px] hover:shadow-lg shadow-gray-50  font-bold' : 'font-bold text-[#ECF0F1]'}
            to='/allProducts'>Products</NavLink>

        {
            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogout} className='font-bold text-[#ECF0F1]'>logOut</button>
            </> : <>
                <li><Link to='/login'>Login</Link></li>
            </>
        }
    </>

    return (
        <>

            <div className="navbar bg-[#2C3E50] opacity-90">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-[28px] font-extrabold">
                        <span className="text-[#1E90FF]">Tech</span>
                        <span className="text-[#FFFFFF]">Hive</span></Link>
                </div>

                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {navLink}
                    </ul>
                </div>

                <div className=" navbar-end">
                    {
                        user ? <div className="dropdown   dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" rounded-full">
                                    <img src={user?.photoURL || "https://i.ibb.co/WsR6pb4/bu1.jpg"} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2  rounded-box bg-white ">
                                <li>
                                    <button className="btn btn-sm bg-violet-600  btn-ghost hover:bg-purple-600">{user?.displayName || 'user name not found'}</button>

                                </li>
                                <Link to='/dashboard' className="btn mt-1 btn-sm bg-violet-600  btn-ghost hover:bg-purple-600">
                                    Dashboard
                                </Link>
                                <li className="">
                                    <button
                                        onClick={logout}
                                        className='flex w-full bg-violet-600 items-center mt-1  hover:bg-gray-300   hover:text-gray-700  duration-300 transform'
                                    >
                                        <GrLogout className='w-5 h-5' />

                                        <span className='mx-4 font-medium'>Logout</span>
                                    </button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>

        </>
    );
};

export default Navbar;