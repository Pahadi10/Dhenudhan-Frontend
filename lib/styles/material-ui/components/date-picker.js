import { addDisablePortal } from '_utils/material-ui.util'
import '_utils/type-defs.util'

/** @type {MuiComponents['MuiDatePicker']} */
const overwrite = {
  defaultProps: {
    PopperProps: addDisablePortal(),
    DialogProps: addDisablePortal(),
  },
}

export const MuiDatePicker = overwrite
