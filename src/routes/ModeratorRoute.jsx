/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom'
import useRole from '../hooks/useRole'

const ModeratorRoute = ({ children }) => {
  const [role, isLoading] = useRole()

  if (isLoading) return <p>loading</p>
  if (role === 'moderator') return children
  return <Navigate to='/dashboard' />
}

export default ModeratorRoute