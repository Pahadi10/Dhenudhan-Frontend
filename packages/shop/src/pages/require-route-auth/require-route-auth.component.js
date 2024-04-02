import { Navigate, useLocation, Outlet } from 'react-router-dom'

import { USER } from '_constants/constants'

import { ROUTES } from '~src/app.constants'

const RequireAuth = () => {
  const location = useLocation()

  // const user = JSON.parse(sessionStorage.getItem(USER))
  // const hasValidSession = user?.token?.accessToken
  const user = JSON.parse(sessionStorage.getItem("loggedin"))
  const hasValidSession = user

  // if (!hasValidSession) {
  //   return <Navigate to={ROUTES.login.path} state={{ from: location }} replace />
  // }
  return <Outlet />
  // return <Navigate to={ROUTES.dashboard.path} state={{ from: location }} replace />
}

RequireAuth.propTypes = {}

export default RequireAuth
