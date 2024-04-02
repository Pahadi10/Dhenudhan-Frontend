import IconCart from '@lib/assets/svgs/shopping-cart-small.svg'
import IconSeller from '@lib/assets/svgs/gift-small.svg'
import i18n from '@lib/i18n/index'
import IconUser from '@lib/assets/svgs/user-small.svg'
import IconLogout from '@lib/assets/svgs/signout-small.svg'
import IconLogin from '@lib/assets/svgs/angle-right.svg'

export const navItems = {
  
    main: [
      {
        icon: IconCart,
        id: 'cart',
        text: 'Cart',
        label: i18n.t('shop:navigation.links.cart'),
        href: 'cart', 
      },
      {
        icon: IconSeller,
        id: 'becomeASeller',
        text: 'Become a Seller',
        label: i18n.t('shop:navigation.links.becomeASeller'),
        href: 'becomeaseller',
      },
    ],

    accountLoggedIn: [
      {
        icon: IconUser,
        id: 'account',
        text: 'My Account',
        label: i18n.t('shop:navigation.links.myAccount'),
        href: 'myaccount',
      },
      {
        icon: IconLogout,
        id: 'logout',
        text: 'Log Out',
        label: i18n.t('shop:navigation.links.logOut'),
        href: '/',

      },
    ],

    accountLoggedOut: [
      {
        icon: IconLogin,
        id: 'login',
        text: 'Log In',
        label: i18n.t('shop:navigation.links.logIn'),
        href: 'login',
      },
    ]

  }