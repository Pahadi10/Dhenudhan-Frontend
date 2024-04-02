import { Typography } from '@mui/material'
import TableCell from '@mui/material/TableCell'
import MuiTableRow from '@mui/material/TableRow'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { handleStylesWithProps, styles } from './table.styles'

const DND_ITEM_TYPE = 'row'

const TableRow = ({ row, index, moveRow, hasDragAndDrop }) => {
  const dropRef = useRef(null)
  const dragRef = useRef(null)

  const [, drop] = useDrop({
    accept: DND_ITEM_TYPE,
    hover(item, monitor) {
      if (!dropRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = dropRef.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveRow(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })

  const [{ isDragging }, drag, preview] = useDrag({
    type: DND_ITEM_TYPE,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const opacity = isDragging ? 0 : 1
  const stylesWithProps = handleStylesWithProps({ opacity })

  preview(drop(dropRef))
  drag(dragRef)

  return (
    <MuiTableRow {...row.getRowProps()} sx={[stylesWithProps.row, styles.row]} ref={dropRef}>
      {hasDragAndDrop ? (
        <TableCell sx={styles.rowCell} ref={dragRef}>
          move
        </TableCell>
      ) : null}
      {row.cells.map(cell => {
        // Currently, we won't be rendering ID column, but we still want
        // the information inside the table to be acessible on edits
        if (cell.column.id === 'id' || cell.column.isHidden) return null
        return (
          <TableCell {...cell.getCellProps()} sx={[cell.column.externalStyle, styles.rowCell]}>
            {cell.column.customRowRender?.(cell.render('Cell'), cell) || (
              <Typography sx={styles.rowLabel}>{cell.render('Cell')}</Typography>
            )}
          </TableCell>
        )
      })}
    </MuiTableRow>
  )
}

TableRow.propTypes = {
  row: PropTypes.object,
  index: PropTypes.number,
  moveRow: PropTypes.func,
  hasDragAndDrop: PropTypes.bool,
}

export default TableRow
