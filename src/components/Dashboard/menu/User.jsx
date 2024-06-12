import { FcSettings } from "react-icons/fc";
import { NavLink } from "react-router-dom";


const User = () => {
    return (
        <ul className="menu ">
            <li><FcSettings className="w-5 h-5"></FcSettings><NavLink to='myProfile'>My Profile</NavLink></li>
            <li><NavLink to='addProducts'>Add Products</NavLink></li>
            <li><NavLink to='myProducts'>My Products</NavLink></li>
        </ul>
    );
};

export default User;



