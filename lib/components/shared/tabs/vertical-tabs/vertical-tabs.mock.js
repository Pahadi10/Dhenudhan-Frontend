import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import CardMembershipOutlinedIcon from '@mui/icons-material/CardMembershipOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined'
import { Typography } from '@mui/material'

import TimePicker from '_components/shared/time-picker/time-picker.component'

export const VERTICAL_TABS_ICONS_MOCK = [
  {
    label: 'Single Payment',
    icon: <AccountBalanceWalletOutlinedIcon />,
    value: '0',
    content: (
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at varius nibh, id malesuada
        enim. Praesent lacinia eros in dui vulputate, sed vestibulum dolor tincidunt. Praesent
        bibendum orci eu quam pharetra bibendum. Curabitur tincidunt rutrum justo, a pulvinar nulla
        vulputate ut. Proin pellentesque et dolor ac ultricies. In ultricies felis ac purus luctus,
        semper volutpat lacus tincidunt. Duis laoreet congue molestie.
      </Typography>
    ),
  },
  {
    label: 'Recurring payment',
    icon: <RestartAltOutlinedIcon />,
    value: '1',
    content: (
      <Typography>
        Aliquam sed aliquet augue, blandit bibendum lacus. Ut lorem ligula, placerat et sollicitudin
        at, pulvinar eu orci. Phasellus placerat lacinia auctor. Vestibulum at sollicitudin quam,
        vitae lacinia nunc. Pellentesque tristique tincidunt mauris vel consequat. Sed nisi sem,
        aliquam sit amet volutpat vitae, vestibulum nec sem. Donec a sem dignissim, convallis turpis
        in, posuere erat. Ut feugiat sagittis nisl a hendrerit. Morbi sed ex eget ante ultrices
        pretium.
      </Typography>
    ),
  },
  {
    label: 'Packages',
    icon: <Inventory2OutlinedIcon />,
    value: '2',
    content: (
      <Typography>
        Praesent et neque ac lectus placerat venenatis. Vivamus consequat scelerisque euismod. Nunc
        fermentum arcu orci. In consectetur nisl ullamcorper odio finibus, sit amet faucibus purus
        porttitor. Aliquam erat volutpat. In magna nisl, ullamcorper sit amet lobortis et, imperdiet
        aliquam lectus. Vivamus nec elit sed mauris maximus efficitur ac vitae dolor. Integer tempor
        lectus ac aliquet blandit. Duis rhoncus tincidunt arcu sed ullamcorper. Etiam eu lectus in
        tortor interdum aliquet quis eu sem. Pellentesque at ultricies ante, ac interdum erat. Donec
        dictum sagittis nibh, vel mollis dui fermentum id. Etiam gravida pellentesque nunc, eu
        pellentesque velit.
      </Typography>
    ),
  },
  {
    label: 'Memberships',
    icon: <CardMembershipOutlinedIcon />,
    value: '3',
    content: (
      <Typography>
        Suspendisse ultrices metus quis urna lacinia, ac vestibulum velit malesuada. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Donec vel nibh lacinia, rhoncus quam non,
        fringilla dolor. Nulla luctus, urna at scelerisque mattis, mi risus hendrerit lacus, ut
        gravida sem neque at libero. Praesent non nunc ex. Phasellus in ligula urna. Morbi
        consectetur libero diam, non suscipit leo lacinia at. Etiam in volutpat erat. Duis tempus
        quis sapien non imperdiet.
      </Typography>
    ),
  },
  {
    label: 'Products',
    icon: <ShoppingBagOutlinedIcon />,
    value: '4',
    content: (
      <Typography>
        Suspendisse ultrices metus quis urna lacinia, ac vestibulum velit malesuada. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Donec vel nibh lacinia, rhoncus quam non,
        fringilla dolor. Nulla luctus, urna at scelerisque mattis, mi risus hendrerit lacus, ut
        gravida sem neque at libero. Praesent non nunc ex. Phasellus in ligula urna. Morbi
        consectetur libero diam, non suscipit leo lacinia at. Etiam in volutpat erat. Duis tempus
        quis sapien non imperdiet.
      </Typography>
    ),
  },
  {
    label: 'Gift cards',
    icon: <CardGiftcardOutlinedIcon />,
    value: '5',
    content: (
      <Typography>
        Suspendisse ultrices metus quis urna lacinia, ac vestibulum velit malesuada. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Donec vel nibh lacinia, rhoncus quam non,
        fringilla dolor. Nulla luctus, urna at scelerisque mattis, mi risus hendrerit lacus, ut
        gravida sem neque at libero. Praesent non nunc ex. Phasellus in ligula urna. Morbi
        consectetur libero diam, non suscipit leo lacinia at. Etiam in volutpat erat. Duis tempus
        quis sapien non imperdiet.
      </Typography>
    ),
  },
]

export const VERTICAL_TABS_NUMBER_MOCK = [
  {
    label: 'Location configuration',
    id: 1,
    content: 'location configuration page',
  },
  {
    label: 'Location credentials',
    id: 2,
    content: 'location credentials page',
  },
  {
    label: 'Location tools',
    id: 3,
    content: 'location tools page',
  },
  {
    label: 'Location operations',
    id: 4,
    content: 'location operations page',
  },
  {
    label: 'Front desk check in',
    id: 5,
    content: 'front desk check in page',
  },
  {
    label: 'Email settings',
    id: 6,
    content: 'email settings page',
  },
  {
    label: 'Social media',
    id: 7,
    content: 'social media settings page',
  },
]

export const VERTICAL_TABS_MENU_NUMBER_GROUP_MOCK = [
  {
    id: 1,
    title: 'Sales',
    subMenu: [
      { id: 1.1, label: 'Packages', content: <TimePicker name="timePicker" /> },
      { id: 1.2, label: 'Memberships', content: 'component or content goes here 2' },
      { id: 1.3, label: 'POS inventory', content: 'component or content goes here 3' },
      { id: 1.4, label: 'Promo codes', content: 'component or content goes here 4' },
      { id: 1.5, label: 'Gift cards', content: 'component or content goes here 5' },
      { id: 1.6, label: 'Retail fees', content: 'component or content goes here 6' },
      {
        id: 1.7,
        label: 'Discount tiers',
        link: '#',
        content: 'component or content goes here 7',
      },
      { id: 1.8, label: 'Sale settings', content: 'component or content goes here 8' },
      {
        id: 1.9,
        label: 'Agreement templates',
        link: '#',
        content: 'component or content goes here 9',
      },
    ],
  },
  {
    id: 2,
    title: 'General settings',
    subMenu: [
      { id: 2.1, label: 'link 1', content: 'component or content goes here 10' },
      { id: 2.2, label: 'link 2', content: 'component or content goes here 11' },
    ],
  },
  {
    id: 3,
    title: 'Client settings',
    subMenu: [
      { id: 3.1, label: 'link 1', content: 'component or content goes here 12' },
      { id: 3.2, label: 'link 2', content: 'component or content goes here 13' },
    ],
  },
  {
    id: 4,
    title: 'Retail settings',
    subMenu: [
      { id: 4.1, label: 'link 1', content: 'component or content goes here 14' },
      { id: 4.2, label: 'link 2', content: 'component or content goes here 15' },
    ],
  },
]
