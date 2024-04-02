import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  snackbar: ({ breakpoints }) => ({
    top: {
      xs: 0,
      sm: 24,
      lg: 'unset',
    },
    [breakpoints.only('xs')]: { right: 0, left: 0 },
    bottom: {
      lg: 0,
    },
    width: {
      xs: '100vw',
      sm: 'unset',
      lg: '100vw',
    },
  }),
  alert: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: {
      xs: 0,
      sm: 1,
      lg: 0,
    },

    '&.MuiAlert-filledInfo': {
      backgroundColor: 'gray.80',
    },
    '&.MuiAlert-filledError': {
      backgroundColor: 'error.main',
    },
    '& .MuiSvgIcon-root': {
      color: 'gray.0',
    },

    '& .MuiAlert-icon': {
      '& svg': {
        color: 'gray.0',
      },

      fontSize: 18,
      marginBottom: 0.25,
      alignSelf: {
        lg: 'center',
      },
      padding: 0,
      marginRight: {
        xs: 1.5,
        lg: 2,
      },
    },
    paddingY: {
      xs: 1.5,
      lg: 2.25,
    },
    paddingX: {
      xs: 2,
      lg: 3,
    },
    width: {
      xs: '100%',
    },

    '& .MuiAlert-action': {
      xs: {
        display: 'none',
        padding: 0,
      },
      sm: {
        display: 'flex',
        paddingY: 0,
        marginLeft: 8,
        alignSelf: 'center',
      },
      lg: {
        marginLeft: 'auto',
        marginRight: 2,
      },
    },

    '& .MuiAlert-message': {
      padding: 0,
    },
  },

  title: {
    display: 'block',
    alignSelf: 'center',
    color: 'gray.0',
  },
  description: {
    paddingTop: 0.5,
  },
  centerItems: {
    alignItems: 'center',
  },
}
