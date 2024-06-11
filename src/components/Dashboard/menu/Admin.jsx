import { BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";


const Admin = () => {
    return (
        <div>
            <ul>
                <li><NavLink to='coupon'>Manage Coupon</NavLink></li>
                <li><BsGraphUp className="w-5 h-5"></BsGraphUp><NavLink to='staticsPage'>Static Page</NavLink></li>
                <li><NavLink to='allUsers'>All Users</NavLink></li>
            </ul>
        </div>
    );
};

export default Admin;

