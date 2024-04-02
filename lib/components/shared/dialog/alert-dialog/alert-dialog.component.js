import { Box, SvgIcon, Typography } from '@mui/material'
import * as React from 'react'

import DialogLayout from '../dialog-layout/dialog-layout.component'
import { CLOSE_TYPES } from '../dialog-layout/dialog-layout.constants'

import { DEFAULT_PROPS, PROP_TYPES } from './alert-dialog.constants'
import { styles, handleStylesWithProps } from './alert-dialog.styles'

const AlertDialog = ({
  title,
  description,
  variant,
  icon,
  size,
  children,
  iconContainerStyles,
  hideCancel,
  ...other
}) => {
  const stylesWithProps = handleStylesWithProps({ size, variant })

  return (
    <DialogLayout
      {...other}
      closeType={!hideCancel && CLOSE_TYPES.TEXT}
      stylesOverride={stylesWithProps.dialog}
      size={size}
      headerStylesOverride={styles.headerOverride}
    >
      <Box sx={styles.root}>
        <Box sx={[stylesWithProps.iconWrapper, iconContainerStyles]}>
          <SvgIcon component={icon} sx={[stylesWithProps.icon]} />
        </Box>
        <Typography sx={styles.title}>{title}</Typography>
        {description && typeof description === 'string' ? (
          <Typography sx={styles.description}>{description}</Typography>
        ) : (
          description
        )}
        {children}
      </Box>
    </DialogLayout>
  )
}

AlertDialog.propTypes = PROP_TYPES

AlertDialog.defaultProps = DEFAULT_PROPS

export default AlertDialog
