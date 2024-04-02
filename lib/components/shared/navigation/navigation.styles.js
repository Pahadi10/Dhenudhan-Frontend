import '_utils/type-defs.util'

/** @type {Styles} */

const drawerWidth = 240

export const handleStylesWithProps = ({ open }) => {
  const openedMixin = theme => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  })

  const closedMixin = theme => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  })

  return {
    drawerHeading: (theme, open) => ({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0),
      borderBottom: 1,
      borderColor: 'gray.8',
      flexDirection: 'column',
      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.04)',
      ...theme.mixins.toolbar,
    }),
    muiDrawer: theme => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
    logoContainer: {
      width: '100%',
      marginLeft: open ? 2.25 : 0,
      justifyContent: open ? 'flex-start' : 'center',
    },
  }
}

export const styles = {
  angleRightIcon: {
    color: 'gray.56',
    fontSize: 16,
  },
  openMenuIcon: {
    fontSize: 20,
  },
  menuRoot: theme => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    '.MuiDrawer-paper': {
      backgroundColor: 'gray.3',
    },
  }),
  logoContainer: {
    cursor: 'pointer',
    alignItems: 'center',
    display: 'flex',
    height: 64,
  },
  openedImage: {
    height: 32,
    marginTop: 4,
  },
  closedImage: {
    height: 32,
  },
  drawerHeaderBlocks: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingX: 1,
    paddingY: 2,
    justifyContent: 'space-between',
    borderBottom: 1,
    borderColor: 'gray.8',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
  },
  brandName: {
    marginLeft: 1,
  },
  menuButton: {
    color: 'gray.40',
    width: 20,
    height: 20,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  menuList: {
    paddingTop: 2,
    paddingBottom: 0,
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  menuListTop: {
    flexDirection: 'column',
    padding: 0,
    paddingX: 1.5,
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
  selected: {
    backgroundColor: 'primary.lightest',
    '& .MuiListItemIcon-root': {
      color: 'primary.main',
    },
    '& .MuiListItemText-primary': {
      color: 'primary.main',
    },
  },
  locationItemButton: {
    '&:hover': {
      '& .MuiListItemIcon-root': {
        color: 'primary.main',
      },
      '& .MuiListItemText-primary': {
        color: 'primary.main',
      },
    },
  },
  selectedLocation: {
    '& .MuiListItemIcon-root': {
      color: 'primary.main',
    },
    '& .MuiListItemText-primary': {
      color: 'primary.main',
    },
  },
  itemIcon: {
    minWidth: 0,
    justifyContent: 'center',
  },
  itemLabel: {
    margin: 0,
    marginLeft: 2.25,
    '& .MuiListItemText-primary': {
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 1.43,
      margin: 0,
    },
  },
  menuListFooter: {
    flexDirection: 'column',
    display: 'flex',
    marginTop: 2,
    flexWrap: 'wrap',
    borderTop: 1,
    borderColor: 'gray.12',
    paddingX: 0,
    paddingY: 1,
    '& .MuiDivider-fullWidth': {
      borderColor: 'gray.12',
    },
  },
  itemButtonFooter: {
    minHeight: 36,
    justifyContent: 'center',
    paddingX: 0,
    width: 'auto',
    marginBottom: 1,
    '& .MuiListItemIcon-root': {
      color: 'gray.64',
    },
    '& .MuiListItemText-primary': {
      color: 'gray.80',
    },
    '&:hover': {
      color: 'primary.lightest',
      backgroundColor: 'transparent',
      '& .MuiListItemIcon-root': {
        color: 'primary.main',
      },
      '& .MuiListItemText-primary': {
        color: 'primary.main',
      },
    },
  },
  itemButtonFooterRow: {
    marginBottom: 0,
    marginRight: 0.5,
  },
  itemIconFooter: {
    minWidth: 0,
    marginRight: 0,
    justifyContent: 'center',
    '& .MuiAvatar-root': {
      height: 32,
      width: 32,
    },
  },
  selectedAvatar: {
    borderWidth: 2,
    borderColor: 'primary.main',
    borderStyle: 'solid',
    borderRadius: 16,
  },
  menuIcon: {
    fontSize: 20,
    minWidth: 'auto',
  },
  divider: {
    width: '100%',
    marginY: 2,
    borderColor: 'gray.12',
  },
  customDivider: {
    width: 'calc(100% - 16px)',
  },
  row: {
    flexDirection: 'row',
    paddingBottom: 0,
    paddingTop: 0,
    boxShadow: '-2px -1px 2px rgba(0, 0, 0, 0.04)',
    '& .MuiDivider-fullWidth': {
      marginBottom: 0,
    },
    '& .MuiListItemButton-root': {
      paddingY: 1,
      marginBottom: 0,
    },
  },
  newSale: {
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiButtonBase-root': {
      color: 'primary.main',

      '& .MuiButton-startIcon': {
        color: 'primary.main',
      },
    },
  },
  itemButtonUser: {
    padding: 0,
    justifyContent: 'center',
  },
  customHeading: {
    '& .MuiTypography-root': {
      fontSize: 12,
      lineHeight: 1.33,
      fontWeight: 400,
      color: 'gray.64',
    },
    alignSelf: 'flex-start',
    marginBottom: 1.5,
    marginLeft: 1,
  },
  IconButton: {
    width: 'auto',
    padding: 0,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  footerDivider: {
    marginTop: 0.5,
    marginBottom: 1,
  },
  newLinkContainer: { alignSelf: 'flex-start' },
  newLinkButton: { paddingTop: 0.25 },
}
