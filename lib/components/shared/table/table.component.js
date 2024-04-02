import { Box, Paper, SvgIcon, TableContainer, Typography } from '@mui/material'
import MuiTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import update from 'immutability-helper'
import isEmpty from 'lodash.isempty'
import PropTypes from 'prop-types'
import { forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useTranslation } from 'react-i18next'
import { useFilters, useGlobalFilter, useTable } from 'react-table'
import { endOfDay, format, startOfDay } from 'date-fns'

import FilterIcon from '_assets/svgs/filter-small.svg'
import SearchIcon from '_assets/svgs/search.svg'
import ClearSearchIcon from '_assets/svgs/times-circle.svg'

import Loading from '../loading/loading.component'
import Button from '../button/button.component'
import { BUTTON_VARIANTS } from '../button/button.constants'

import TableFilter from './table-filter.component'
import TableGlobalFilter from './table-global-filter.component'
import TableHead from './table-head.component'
import TableRow from './table-row.component'
import TableToolbar from './table-toolbar.component'
import {
  FILTER_MODES,
  FILTER_OPERATORS,
  FILTER_SELECT_TYPES,
  FILTER_TYPES,
  SORTING_DIRECTIONS,
} from './table.constants'
import { styles } from './table.styles'

const Table = forwardRef(
  (
    {
      data,
      columns,
      title,
      primaryAction,
      secondaryAction,
      pagination,
      searchPlaceholder,
      hasGlobalFilter,
      hasDragAndDrop,
      onDragAndDrop,
      filterMode,
      onSearch,
      isLoading,
      onColumnFilter,
      filterSelectType,
      sorting,
      infiniteScrollProps,
      columnFilter,
      hidePaginationUI,
      ...props
    },
    ref,
  ) => {
    const [records, setRecords] = useState(data)
    const tableEl = useRef()
    const [distanceBottom, setDistanceBottom] = useState(0)
    const [shouldClearFilters, setShouldClearFilters] = useState(false)

    const scrollListener = useCallback(() => {
      let bottom = tableEl.current.scrollHeight - tableEl.current.clientHeight
      if (!distanceBottom) {
        setDistanceBottom(Math.round(bottom * 0.2))
      }
      if (tableEl.current.scrollTop > bottom - distanceBottom && infiniteScrollProps.hasMore) {
        infiniteScrollProps.next()
      }
    }, [infiniteScrollProps, distanceBottom])

    useLayoutEffect(() => {
      if (infiniteScrollProps?.infiniteScroll) {
        const tableRef = tableEl.current
        tableRef.addEventListener('scroll', scrollListener)

        return () => {
          tableRef.removeEventListener('scroll', scrollListener)
        }
      }
    }, [scrollListener, infiniteScrollProps?.infiniteScroll])

    useEffect(() => {
      setRecords(data)
    }, [data])

    const { t } = useTranslation('common')
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      columns: tableColumns,
      prepareRow,
      state,
      setFilter,
      setAllFilters,
    } = useTable(
      {
        columns,
        data: records,
      },
      useFilters,
      useGlobalFilter,
    )

    const hasToolbar = primaryAction || secondaryAction || pagination

    const moveRow = (dragIndex, hoverIndex) => {
      const dragRecord = records[dragIndex]
      setRecords(
        update(records, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRecord],
          ],
        }),
      )
      onDragAndDrop()
    }

    const clearFilters = () => {
      if (filterMode === FILTER_MODES.CLIENT_SIDE) {
        setAllFilters([])
      } else {
        // Setting auxiliary variable to avoid issues
        // in maintaining 2 states for filters
        setShouldClearFilters(true)
      }
    }

    const handleGlobalFilter = useCallback(
      value => {
        switch (filterMode) {
          case FILTER_MODES.CLIENT_SIDE:
            // setGlobalFilter(value)
            onSearch(value)
            break
          case FILTER_MODES.SERVER_SIDE:
            onSearch(value)
            break
          default:
            break
        }
      },
      [filterMode, onSearch],
    )

    const handleColumnFilter = useCallback(
      (columnId, value) => {
        switch (filterMode) {
          case FILTER_MODES.CLIENT_SIDE:
            if (columnId === 'filter') {
              if (value?.length) {
                onColumnFilter(value)
              }
            } else {
              setFilter(columnId, value)
            }
            break
          case FILTER_MODES.SERVER_SIDE:
            const columnInfo = tableColumns.find(item => item.id === columnId)
            pagination?.setPage?.(0)
            let newColumns = {}
            if (columnInfo.filter === FILTER_TYPES.range) {
              onColumnFilter(prevValue => {
                if (!value) {
                  newColumns = {
                    ...prevValue,
                    [columnInfo.id]: {},
                  }
                } else {
                  newColumns = {
                    ...prevValue,
                    [columnInfo.id]: [
                      {
                        operator: FILTER_OPERATORS.GREATER_THAN_EQUAL,
                        value: value[0] && format(startOfDay(value[0]), "yyyy-MM-dd'T'HH:mm:ss'Z'"),
                      },
                      {
                        operator: FILTER_OPERATORS.LESS_THAN_EQUAL,
                        value: value[1] && format(endOfDay(value[1]), "yyyy-MM-dd'T'HH:mm:ss'Z'"),
                      },
                    ],
                  }
                }
                Object.keys(newColumns).forEach(key => {
                  if (
                    (newColumns[key]?.value === null || newColumns[key]?.value === undefined) &&
                    !newColumns[key]?.[0]?.value &&
                    !newColumns[key]?.[1]?.value
                  ) {
                    delete newColumns[key]
                  }
                })

                return newColumns
              })
            } else if (columnInfo.filter === FILTER_TYPES.array) {
              onColumnFilter(prevValue => {
                if (!value) {
                  newColumns = {
                    ...prevValue,
                    [columnInfo.id]: {},
                  }
                } else {
                  newColumns = {
                    ...prevValue,
                    [columnInfo.id]: {
                      operator: columnInfo.serverSideFilterOperator,
                      value: [value],
                    },
                  }
                }

                Object.keys(newColumns).forEach(key => {
                  if (
                    (newColumns[key]?.value === null || newColumns[key]?.value === undefined) &&
                    !newColumns[key]?.[0]?.value &&
                    !newColumns[key]?.[1]?.value
                  ) {
                    delete newColumns[key]
                  }
                })

                return newColumns
              })
            } else {
              onColumnFilter(prevValue => {
                if (!value && value !== false) {
                  newColumns = {
                    ...prevValue,
                    [columnInfo.id]: {},
                  }
                } else {
                  newColumns = {
                    ...prevValue,
                    [columnInfo.id]: {
                      operator: columnInfo.serverSideFilterOperator,
                      value,
                    },
                  }
                }

                Object.keys(newColumns).forEach(key => {
                  if (
                    (newColumns[key]?.value === null || newColumns[key]?.value === undefined) &&
                    !newColumns[key]?.[0]?.value &&
                    !newColumns[key]?.[1]?.value
                  ) {
                    delete newColumns[key]
                  }
                })

                return newColumns
              })
            }

            break
          default:
            break
        }
      },
      [filterMode, onColumnFilter, setFilter, tableColumns, pagination],
    )

    return (
      <>
        <Box sx={styles.root}>
          {typeof title === 'object' ? title : <Typography sx={styles.title}>{title}</Typography>}

          {hasToolbar ? (
            <TableToolbar
              pagination={pagination}
              hidePaginationUI={hidePaginationUI}
              secondaryAction={secondaryAction}
              primaryAction={primaryAction}
              title={title}
              ref={ref}
            />
          ) : null}
        </Box>
        <Box sx={styles.filtersRoot}>
          {columns.find(item => item.hasFilter) && (
            <Box sx={styles.columnsFilters}>
              {state.filters?.length > 0 || !isEmpty(columnFilter) ? (
                <Box sx={styles.clearFilterContainer}>
                  <Button
                    variant={BUTTON_VARIANTS.TEXT}
                    startIcon={ClearSearchIcon}
                    label={t('components.table.filters.clear')}
                    sx={styles.clearFilterButton}
                    onClick={clearFilters}
                  />
                </Box>
              ) : (
                <Box sx={styles.filterLabelContainer}>
                  <SvgIcon component={FilterIcon} sx={styles.filterIcon} />
                  <Typography typography="medium" sx={styles.filtersLabel}>
                    {t('components.table.filters.label')}
                  </Typography>
                </Box>
              )}
              {tableColumns
                .filter(item => item.hasFilter)
                .map(item => (
                  <TableFilter
                    key={item.id}
                    column={item}
                    setFilter={handleColumnFilter}
                    filterMode={filterMode}
                    filterSelectType={item.filterSelectType}
                    shouldClearFilters={shouldClearFilters}
                    setShouldClearFilters={setShouldClearFilters}
                    hasCutomFilterHeader={item.hasCutomFilterHeader}
                  />
                ))}
            </Box>
          )}

          {hasGlobalFilter ? (
            <Box sx={styles.globalClientSideFilter}>
              <TableGlobalFilter
                globalFilter={state.globalFilter}
                onFilter={handleGlobalFilter}
                placeholder={searchPlaceholder}
                hasFilters={!!columns.find(item => item.hasFilter)}
              />
            </Box>
          ) : null}
        </Box>
        <DndProvider backend={HTML5Backend}>
          <Paper sx={styles.paperContainer}>
            <TableContainer sx={styles.tableContainer} ref={tableEl}>
              <MuiTable {...getTableProps()} sx={[styles.table, styles.tableHeader]} {...props}>
                <TableHead
                  headerGroups={headerGroups}
                  hasDragAndDrop={hasDragAndDrop}
                  sx={styles.stickyHeader}
                  sorting={sorting}
                />
                <TableBody {...getTableBodyProps()}>
                  {rows.length && !isLoading
                    ? rows.map((row, index) => {
                        prepareRow(row)
                        return (
                          <TableRow
                            key={row.id}
                            index={index}
                            row={row}
                            moveRow={moveRow}
                            hasDragAndDrop={hasDragAndDrop}
                          />
                        )
                      })
                    : null}
                </TableBody>
              </MuiTable>
              {(isLoading || infiniteScrollProps?.isRefetching) && (
                <Box sx={styles.loadingContainer}>
                  <Loading label={t('components.table.loading')} />
                </Box>
              )}
              {!rows?.length && !isLoading && (
                <Box sx={styles.emptyContainer}>
                  <SvgIcon component={SearchIcon} sx={styles.emptyIcon} />
                  <Typography mt={1.5} typography="medium" color="gray.56">
                    {t('components.table.emptySearch')}
                  </Typography>
                </Box>
              )}
            </TableContainer>
          </Paper>
        </DndProvider>
      </>
    )
  },
)

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  title: PropTypes.string,
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
  pagination: PropTypes.shape({
    page: PropTypes.number.isRequired,
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
    currentPageRecords: PropTypes.number.isRequired,
    totalResultsQuantity: PropTypes.number,
    setPage: PropTypes.func,
  }),
  searchPlaceholder: PropTypes.string,
  hasGlobalFilter: PropTypes.bool,
  onDragAndDrop: PropTypes.func,
  hasDragAndDrop: PropTypes.bool,
  filterMode: PropTypes.oneOf(Object.values(FILTER_MODES)),
  onSearch: PropTypes.func,
  isLoading: PropTypes.bool,
  onColumnFilter: PropTypes.func,
  filterSelectType: PropTypes.oneOf(Object.values(FILTER_SELECT_TYPES)),
  sorting: PropTypes.shape({
    onSort: PropTypes.func,
    direction: PropTypes.oneOf(Object.values(SORTING_DIRECTIONS)),
    field: PropTypes.string,
  }),
  infiniteScrollProps: PropTypes.shape({
    hasMore: PropTypes.bool,
    next: PropTypes.func,
    isRefetching: PropTypes.bool,
    infiniteScroll: PropTypes.bool,
  }),
  columnFilter: PropTypes.object,
  hidePaginationUI: PropTypes.bool,
}

Table.defaultProps = {
  hidePaginationUI: false,
}

export default Table
