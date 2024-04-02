import React from 'react'
import MuiTooltip from '@mui/material/Tooltip'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

import { styles } from './tooltip.styles'
import { TOOLTIP_POSITION } from './tooltip.constants'

const Tooltip = ({ children, title, placement, arrow, ...tooltipProps }) => (
  <Box sx={styles.base}>
    <MuiTooltip
      title={<Typography typography="header5">{title}</Typography>}
      placement={placement}
      variant="header5"
      arrow={arrow}
      {...tooltipProps}
    >
      {children}
    </MuiTooltip>
  </Box>
)

Tooltip.propTypes = {
  title: PropTypes.string.isRequired,
  placement: PropTypes.oneOf(Object.values(TOOLTIP_POSITION)),
  children: PropTypes.any,
  arrow: PropTypes.bool,
}

Tooltip.defaultProps = {
  placement: TOOLTIP_POSITION.topStart,
  title: 'title',
  arrow: false,
}

export default Tooltip
