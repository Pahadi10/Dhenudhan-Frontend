import { useMemo, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'

import { capitalizeFirstLetter } from '_utils/string.util'

import {
  CLIENT_SIDE_SELECT_FIELD_NAME,
  FILTER_DEFAULT_VALUE,
  FILTER_MODES,
  FILTER_SELECT_TYPES,
} from './table.constants'
import TableFilterSelect from './table-filter-select.component'

const TableFilter = ({
  column: {
    preFilteredRows,
    id,
    render,
    filterValue,
    serverSideFilterOptions,
    hasCutomFilterHeader,
  },
  setFilter,
  filterMode,
  filterSelectType,
  shouldClearFilters,
  setShouldClearFilters,
}) => {
  const options = useMemo(() => {
    const newOptions = []
    if (filterMode === FILTER_MODES.CLIENT_SIDE) {
      preFilteredRows.forEach(row => {
        if (newOptions.find(option => option.value === row.values[id])) return
        newOptions.push({
          value: row.values[id],
          label: capitalizeFirstLetter(row.values[id]),
        })
      })
      return newOptions
    } else {
      return serverSideFilterOptions || []
    }
  }, [id, preFilteredRows, filterMode, serverSideFilterOptions])

  const fieldName = `${CLIENT_SIDE_SELECT_FIELD_NAME}-${id}`

  const formMethods = useForm({
    defaultValues: {
      [fieldName]: FILTER_DEFAULT_VALUE,
    },
  })

  const filteredValue = formMethods.watch(fieldName)
  const { setValue } = formMethods

  useEffect(() => {
    setFilter(id, filteredValue || filteredValue === false ? filteredValue : undefined)
  }, [filteredValue, setFilter, id])

  useEffect(() => {
    if (filterValue === undefined) {
      setValue(fieldName, FILTER_DEFAULT_VALUE)
    }
  }, [filterValue, setValue, fieldName])

  useEffect(() => {
    if (shouldClearFilters) {
      setValue(fieldName, FILTER_DEFAULT_VALUE)
      setShouldClearFilters(false)
    }
  }, [shouldClearFilters, setValue, fieldName, setShouldClearFilters])

  return (
    <FormProvider {...formMethods}>
      <form>
        <TableFilterSelect
          name={fieldName}
          placeholder={hasCutomFilterHeader ? render('customFilterHeader') : render('Header')}
          options={options}
          type={filterSelectType}
        />
      </form>
    </FormProvider>
  )
}

TableFilter.propTypes = {
  column: PropTypes.shape({
    filterValue: PropTypes.string,
    preFilteredRows: PropTypes.array,
    id: PropTypes.string,
    render: PropTypes.func,
    serverSideFilterOptions: PropTypes.array,
    hasCutomFilterHeader: PropTypes.bool,
  }),
  setFilter: PropTypes.func,
  filterMode: PropTypes.oneOf(Object.values(FILTER_MODES)),
  filterSelectType: PropTypes.oneOf(Object.values(FILTER_SELECT_TYPES)),
  shouldClearFilters: PropTypes.bool,
  setShouldClearFilters: PropTypes.func,
}

function areEqual(prevProps, nextProps) {
  return (
    prevProps.column.serverSideFilterOptions === nextProps.column.serverSideFilterOptions &&
    prevProps.column.filterValue === nextProps.column.filterValue &&
    prevProps.shouldClearFilters === nextProps.shouldClearFilters
  )
}

export default memo(TableFilter, areEqual)
