import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import TableCell from '@mui/material/TableCell'
import MuiTableHead from '@mui/material/TableHead'
import MuiTableRow from '@mui/material/TableRow'
import PropTypes from 'prop-types'

import AngleDownIcon from '_assets/svgs/angle-down-small.svg'
import AngleUpIcon from '_assets/svgs/angle-up-small.svg'

import { SORTING_DIRECTIONS } from './table.constants'
import { handleStylesWithProps, styles } from './table.styles'

const TableHead = ({ headerGroups, hasDragAndDrop, sorting }) => {
  const handleSort = column => {
    sorting?.onSort(column)
  }

  return (
    <MuiTableHead sx={styles.head}>
      {headerGroups.map(headerGroup => (
        <MuiTableRow {...headerGroup.getHeaderGroupProps()}>
          {hasDragAndDrop ? <TableCell sx={styles.rowCell}></TableCell> : null}
          {headerGroup.headers.map(column => {
            const stylesWithProps = handleStylesWithProps({ sorting, column })
            // Currently, we won't be rendering ID column, but we still want
            // the information inside the table to be acessible on edits
            if (column.id === 'id' || column.isHidden) return null
            return (
              <TableCell {...column.getHeaderProps()} sx={styles.rowCell}>
                {column.customHeaderRender?.(column.render('Header')) ||
                  (column.hasSorting ? (
                    <Box sx={styles.headerButton} onClick={() => handleSort(column)}>
                      <Typography typography="header4" sx={styles.header}>
                        {column.render('Header')}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <SvgIcon
                          component={AngleUpIcon}
                          sx={stylesWithProps.filterSelect.headerButtonAsc}
                        />
                        <SvgIcon
                          component={AngleDownIcon}
                          sx={stylesWithProps.filterSelect.headerButtonDesc}
                        />
                      </Box>
                    </Box>
                  ) : (
                    <Typography typography="header4" sx={styles.header}>
                      {column.render('Header')}
                    </Typography>
                  ))}
              </TableCell>
            )
          })}
        </MuiTableRow>
      ))}
    </MuiTableHead>
  )
}

TableHead.propTypes = {
  headerGroups: PropTypes.array,
  hasDragAndDrop: PropTypes.bool,
  sorting: PropTypes.shape({
    onSort: PropTypes.func,
    direction: PropTypes.oneOf(Object.values(SORTING_DIRECTIONS)),
    field: PropTypes.string,
  }),
}

export default TableHead
