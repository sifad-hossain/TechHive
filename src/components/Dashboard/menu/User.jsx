import { CgProfile } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { NavLink } from "react-router-dom";


const User = () => {
    return (
        <ul className="">

            <NavLink
                to='myProfile'
                className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                <CgProfile className='w-5 h-5 text-green-600 bg-white' />
                <span className='mx-4 font-medium'>My Profile</span>
            </NavLink>

            <li><NavLink to='addProducts' className="flex px-4 py-2 gap-3"><FaCartPlus  size={20}/> Add Products</NavLink></li>
            <li><NavLink to='myProducts'className='flex gap-3 px-4 py-2'><MdHomeWork size={20} />My Products</NavLink></li>
        </ul>
    );
};

export default User;



