import React from 'react'
import { Box, Paper, Typography } from '@mui/material'
import PropTypes from 'prop-types'

import { styles } from './divider-label.styles'

const Divider = ({ title, description, enableButton, classStyles, action }) => {
  return (
    <Paper elevation={0} sx={[styles.root, classStyles]}>
      <Box sx={styles.labelContent}>
        <Typography>
          <Typography variant="header4" sx={styles.label}>
            {title}
          </Typography>
          {description && (
            <Typography variant="small" sx={styles.description}>
              {description}
            </Typography>
          )}
        </Typography>
      </Box>
      {enableButton && <Box sx={styles.labelAction}>{action}</Box>}
    </Paper>
  )
}

Divider.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  enableButton: PropTypes.bool,
  classStyles: PropTypes.string,
  action: PropTypes.node,
}

Divider.defaultProps = {
  title: null,
  description: null,
  enableButton: false,
}

export default Divider
