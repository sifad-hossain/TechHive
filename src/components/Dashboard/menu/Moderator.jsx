
import { FcSettings } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';

const Moderator = () => {
    return (
        <ul className="menu">
            <li><FcSettings className="w-5 h-5"></FcSettings><NavLink 
            to='productQueue'>ProductQueue</NavLink></li>
            <li><FcSettings className="w-5 h-5"></FcSettings><NavLink 
            to='reportedProducts'>ReportedProducts</NavLink></li>
        </ul>
    );
};

export default Moderator;