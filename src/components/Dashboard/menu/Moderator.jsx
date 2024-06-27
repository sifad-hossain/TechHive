
import { MdReport } from 'react-icons/md';
import { PiQueueLight } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';

const Moderator = () => {
    return (
        <ul className="menu">
            <li><NavLink 
            to='productQueue'><PiQueueLight size={20} className='text-primary bg-white'/>ProductQueue</NavLink></li>
            <li><NavLink 
            to='reportedProducts'><MdReport size={22} className='bg-white text-red-500' />ReportedProducts</NavLink></li>
        </ul>
    );
};

export default Moderator;