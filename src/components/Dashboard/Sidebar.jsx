import useRole from '../../hooks/useRole'
import Moderator from './menu/Moderator'
import Admin from './menu/Admin'
import User from './menu/User'

const Sidebar = () => {
  const [role] = useRole()

  // Sidebar Responsive Handler
  //   const handleToggle = () => {
  //     setActive(!isActive)
  //   }
  return (
    <>
      <div className="w-[100%] min-h-full    flex flex-col justify-between overflow-x-hidden bg-gray-100  space-y-6 px-2 py-4  inset-y-0 left-0 transform">

        {/* Menu Items */}
        {role === 'user' && <User></User>}
        {role === 'moderator' && <Moderator></Moderator>}
        {role === 'admin' && <Admin></Admin>}

      </div>
    </>
  )
}

export default Sidebar