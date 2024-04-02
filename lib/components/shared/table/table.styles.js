import '_utils/type-defs.util'
import { SORTING_DIRECTIONS, FILTER_SELECT_TYPES } from './table.constants'

/** @type {Styles} */
export const styles = {
  row: {
    borderColor: 'gray.8',
    borderWidth: 1,
    borderStyle: 'solid',
    borderBottom: 0,
  },
  rowCell: {
    border: 0,
    maxWidth: 250,
    overflowWrap: 'break-word',
  },
  table: {
    borderColor: 'gray.8',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2.5,
  },
  title: {
    color: 'gray.100',
    typography: 'header1',
    lineHeight: 1.4,
  },
  flex: {
    display: 'flex',
  },
  filtersRoot: {
    display: 'flex',
  },
  columnsFilters: {
    backgroundColor: 'gray.0',
    display: 'flex',
    alignItems: 'center',
  },
  flexCenter: { display: 'flex', alignItems: 'center' },
  flexSpaceBetween: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  clearFilterContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 154,
    height: 56,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray.8',
    padding: 2,
    borderTopLeftRadius: 8,
  },
  filterLabelContainer: {
    display: 'flex',
    alignItems: 'center',
    width: 148,
    height: 56,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray.8',
    padding: 2.5,
    borderTopLeftRadius: 8,
  },
  clearFilterButton: {
    padding: 0,
    '.MuiButton-startIcon': {
      marginRight: 2,
      marginLeft: 0,
    },
  },
  filterIcon: { color: 'gray.56', fontSize: 24, marginRight: 1.5 },
  filtersLabel: { color: 'gray.64' },
  secondaryActionContainer: { marginRight: 2.5 },
  secondaryAction: { borderWidth: 1, borderColor: 'gray.12', borderStyle: 'solid' },
  toolbarDivider: { height: 32, width: 2, borderColor: 'gray.12', marginLeft: 1.5 },
  paginationContainer: { display: 'flex', alignItems: 'center', marginLeft: 2.5 },
  rowsPerPageLabel: { color: 'gray.64' },
  pageQuantityLabel: { marginLeft: 2, color: 'gray.64' },
  pageQuantityContainer: { display: 'flex', gap: 1 },
  hidePaginationUI: { visibility: 'hidden' },
  paginationIconsContainer: { display: 'flex', marginLeft: 2 },
  paginationSelectContainer: { marginLeft: 1 },
  search: {
    root: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      '.MuiOutlinedInput-root': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 8,
      },
      'div > .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.8',
      },
      '.MuiSvgIcon-root': {
        fontSize: 24,
        color: 'primary.main',
      },
    },
    searchFilter: {
      width: '15%',
    },
    onlySearch: {
      '.MuiOutlinedInput-root': {
        borderTopLeftRadius: 8,
      },
    },
  },
  paginationSelect: {
    root: {
      '&:hover': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray.56',
        },
      },
      '&.MuiOutlinedInput-root': {
        paddingRight: 1,
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderRadius: 5,
        borderColor: 'gray.12',
      },
      '.MuiSelect-select': {
        paddingY: 0.75,
        paddingLeft: 2,
        paddingRight: 3,
        typography: 'header4',
        color: 'gray.56',
      },
      '.MuiSelect-icon': {
        marginLeft: 1,
        marginRight: 1,
        color: 'gray.56',
      },
      '.MuiMenuItem-root': {
        ':hover': {
          backgroundColor: 'primary.lightest',
        },
      },
      '.Mui-selected': {
        backgroundColor: 'primary.lightest',
        color: 'primary.main',
      },
      '.MuiPaper-root': {
        backgroundColor: 'gray.0',
        color: 'gray.80',
      },
    },
  },
  filterSelect: {
    renderValue: {
      paddingRight: 6,
      width: '75%',
    },
    root: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 0,
    },
    select: {
      '.MuiList-root': {
        backgroundColor: 'gray.0',
      },
      '&:hover': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray.16',
          borderLeftWidth: 1,
        },
      },
      '&.MuiOutlinedInput-root': {
        minWidth: 180,
        height: 56,
        paddingRight: 1,
        typography: 'header4',
        color: 'gray.80',
        borderRadius: 0,
      },
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.8',
        borderLeft: 0,
      },
      '.MuiSelect-select': {
        paddingY: 2,
        paddingLeft: 2,
        paddingRight: 3,
      },
      '.MuiSelect-icon': {
        marginLeft: 1,
        marginRight: 1,
      },
      '.MuiMenuItem-root': {
        typography: 'large',
        paddingY: 1.5,
        color: 'gray.80',
        '&:hover': {
          backgroundColor: 'primary.lightest',
        },
      },
      '.MuiSvgIcon-root': {
        color: 'gray.56',
      },
      '.Mui-selected': {
        backgroundColor: 'primary.lightest',
      },
    },
    clearButton: {
      '.MuiSvgIcon-root': {
        color: 'primary.main',
      },
      zIndex: 5,
    },
    clearButtonContainer: { position: 'absolute', right: 40 },
    selectedPlaceholder: { color: 'gray.56' },
    value: {
      color: 'primary.main',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    placeholder: { color: 'gray.80' },
  },
  head: { backgroundColor: 'gray.3' },
  tableContainer: {
    height: '100%',
    overflow: 'overlay',
    scrollbarColor: 'gray.3',
    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar:horizontal': {
      height: '4px',
      backgroundColor: '#303137',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#303137',
    },
    '::-webkit-scrollbar-thumb:horizontal': {
      background: '#303137',
      width: '4px',
    },
  },
  tableHeader: {
    '& .MuiTableHead-root': {
      position: 'sticky',
      top: -1,
      zIndex: 10,
      backgroundColor: 'gray.3',
    },
  },
  paperContainer: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'inherit',
  },
  header: { color: 'gray.80' },
  rowLabel: { color: 'gray.80', typography: 'medium' },
  globalClientSideFilter: {
    height: 56,
    width: '100%',
    backgroundColor: 'gray.0',
  },
  loadingContainer: {
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginY: 1,
  },
  emptyContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 9.25,
    paddingBottom: 10.5,
    borderWidth: 1,
    borderColor: 'gray.8',
    borderStyle: 'solid',
    borderTopWidth: 0,
  },
  emptyIcon: { color: 'gray.16', fontSize: 40 },
  copyIcon: {
    verticalAlign: 'bottom',
    fontSize: 20,
    marginLeft: 1,
    color: 'gray.64',
    cursor: 'pointer',
    '&:hover': {
      color: 'primary.main',
    },
  },
  brandNameContainer: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'gray.16',
      '& .MuiTypography-body1': {
        color: 'primary.main',
      },
    },
  },
  headerButton: {
    ':hover, :focus': {
      '.MuiTypography-root': {
        color: 'gray.100',
      },
    },
    '.MuiTypography-root': {
      color: 'gray.80',
    },
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    cursor: 'pointer',
  },
}

export const handleStylesWithProps = ({
  opacity,
  canGoBack,
  canGoForward,
  sorting,
  column,
  filterSelectType,
  isLoading,
}) => ({
  row: {
    opacity,
  },
  goBackIcon: {
    color: canGoBack && !isLoading ? 'gray.56' : 'gray.16',
    cursor: canGoBack && !isLoading ? 'pointer' : 'unset',
  },
  goForwardIcon: {
    color: canGoForward && !isLoading ? 'gray.56' : 'gray.16',
    cursor: canGoForward && !isLoading ? 'pointer' : 'unset',
  },
  filterSelect: {
    select: {
      minWidth: filterSelectType === FILTER_SELECT_TYPES.date ? 300 : 'unset',
    },
    headerButtonAsc: {
      opacity:
        SORTING_DIRECTIONS.desc !== sorting?.direction || column.id !== sorting?.field ? 1 : 0.35,
      marginBottom: -1.5,
      color: 'gray.56',
      fontSize: 24,
    },
    headerButtonDesc: {
      opacity:
        SORTING_DIRECTIONS.asc !== sorting?.direction || column.id !== sorting?.field ? 1 : 0.35,
      fontSize: 24,
      color: 'gray.56',
    },
  },
})
