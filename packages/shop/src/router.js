import { createBrowserRouter } from 'react-router-dom'

import { DialogProvider } from '@lib/components/shared/dialog/dialog.provider'
import Login from '_pages/login/login.component'
import Layout from '_pages/layout/layout.component'
import RequireAuth from '_pages/require-route-auth/require-route-auth.component'
import RootErrorBoundary from '_pages/root-error-boundary/root-error-boundary.component'
import UserProfile from '_pages/user-profile/user-profile.component'
import { ROUTES } from './app.constants'
import Home from '_pages/home/home.component'
import Cart from '_pages/cart/cart.component'
import BecomeASeller from '_pages/become-a-seller/becomeaseller.component'
import Dashboard from '_pages/dashboard/dashboard.component'
import Grocery from '_pages/Groceries/groceries.component'
import Bakery from '_pages/bakery/bakery.component'
import Makeup from '_pages/makeup/makeup.component'
import Bag from '_pages/bags/bags.component'
import Clothing from '_pages/clothing/clothing.component'
import Furniture from '_pages/furniture/furniture.component'
import Dailyneeds from '_pages/dailyneeds/dailyneeds.component'
import Books from '_pages/books/books.component'
import Gadgets from '_pages/gadgets/gadgets.component'
import Medicine from '_pages/medicine/medicine.component'
import Signup from '_pages/signup/signup.component'

export const ROOT_PATH = '/'

const HOME_ROUTES = {
  path: ROUTES.home.path,
  element: <Home />,
}

const CART_ROUTES = {
  path: ROUTES.cart.path,
  element: <Cart/>,
}

const BECOMEASELLER_ROUTES = {
  path: ROUTES.becomeaseller.path,
  element: <BecomeASeller/>,
}

const MY_ACCOUNT = {
  path: ROUTES.myaccount.path,
  element: <Dashboard/>,
}
const GROCERY = {
  path: ROUTES.grocery.path,
  element: <Grocery/>,
}
const BAKERY = {
  path: ROUTES.bakery.path,
  element: <Bakery/>,
}
const MAKEUP = {
  path: ROUTES.makeup.path,
  element: <Makeup/>,
}
const BAGS = {
  path: ROUTES.bags.path,
  element: <Bag/>,
}
const CLOTHING = {
  path: ROUTES.clothings.path,
  element: <Clothing/>,
}
const FURNITURE = {
  path: ROUTES.furniture.path,
  element: <Furniture/>,
}
const DAILYNEEDS = {
  path: ROUTES.dailyneeds.path,
  element: <Dailyneeds/>,
}
const BOOKS = {
  path: ROUTES.books.path,
  element: <Books/>,
}
const GADGETS = {
  path: ROUTES.gadgets.path,
  element: <Gadgets/>,
}
const MEDICINES = {
  path: ROUTES.medicines.path,
  element: <Medicine/>,
}






const PROTECTED_ROUTES = [HOME_ROUTES, BECOMEASELLER_ROUTES, CART_ROUTES, MY_ACCOUNT, GROCERY, BAKERY, MAKEUP, BAGS, CLOTHING, FURNITURE, DAILYNEEDS, BOOKS, GADGETS, MEDICINES]

const REQUIRE_AUTH_ROUTES = {
  path: ROUTES.requireAuth.path,
  element: <RequireAuth />,
  children: PROTECTED_ROUTES,
}

const LOGIN_ROUTES = {
  path: ROUTES.login.path,
  element: <Login />,
}

const SIGNUP_ROUTES = {
  path: ROUTES.signup.path,
  element: <Signup/>,
}

const router = createBrowserRouter([
  {
    element: (
      <DialogProvider>
        <Layout />
      </DialogProvider>
    ),
    errorElement: <RootErrorBoundary />,
    children: [LOGIN_ROUTES, REQUIRE_AUTH_ROUTES, SIGNUP_ROUTES],
  },
])

export default router
