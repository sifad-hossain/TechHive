import useRole from '../../hooks/useRole'
import Moderator from './menu/Moderator'
import Admin from './menu/Admin'
import User from './menu/User'
import logo from "../../assets/images/pikaso_texttoimage_modern-technology-related-logo-looking-greate-colo.jpeg"
import useAuth from '../../hooks/useAuth'
import { GrLogout } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from 'react-icons/bi'
const Sidebar = () => {
  const [role] = useRole()
  const { logout } = useAuth()

  return (
    <>
      <div className=" z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform'">
        {/* logo implement */}
        <div>
          <div className='w-full  hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-200 mx-auto'>
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Nav Items */}
        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav>
            {/* Menu Items */}
            {role === 'user' && <User></User>}
            {role === 'moderator' && <Moderator></Moderator>}
            {role === 'admin' && <Admin></Admin>}
          </nav>
        </div>
        <div>
          <hr />

          <Link            
            to='/'
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>          
            <BiHomeAlt className='w-5 h-5' />
            <span className='mx-4 font-medium'>Home</span>
          </Link>
          <Link
            onClick={logout}
            to='/login'
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </Link>
        </div>
      </div>




    </>
  )
}

export default Sidebar