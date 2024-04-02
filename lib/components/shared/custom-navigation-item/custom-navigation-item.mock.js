import AddIcon from '@mui/icons-material/Add'

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
      },
      {
        icon: IconFileGraph,
        id: 'reports',
      },
      {
        icon: IconGraphBar,
        id: 'leaderboard',
      },
      {
        icon: IconPlayCircle,
        id: 'contentSuite',
      },
      {
        icon: IconMobile,
        id: 'applications',
      },
      {
        icon: IconMapMarker,
        id: 'locations',
      },
      {
        icon: IconUsers,
        id: 'teamAccess',
      },
      {
        icon: IconApps,
        id: 'control',
      },
    ],
    custom: [
      {
        icon: IconFileGraph,
        id: 'financesSheet',
        onClick: () => null,
        label: 'Finances Sheet',
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
      },
      {
        icon: IconCreditCard,
        id: 'schedule',
      },
      {
        icon: IconUsers,
        id: 'clients',
      },
      {
        icon: IconFileGraph,
        id: 'reportsLocation',
      },
    ],
    custom: [
      {
        icon: IconCreditCard,
        id: 'payments',
        onClick: () => null,
      },
      {
        icon: AddIcon,
        id: 'newSale',
        onClick: () => null,
      },
    ],
  },

  bottomDefault: [
    {
      icon: IconSetting,
      id: 'settingsDefault',
      route: 'site-settings',
    },
    {
      icon: IconQuestionCircle,
      id: 'iconDefault',
    },
  ],
}
