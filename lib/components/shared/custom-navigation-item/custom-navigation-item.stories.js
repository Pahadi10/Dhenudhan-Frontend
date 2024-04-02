import { Box } from '@mui/material'

import CustomNavigationItemComponent from './custom-navigation-item.component'
import { navItems } from './custom-navigation-item.mock'

const CustomNavigationItemTemplate = args => (
  <Box sx={{ width: 48 }}>
    <CustomNavigationItemComponent {...args} />
  </Box>
)

export const CustomNavigationItem = CustomNavigationItemTemplate.bind({})
CustomNavigationItem.args = {
  items: navItems.withoutLocation.custom,
  isOpen: false,
}

export default {
  title: 'Components/CustomNavigationItem',
  component: CustomNavigationItem,
}
