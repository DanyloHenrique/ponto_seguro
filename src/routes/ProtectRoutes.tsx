import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '@/contexts/AuthContext'

export const ProtectRoutes = () => {
  const token = useContext(AuthContext)

  if (!token) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
