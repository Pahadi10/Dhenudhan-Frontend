import React from 'react'
import { SvgIcon } from '@mui/material'

import CheckCircleIcon from '_assets/svgs/check-circle-small.svg'
import '_utils/type-defs.util'

/** @type {MuiComponents['MuiDialog']} */

const overwrite = {
  defaultProps: {
    iconMapping: {
      info: false,
      success: <SvgIcon sx={{ color: 'gray.0' }} component={CheckCircleIcon} />,
    },
    variant: 'filled',
  },
}

export const MuiAlert = overwrite
