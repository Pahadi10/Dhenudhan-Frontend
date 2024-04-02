import { Alert, Snackbar, Typography, useMediaQuery } from '@mui/material'
import React from 'react'

import {
  TOAST_AUTO_HIDE_DURATION,
  TOAST_DEFAULT_PROPS,
  TOAST_PROPS_OPTIONS,
  TOAST_PROP_TYPES,
} from './toast.constants'
import { useToast } from './toast.hooks'
import { styles } from './toast.styles'

export default function Toast({ severity, title, description, horizontal, isOpen }) {
  const { closeToast } = useToast()
  const matchesMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
  const matchesDesktop = useMediaQuery(theme => theme.breakpoints.between('sm', 'lg'))

  return (
    <Snackbar
      open={isOpen}
      onClose={closeToast}
      anchorOrigin={{
        vertical: matchesMobile || matchesDesktop ? 'top' : 'bottom',
        horizontal,
      }}
      autoHideDuration={TOAST_AUTO_HIDE_DURATION}
      sx={styles.snackbar}
    >
      <Alert
        onClose={closeToast}
        severity={severity}
        sx={description ? styles.alert : [styles.alert, styles.centerItems]}
        {...(severity === TOAST_PROPS_OPTIONS.SEVERITY.INFO && {
          icon: false,
        })}
      >
        <Typography sx={styles.title} variant="header4">
          {title}
        </Typography>
        {description && (
          <Typography variant="medium" sx={styles.description}>
            {description}
          </Typography>
        )}
      </Alert>
    </Snackbar>
  )
}

Toast.propTypes = TOAST_PROP_TYPES

Toast.defaultProps = TOAST_DEFAULT_PROPS
