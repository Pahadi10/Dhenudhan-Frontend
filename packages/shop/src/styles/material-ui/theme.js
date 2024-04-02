import { createTheme } from '@mui/material/styles'

import { typography } from '@lib/styles/material-ui/typography'
import { components } from '@lib/styles/material-ui/components'

import { palette } from './palette'
import { components as shopComponents } from './components'
import { breakpoints } from './breakpoints'

export const theme = createTheme({
  typography,
  palette,
  components: {
    ...components,
    ...shopComponents,
  },
  breakpoints,
})
