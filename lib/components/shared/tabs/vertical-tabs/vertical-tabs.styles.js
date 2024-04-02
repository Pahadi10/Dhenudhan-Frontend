import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  container: {
    display: 'flex',
  },
  tabsContainer: {
    width: 300,
  },
  verticalTabs: {
    fontWeight: 600,
    fontSize: 14,
    lineHeight: '20px',
    textAlign: 'left',
    flexDirection: 'row',
    padding: 1,
    justifyContent: 'flex-start',
    minHeight: 'auto',
    borderRadius: 1,
    color: 'gray.80',
    '& .MuiTab-iconWrapper': {
      marginRight: 2,
      color: 'gray.56',
    },
    ':hover': {
      backgroundColor: 'gray.3',
      color: 'gray.80',
      '.MuiBox-root': {
        color: 'gray.56',
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'primary.lightest',
      '& .MuiTab-iconWrapper': {
        color: 'primary.main',
      },
      ':hover': {
        color: 'primary.main',
      },
    },
  },
  verticalTabsIndicator: {
    display: 'none',
  },
  contentPanel: {
    width: '100%',
    '&.MuiTabPanel-root': {
      padding: 1,
    },
  },
  mainContainer: {
    minWidth: 306,
    marginRight: 0.5,
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  numberList: {
    paddingTop: 0,
  },
  icon: {
    fontSize: 20,
  },
  numberListItem: {
    borderRadius: 1,
    color: 'gray.40',
    ':hover': {
      backgroundColor: 'gray.3',
      color: 'primary.main',
      '.MuiListItemText-primary': {
        color: 'gray.80',
      },
      '.MuiBox-root': {
        color: 'gray.56',
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'primary.lightest',
      '& span': {
        color: 'primary.main',
      },
      '& .MuiBox-root': {
        backgroundColor: 'primary.main',
        color: 'gray.0',
      },
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
      },
      ':hover': {
        '& .MuiListItemText-primary': {
          color: 'primary.main',
        },
      },
    },
  },
  numberListItemIcon: {
    '&.Mui-selected': {
      '& .MuiBox-root': {
        backgroundColor: 'initial',
      },
    },
  },

  listItem: {
    color: 'gray.40',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0)',
      color: 'primary.main',
      '.MuiListItemText-primary': {
        color: 'primary.main',
      },
      '.MuiBox-root': {
        color: 'primary.main',
        backgroundColor: 'primary.lightest',
      },
    },
    '&.Mui-selected': {
      backgroundColor: 'rgba(0,0,0,0)',
      '& span': {
        color: 'primary.main',
      },
      '& .MuiBox-root': {
        backgroundColor: 'primary.lightest',
        color: 'primary.main',
      },
      '& .MuiSvgIcon-root': {
        color: 'primary.main',
      },
    },
  },
  numberBox: {
    marginRight: 2,
    backgroundColor: 'gray.3',
    borderRadius: 1,
    paddingX: 1,
    paddingY: 0.25,
    fontSize: 12,
    fontWeight: 600,
    lineHeight: 1.4,
  },
  iconBox: {
    backgroundColor: 'initial',
    color: 'gray.56',
    marginRight: 2,
    display: 'flex',
  },
  numberBoxSelected: {
    backgroundColor: 'primary.main',
    color: 'gray.0',
  },

  primary: {
    fontSize: 14,
    color: 'gray.80',
    fontWeight: 600,
  },
  subMenuList: {
    marginLeft: 4,
  },
  subMenu: {
    borderRadius: 1,
    '&.Mui-selected': {
      '& .MuiListItemText-primary': {
        color: 'primary.main',
      },
      '& .MuiBox-root': {
        backgroundColor: 'primary.main',
        color: 'gray.0',
      },
    },
    ':hover': {
      backgroundColor: 'gray.3',
    },
  },
  subMenuItem: {
    fontSize: 14,
    color: 'gray.80',
    fontWeight: 600,
  },
  selectWrapper: {
    paddingX: { xs: 2.25, sm: 0 },
    maxWidth: 308,
    marginBottom: {
      xs: 3.125,
      sm: 4,
    },
  },
  divider: {
    borderTop: 1,
    borderBottom: 0,
    borderColor: 'gray.8',
    backgroundColor: 'gray.3',
    height: 8,
  },
  selectSize: {
    width: '100%',
    minWidth: 312,
    height: 40,
  },
  header: {
    position: 'sticky',
  },
}

export const handleStylesWithProps = ({ matches1440 }) => ({
  mainContainer: {
    minWidth: matches1440 ? 306 : 230,
  },
})
