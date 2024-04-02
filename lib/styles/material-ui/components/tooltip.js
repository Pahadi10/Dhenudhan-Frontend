import { addDisablePortal } from '_utils/material-ui.util'
import '_utils/type-defs.util'

/** @type {MuiComponents['MuiTooltip']} */
const overwrite = {
  defaultProps: {
    PopperProps: addDisablePortal(),
  },
  styleOverrides: {
    tooltip: {
      margin: '0px 10px',
      borderRadius: 4,
      background: 'rgba(30, 32, 38, 0.6)',
    },
  },
}

export const MuiTooltip = overwrite
