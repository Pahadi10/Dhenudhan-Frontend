import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'

import { styles } from './modal-group.styles'

const ModalGroup = ({ children, title, sx }) => {
  return (
    <Box>
      <Box sx={styles.titleContainer}>
        <Typography sx={styles.title}>{title}</Typography>
      </Box>
      <Box sx={[styles.content, sx]}>{children}</Box>
    </Box>
  )
}

export default ModalGroup

ModalGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
}
