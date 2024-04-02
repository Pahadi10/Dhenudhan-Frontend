import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  search: {
    '.MuiOutlinedInput-root': {
      paddingX: 0,
      paddingY: 0,
      typography: 'medium',
      color: 'gray.56',
    },
    '.MuiOutlinedInput-root > .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },
    width: '100%',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 1.5,
    color: 'gray.40',
  },
  thickDivider: {
    backgroundColor: 'gray.3',
    height: 8,
    border: 0,
    borderTop: theme => `1px solid ${theme.palette.gray[8]}`,
  },
  clearSearchIcon: {
    marginRight: 1,
    backgroundColor: 'transparent',
    '.MuiSvgIcon-root': {
      color: 'gray.40',
    },
    ':hover': {
      border: 'none',
      backgroundColor: 'transparent',
    },
    ':focus': {
      border: 'none',
      backgroundColor: 'transparent',
    },
  },
  formTag: {
    width: '100%',
  },
}
