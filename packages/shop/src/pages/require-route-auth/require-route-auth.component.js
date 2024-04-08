import { Navigate, useLocation, Outlet } from 'react-router-dom'

import { USER } from '_constants/constants'

import { ROUTES } from '~src/app.constants'

const RequireAuth = () => {
  const location = useLocation()

  // const user = JSON.parse(sessionStorage.getItem(USER))
  // const hasValidSession = user?.token?.accessToken
  // const user = sessionStorage.getItem("loggedin")
  const isLoggedIn = sessionStorage.getItem('loggedIn') === "1"
  // const hasValidSession = user

  // if (!isLoggedIn) {
  //   return <Navigate to={ROUTES.login.path} state={{ from: location }} replace />
  // }
  return <Outlet />
  // return <Navigate to={ROUTES.dashboard.path} state={{ from: location }} replace />
}

RequireAuth.propTypes = {}

export default RequireAuth
