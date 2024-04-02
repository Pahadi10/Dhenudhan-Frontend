import * as React from 'react'

import Navigation from './navigation.component'
import BottomNavigation from './bottom-navigation/bottom-navigation.component'
import { image, navItems } from './navigation.mock'

const NavigationTemplate = args => <Navigation {...args} />
const BottomNavigationTemplate = args => <BottomNavigation {...args} />

export const DefaultNavigation = NavigationTemplate.bind({})
DefaultNavigation.args = {
  isLocation: true,
  navItems,
  image,
}

export const ResponsiveNavigation = BottomNavigationTemplate.bind({})
ResponsiveNavigation.args = {
  isLocation: false,
  navItems,
  image,
}

export default {
  title: 'Components/Navigation',
  component: Navigation,
}
