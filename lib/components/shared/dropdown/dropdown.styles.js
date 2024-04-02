import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  selectRoot: {
    width: '100%',
    position: 'relative',
    '& .MuiPaper-root > ul': {
      paddingBottom: 0,
    },
    '& ul:first-child': {
      '& .MuiFormControl-root': {
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
      },
      '& input': {
        color: 'gray.56',
        paddingTop: 1.25,
        paddingBottom: 1.5,
      },
      '& fieldset': {
        border: 'none',
      },
    },
    '& ul:last-child': {
      '& .MuiBox-root': {
        '& button:first-child': {
          '& svg': {
            color: 'primary.main',
          },
        },
        '& button:last-child': {
          color: 'gray.56',
        },
      },
    },
  },
  formControl: {
    width: '100%',
    borderColor: 'gray.16',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.56',
      },
    },
  },
  select: ({ breakpoints }) => ({
    color: 'gray.80',
    width: '100%',
    borderRadius: 1,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 400,
    '& .MuiSelect-select': {
      whiteSpace: 'pre-wrap',
      overflow: 'auto',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray.16',
    },
    '&.Mui-focused': {
      color: 'primary.main',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
      },
    },
    [breakpoints.down('md')]: {
      '& .MuiPopover-root': {
        '& .MuiPopover-paper': {
          width: '100%',
          maxWidth: '100%',
          maxHeight: '50%',
          bottom: 0,
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
          boxShadow: '0px 1px 4px rgba(30, 32, 38, 0.16)',
          left: '0 !important', // Used for overriding inline style applied on dropdown options modal when open
          top: 'initial !important', // Used for overriding inline style applied on dropdown options modal when open
        },
        '& .MuiMenu-list': {
          paddingY: 2,
        },
      },
    },
    '& .MuiSvgIcon-root': {
      color: 'gray.56',
    },
    '& .Mui-checked': {
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
      },
    },
    '.MuiPaper-root': {
      backgroundColor: 'gray.0',
    },
  }),
  label: {
    '&.Mui-focused': {
      color: 'primary.main',
    },
    color: 'gray.56',
  },
  checkbox: {
    margin: 0,
    marginRight: 2,
    padding: 0,
  },
  menuItemAvatar: {
    marginRight: 1.5,
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  hasDivider: {
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: 'gray.8',
  },
  menuItems: {
    paddingTop: 1.5,
    paddingBottom: 1.5,
    '&:hover': {
      backgroundColor: 'primary.lightest',
    },
    '& .MuiFormGroup-root': {
      width: '100%',
      '& .MuiFormControlLabel-root': {
        margin: 0,
      },
      '& .MuiCheckbox-root': {
        padding: 0,
        marginRight: 2,
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'primary.lightest',
      '&:hover': {
        backgroundColor: 'primary.lightest',
      },
      '& .MuiListItemText-primary': {
        fontWeight: 600,
        color: 'primary.main',
      },
      '& .MuiListItemIcon-root': {
        color: 'primary.main',
      },
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
      },
    },
  },
  menuItemText: {
    color: 'gray.80',
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 1.5,
    '& span': {
      color: 'gray.80',
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
  menuItemCheckbox: {
    padding: 0,
    marginRight: 2.5,
  },
  checkboxFormGroup: {
    '&.MuiFormGroup-root': {
      width: 'auto!important',
    },
  },
  menuItemIcon: {
    minWidth: 'auto !important',
    marginRight: 1.5,
  },
  selectedItemStack: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
  },
  chipRoot: {
    backgroundColor: 'primary.lightest',
    color: 'primary.main',
    fontWeight: 600,
    paddingY: 0.75,
    paddingX: 0,
    borderRadius: 1,
    fontSize: 14,
    '& .MuiChip-deleteIcon': {
      color: 'primary.main',
      '&:hover': {
        color: 'primary.dark',
      },
    },
  },
  checkboxLabel: {
    color: 'gray.80',
  },
  bottomSheetPaperRoot: {
    position: 'sticky',
    bottom: 0,
    left: 0,
    right: 0,
  },
  bottomSheetBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'gray.3',
  },
  searchBarPaperRoot: {
    position: 'sticky',
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
  },
  searchBar: {
    zIndex: 1000,
    width: '100%',
    backgroundColor: 'gray.3',
  },
  searchIcon: { marginRight: 2 },
  clearSearchIcon: { fontSize: 20, cursor: 'pointer' },
  checklistContainer: { display: 'flex', alignItems: 'center' },
  noResultFound: { display: 'flex', justifyContent: 'center', padding: 1, height: 100 },
  scroller: {
    overflow: 'overlay',
    height: 'fit-content',
    maxHeight: '40vh',
    scrollbarColor: 'gray.3',
    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#303137',
    },
  },
}

export const menuItemStyles = () => {
  return { paddingLeft: 2, paddingTop: 1.5, paddingBottom: 1.5 }
}
