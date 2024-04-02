import { Typography } from '@mui/material'

import { COLUMN_TYPES } from './table.constants'
import { styles } from './table.styles'

export const renderCommonHeader = (label, type) => {
  switch (type) {
    case COLUMN_TYPES.action:
      return <Typography typography="header4" sx={styles.header}></Typography>
    default:
      return (
        <Typography typography="header4" sx={styles.header}>
          {label}
        </Typography>
      )
  }
}
