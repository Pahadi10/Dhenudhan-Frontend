import { useState } from 'react'
import { Box } from '@mui/material'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { t } from 'i18next'
import { USER } from '_constants/constants'
import { LOGIN_MOCK_RESPONSE } from '_mocks/dashnoard.mock'
import DhenuDhanLogo from '@lib/assets/images/logo.png'
import NavBar from '@lib/components/shared/app-bar/appbar.component'
import { styles } from './layout.styles'
import { navItems } from './layout.constants'

import { ROUTES } from '~src/app.constants'
import Cart from '_pages/cart/cart.component'
import Category from '_components/category-select/catergory-select.component'

export const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const data = LOGIN_MOCK_RESPONSE.data

  const[loggedIn, setLoggedIn] = useState(false)

  // const user = JSON.parse(sessionStorage.getItem(USER))
  // const hasValidSession = user?.token?.accessToken
  const handleLogout = () => {
    sessionStorage.clear()
    navigate(ROUTES.login.path, { replace: true, state: { from: location } })
  }

  const newNavItems = {
    ...navItems,
    withoutLocation: {
      ...navItems.withoutLocation,
    },
    userProfile: {
      ...navItems.userProfile,
      src: data?.profileImage,
    },
  }
  return (
    <Box sx={styles.root}>
    <NavBar 
    image={{
      alt: t('common:hapanaLogoAltText'),
      src: DhenuDhanLogo,
      onClick: () => navigate(ROUTES.home.path),
    }}
    setRoute={navigate}
    navItems = {newNavItems}
    pathname={location.pathname}
    />

  <Category setRoute={navigate}/>


      <Outlet />
      {/* {hasValidSession && <Footer />} */}
    </Box>
  )
}

export default Layout
