import { Box, Divider } from '@mui/material'
import PropTypes from 'prop-types'
import { forwardRef, useImperativeHandle, useRef } from 'react'

import Button from '../button/button.component'
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_VARIANTS } from '../button/button.constants'

import TablePagination from './table-pagination.component'
import { styles } from './table.styles'

const TableToolbar = forwardRef(
  ({ pagination, secondaryAction, primaryAction, hidePaginationUI }, ref) => {
    const primaryActionRef = useRef()
    const secondaryActionRef = useRef()

    useImperativeHandle(ref, () => ({
      get primaryAction() {
        return primaryActionRef.current
      },
      get secondaryAction() {
        return secondaryActionRef.current
      },
    }))

    return (
      <Box sx={styles.flex}>
        {secondaryAction && (
          <Box sx={styles.secondaryActionContainer}>
            <Button
              variant={BUTTON_VARIANTS.CONTAINED}
              startIcon={secondaryAction.icon}
              onClick={secondaryAction.action}
              label={secondaryAction.label}
              theme={BUTTON_THEME.SECONDARY}
              sx={styles.secondaryAction}
              type="button"
              size={BUTTON_SIZE.SMALL}
              ref={secondaryActionRef}
            />
          </Box>
        )}
        {primaryAction && (
          <Box>
            <Button
              variant={BUTTON_VARIANTS.CONTAINED}
              startIcon={primaryAction.icon}
              onClick={primaryAction.action}
              label={primaryAction.label}
              type="button"
              size={BUTTON_SIZE.SMALL}
              ref={primaryActionRef}
            />
          </Box>
        )}
        {(primaryAction || secondaryAction) && (
          <Divider orientation="vertical" sx={styles.toolbarDivider} />
        )}
        {pagination && <TablePagination hidePaginationUI={hidePaginationUI} {...pagination} />}
      </Box>
    )
  },
)

TableToolbar.propTypes = {
  pagination: PropTypes.shape({
    onPageSizeChange: PropTypes.func.isRequired,
    pageSizeOptions: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
      }),
    ),
    canGoBack: PropTypes.bool.isRequired,
    canGoForward: PropTypes.bool.isRequired,
    onNextPage: PropTypes.func.isRequired,
    onPreviousPage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    totalResultsQuantity: PropTypes.number,
    currentPageRecords: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired,
  }),
  primaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    action: PropTypes.func.isRequired,
  }),
  secondaryAction: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.elementType,
    action: PropTypes.func.isRequired,
    props: PropTypes.object,
  }),
  hidePaginationUI: PropTypes.bool,
}

TableToolbar.defaultProps = {
  hidePaginationUI: false,
}

export default TableToolbar
