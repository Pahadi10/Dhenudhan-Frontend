import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import IconCalendar from '@mui/icons-material/CalendarTodayOutlined'

import IconHome from '_assets/svgs/home.svg'
import IconFileGraph from '_assets/svgs/file-graph.svg'
import IconMobile from '_assets/svgs/mobile.svg'
import IconMapMarker from '_assets/svgs/map-marker.svg'
import IconUsers from '_assets/svgs/users.svg'
import IconPayment from '_assets/svgs/credit-card-small.svg'

export const NAVIGATION_STEPS = {
  HOME: 'home',
  LOCATION: 'location',
}

export const bottomNavigationItems = [
  {
    icon: <IconHome />,
    id: 'home',
    visibleAt: [NAVIGATION_STEPS.HOME, NAVIGATION_STEPS.LOCATION],
  },
  {
    icon: <IconFileGraph />,
    id: 'reports',
    visibleAt: [NAVIGATION_STEPS.HOME],
  },
  {
    icon: <IconMobile />,
    id: 'applications',
    visibleAt: [NAVIGATION_STEPS.HOME],
  },
  {
    icon: <IconMapMarker />,
    id: 'locations',
    visibleAt: [NAVIGATION_STEPS.HOME],
  },
  {
    icon: <IconCalendar />,
    id: 'schedule',
    visibleAt: [NAVIGATION_STEPS.LOCATION],
  },
  {
    icon: <IconUsers />,
    id: 'clients',
    visibleAt: [NAVIGATION_STEPS.LOCATION],
  },
  {
    icon: <IconPayment />,
    id: 'payments',
    visibleAt: [NAVIGATION_STEPS.LOCATION],
  },
  {
    icon: <MoreHorizOutlinedIcon />,
    id: 'more',
    visibleAt: [NAVIGATION_STEPS.HOME, NAVIGATION_STEPS.LOCATION],
  },
]
