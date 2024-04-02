import { createTheme } from '@mui/material/styles'

import { typography } from './typography'
import { palette } from './palette'
import { components } from './components'
import { breakpoints } from './breakpoints'

export const theme = createTheme({
  typography,
  palette,
  components,
  breakpoints,
})
