import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { useCallback } from 'react'

import Search from '_components/shared/search/search.component'

import { CLIENT_SIDE_SEARCH_DEBOUNCE_VALUE } from './table.constants'
import { styles } from './table.styles'

const TableGlobalFilter = ({ globalFilter, placeholder, onFilter, hasFilters }) => {
  const onChange = useCallback(
    value => {
      onFilter(value || undefined)
    },
    [onFilter],
  )

  return (
    <Box sx={[styles.search.root, !hasFilters && styles.search.onlySearch]}>
      <Search
        placeholder={placeholder}
        searchCallback={onChange}
        debounceValue={CLIENT_SIDE_SEARCH_DEBOUNCE_VALUE}
        initialValue={globalFilter}
      />
    </Box>
  )
}

TableGlobalFilter.propTypes = {
  globalFilter: PropTypes.string,
  onFilter: PropTypes.func,
  placeholder: PropTypes.string,
  hasFilters: PropTypes.bool,
}

export default TableGlobalFilter
