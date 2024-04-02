import { Box, SvgIcon, Typography } from '@mui/material'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import AngleLeftIcon from '_assets/svgs/angle-left.svg'
import AngleRightIcon from '_assets/svgs/angle-right.svg'

import Loading from '../loading/loading.component'

import { handleStylesWithProps, styles } from './table.styles'
import TablePaginationSelect from './table-pagination-select.component'

const PAGE_SIZE_FIELD_NAME = 'rowsPerPage'

const TablePagination = ({
  onPageSizeChange,
  canGoBack,
  canGoForward,
  onPreviousPage,
  onNextPage,
  pageSizeOptions,
  totalResultsQuantity,
  page,
  currentPageRecords,
  isLoading,
  hidePaginationUI,
}) => {
  const { t } = useTranslation('common')
  const formMethods = useForm({
    defaultValues: {
      [PAGE_SIZE_FIELD_NAME]: pageSizeOptions?.[0]?.value || 10,
    },
  })
  const pageSize = formMethods.watch(PAGE_SIZE_FIELD_NAME)

  const stylesWithProps = handleStylesWithProps({ canGoBack, canGoForward, isLoading })

  useEffect(() => {
    if (pageSize && onPageSizeChange) {
      onPageSizeChange(pageSize)
    }
  }, [pageSize, onPageSizeChange])

  return (
    <Box sx={styles.paginationContainer}>
      {pageSizeOptions?.length > 0 && (
        <>
          <Typography typography="medium" sx={styles.rowsPerPageLabel}>
            {t('components.table.pagination.rowsPerPage')}
          </Typography>
          <Box sx={[styles.paginationSelectContainer, hidePaginationUI && styles.hidePaginationUI]}>
            <FormProvider {...formMethods}>
              <form>
                <TablePaginationSelect options={pageSizeOptions} name={PAGE_SIZE_FIELD_NAME} />
              </form>
            </FormProvider>
          </Box>
        </>
      )}
      {isLoading ? (
        <Box ml={2}>
          <Loading />
        </Box>
      ) : totalResultsQuantity ? (
        <Box sx={styles.pageQuantityContainer}>
          <Typography typography="header4" sx={styles.pageQuantityLabel}>
            {page * pageSize + 1} -{' '}
            {currentPageRecords === pageSize
              ? pageSize * (page + 1)
              : currentPageRecords + pageSize * page}
          </Typography>
          <Typography typography="medium" color="gray.64">
            {t('components.table.pagination.of')}
          </Typography>
          <Typography typography="header4" color="gray.64">
            {totalResultsQuantity}
          </Typography>
        </Box>
      ) : (
        <Box sx={[styles.pageQuantityContainer, hidePaginationUI && styles.hidePaginationUI]}>
          <Typography typography="header4" sx={styles.pageQuantityLabel}>
            0 - 0
          </Typography>
          <Typography typography="medium" color="gray.64">
            {t('components.table.pagination.of')}
          </Typography>
          <Typography typography="header4" color="gray.64">
            0
          </Typography>
        </Box>
      )}
      <Box sx={styles.paginationIconsContainer}>
        <SvgIcon
          component={AngleLeftIcon}
          sx={stylesWithProps.goBackIcon}
          onClick={() => {
            if (canGoBack && !isLoading) {
              onPreviousPage()
            }
          }}
        />
        <SvgIcon
          component={AngleRightIcon}
          sx={stylesWithProps.goForwardIcon}
          onClick={() => {
            if (canGoForward && !isLoading) {
              onNextPage()
            }
          }}
        />
      </Box>
    </Box>
  )
}

TablePagination.propTypes = {
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
  totalResultsQuantity: PropTypes.number,
  currentPageRecords: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  hidePaginationUI: PropTypes.bool,
}

TablePagination.defaultValues = {
  hidePaginationUI: false,
}

export default TablePagination
