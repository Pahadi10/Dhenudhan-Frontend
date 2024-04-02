import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  itemLabel: {
    margin: 0,
    marginLeft: 2,
    '& .MuiListItemText-primary': {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.43,
      margin: 0,
    },
  },
  customPageLabelContainer: { marginBottom: 2 },
  menuItemContainer: { paddingY: 2, paddingX: 2.5 },
  customPageLabel: { color: 'gray.80', typography: 'header4', lineHeight: 1.4 },
  buttonContainer: { paddingY: 1.25, paddingX: 1.5 },
  divider: { borderColor: 'gray.12' },
  menu: {
    '& .MuiPaper-root': {
      marginLeft: 2.5,
      backgroundColor: 'gray.3',
      padding: 0,
      '& .MuiList-root': {
        padding: 0,
      },
      '& .MuiMenuItem-root': {
        color: 'gray.80',
        padding: 0,
      },
    },
  },
  angleRightIcon: {
    color: 'gray.56',
    fontSize: 16,
  },
  menuIcon: {
    fontSize: 20,
    minWidth: 'auto',
  },
  itemIcon: {
    minWidth: 0,
    justifyContent: 'center',
  },
  itemButton: {
    width: '100%',
    minHeight: 36,
    paddingY: 1,
    paddingX: 1.25,
    borderRadius: 1,
    marginBottom: 0.5,
    justifyContent: 'initial',
    '& .MuiListItemIcon-root': {
      color: 'gray.64',
    },
    '& .MuiListItemText-primary': {
      color: 'gray.80',
    },
    '&:last-child': {
      marginBottom: 0,
    },
    '&:hover': {
      backgroundColor: 'primary.lightest',
      '& .MuiListItemIcon-root': {
        color: 'primary.main',
      },
      '& .MuiListItemText-primary': {
        color: 'primary.main',
      },
    },
  },
  customItemButton: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 1,
    paddingRight: 0.5,
    paddingY: 1.25,
    marginBottom: 0.5,
    '& .MuiListItemIcon-root': {
      color: 'gray.64',
    },
    '& .MuiListItemText-primary': {
      color: 'gray.80',
    },
    '&:last-child': {
      marginBottom: 0,
    },
    borderRadius: 2,
    borderColor: 'gray.12',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  openedCustomItemButton: {
    borderWidth: 0,
    width: '100%',
  },
}
