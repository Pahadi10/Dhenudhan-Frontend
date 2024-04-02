import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    left: 16,
    right: 16,
    zIndex: 99,
    background: 'white',
    boxShadow: '0px -2px 8px rgba(30, 32, 38, 0.06)',
    borderRadius: '16px 16px 0 0',
  },
  bottomNavigation: {
    boxShadow: '0px -2px 8px rgba(30, 32`, 38, 0.06)',
    borderRadius: '16px 16px 0 0',
    height: 64,
  },
  items: {
    '& .MuiBottomNavigationAction-label': {
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.33,
      color: 'grey.56',
      '&.Mui-selected': {
        fontSize: 12,
        fontWeight: 600,
        lineHeight: 1.33,
      },
    },
  },
}
