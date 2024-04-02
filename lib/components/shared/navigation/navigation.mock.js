import AddIcon from '@mui/icons-material/Add'
import i18next from 'i18next'

import IconHome from '_assets/svgs/home.svg'
import IconFileGraph from '_assets/svgs/file-graph.svg'
import IconGraphBar from '_assets/svgs/graph-bar.svg'
import IconPlayCircle from '_assets/svgs/play-circle.svg'
import IconMobile from '_assets/svgs/mobile.svg'
import IconMapMarker from '_assets/svgs/map-marker.svg'
import IconUsers from '_assets/svgs/users.svg'
import IconApps from '_assets/svgs/apps.svg'
import IconCreditCard from '_assets/svgs/credit-card-small.svg'
import IconSetting from '_assets/svgs/setting.svg'
import IconQuestionCircle from '_assets/svgs/question-circle.svg'
import hapanaLogo from '_assets/images/hapana-logo.png'

export const image = {
  alt: 'Alt text',
  openedSrc: hapanaLogo,
  closedSrc: hapanaLogo,
}

export const navItems = {
  loc: [
    {
      // label: 'Go to location',
      icon: IconMapMarker,
      id: 'goToLocation',
    },
  ],
  withoutLocation: {
    main: [
      {
        icon: IconHome,
        id: 'home',
        label: 'Home',
      },
      {
        icon: IconFileGraph,
        id: 'reports',
        label: 'Reports',
      },
      {
        icon: IconGraphBar,
        id: 'leaderboard',
        label: 'Leaderboard',
      },
      {
        icon: IconPlayCircle,
        id: 'contentSuite',
        label: 'Content Suite',
      },
      {
        icon: IconMobile,
        id: 'applications',
        label: 'Applications',
      },
      {
        icon: IconMapMarker,
        id: 'locations',
        label: 'Locations',
      },
      {
        icon: IconUsers,
        id: 'teamAccess',
        label: 'Team Access',
      },
      {
        icon: IconApps,
        id: 'control',
        label: 'Control',
      },
    ],
    custom: [
      {
        icon: IconFileGraph,
        id: 'financesSheet',
        onClick: () => null,
        label: 'Finances',
      },
      {
        icon: IconFileGraph,
        id: 'email',
        onClick: () => null,
        label: 'Email',
      },
    ],
  },
  withLocation: {
    main: [
      {
        icon: IconHome,
        id: 'homeLocation',
        label: 'Home',
      },
      {
        icon: IconCreditCard,
        id: 'schedule',
        label: 'Schedule',
      },
      {
        icon: IconUsers,
        id: 'clients',
        label: 'Clients',
      },
      {
        icon: IconFileGraph,
        id: 'reportsLocation',
        label: 'Reports',
      },
    ],
    custom: [
      {
        icon: IconCreditCard,
        id: 'payments',
        onClick: () => null,
        label: 'Payments',
      },
      {
        icon: AddIcon,
        id: 'newSale',
        onClick: () => null,
        label: 'New Sale',
      },
    ],
  },

  bottomDefault: [
    {
      icon: IconSetting,
      id: 'settingsDefault',
      // TODO: Remove route after 8th of april of 2022 demo
      route: 'site-settings',
    },
    {
      icon: IconQuestionCircle,
      id: 'iconDefault',
    },
  ],
  userProfile: {
    route: 'profile',
    alt: i18next.t('shop:navigation.avatarAlt'),
  },
}
