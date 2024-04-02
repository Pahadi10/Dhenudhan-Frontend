import { palette } from '_styles/material-ui/palette'
import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  alert: ({ breakpoints }) => ({
    background: 'transparent',
    borderRadius: 0,
    padding: 0,
    '.MuiAlert-message': {
      paddingY: 0,
      flexGrow: {
        xs: 1,
        sm: 0,
      },
    },
    '.MuiAlert-icon': {
      paddingY: 0,
      marginRight: 0.75,
    },
    '.MuiAlert-action': {
      paddingY: 0,
      flexBasis: {
        xs: '100%',
        sm: 'auto',
      },
      paddingLeft: { xs: 4.5, sm: 2 },
      margin: 0,
      marginLeft: 'auto',
    },
    [breakpoints.down('sm')]: {
      borderRadius: 1,
    },
  }),

  mediumBannerAlert: {
    paddingY: {
      xs: 2,
      sm: 1.5,
    },
    paddingLeft: {
      xs: 2,
      sm: 2.25,
    },
    paddingRight: {
      xs: 2,
      sm: 2.5,
    },
    '.MuiAlert-message': {
      paddingY: 0,
      marginY: 'auto',
      '> .MuiGrid-root': {
        flexFlow: {
          xs: 'column',
          sm: 'row',
        },
      },
    },
    '.MuiAlert-icon': {
      '.MuiSvgIcon-root': {
        marginY: {
          xs: 0.4,
          sm: 'auto',
        },
      },
      marginRight: {
        xs: 2.5,
        sm: 2.25,
      },
    },
  },
  smallBannerAlert: {
    paddingLeft: 2.25,
    paddingRight: 2.5,
    paddingY: 1.25,

    '.MuiAlert-icon': {
      marginRight: {
        xs: 1.25,
      },
    },
    '.MuiAlert-message': {
      paddingY: 0,
      marginY: 'auto',
    },
  },

  message: {
    color: 'gray.80',
    alignItems: 'center',

    display: 'flex',
  },
  messageSubContainer: { display: 'flex', flexWrap: 'wrap', alignItems: 'center' },

  icon: {},

  smallIcon: {
    height: 12,
  },
  smallTypography: {
    typography: 'small',
  },
  weightBold: {
    fontWeight: 600,
  },
  extraInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: {
      xs: 0.5,
      sm: 0,
    },
    minWidth: 55,
  },
  extraInfoText: {
    color: 'gray.56',
    typography: 'medium',
    minWidth: 'max-content',
  },
  description: {
    typography: 'medium',
  },
  mainMessage: {
    typography: 'header4',
    marginLeft: 0.625,
  },
  infoMessage: {
    typography: 'medium',
    color: 'gray.80',
  },

  successBackground: {
    backgroundColor: 'success.lightest',
  },
  errorBackground: {
    backgroundColor: 'error.lightest',
  },
  warningBackground: {
    backgroundColor: 'warning.lightest',
  },
  infoBackground: {
    backgroundColor: 'gray.3',
  },

  successBackgroundSecondary: {
    backgroundColor: 'success.main',
  },
  errorBackgroundSecondary: {
    backgroundColor: 'error.main',
  },
  warningBackgroundSecondary: {
    backgroundColor: 'warning.main',
  },
  infoBackgroundSecondary: {
    backgroundColor: 'gray.3',
  },

  successColor: {
    color: 'success.main',
    '.MuiAlert-icon, .MuiButtonBase-root': {
      color: 'success.main',
    },
    '.MuiButtonBase-root:hover': {
      color: 'success.dark',
    },
  },
  successColorSecondary: {
    color: 'success.lightest',
    '.MuiAlert-icon, .MuiButtonBase-root': {
      color: 'success.lightest',
    },
    '.MuiButtonBase-root:hover': {
      color: 'success.dark',
    },
  },
  errorColor: {
    color: 'error.main',
    '.MuiAlert-icon, .MuiButtonBase-root': {
      color: 'error.main',
    },
    '.MuiButtonBase-root:hover': {
      color: 'error.dark',
    },
  },
  errorColorSecondary: {
    color: 'error.lightest',
    '.MuiAlert-icon, .MuiButtonBase-root': {
      color: 'error.lightest',
    },
    '.MuiButtonBase-root:hover': {
      color: 'error.dark',
    },
  },
  warningColorSecondary: {
    color: 'warning.lightest',
    '.MuiAlert-icon, .MuiButtonBase-root': {
      color: 'warning.lightest',
    },
    '.MuiButtonBase-root:hover': {
      color: 'warning.dark',
    },
  },
  warningColor: {
    color: 'warning.main',
    '.MuiAlert-icon, .MuiButtonBase-root': {
      color: 'warning.main',
    },
    '.MuiButtonBase-root:hover': {
      color: 'warning.dark',
    },
  },
  infoColor: {
    '.MuiAlert-icon': {
      color: 'gray.64',
    },
  },
  rounded: {
    borderRadius: 1,
  },
  standardCircle: {
    color: 'gray.40',
  },
  dotDivider: {
    marginX: 0.3,
    fontSize: 5,
  },
  iconColor: {
    success: {
      color: 'success.main',
      '.MuiAlert-icon, .MuiButtonBase-root': {
        color: 'success.main',
      },
      '.MuiButtonBase-root:hover': {
        color: 'success.dark',
      },
    },
    error: {
      color: 'error.main',
      '.MuiAlert-icon, .MuiButtonBase-root': {
        color: 'error.main',
      },
      '.MuiButtonBase-root:hover': {
        color: 'error.dark',
      },
    },
    warning: {
      color: 'warning.main',
      '.MuiAlert-icon, .MuiButtonBase-root': {
        color: 'warning.main',
      },
      '.MuiButtonBase-root:hover': {
        color: 'warning.dark',
      },
    },
    info: {
      '.MuiAlert-icon': {
        color: 'gray.64',
      },
    },
  },
  svgIconColor: {
    success: {
      color: palette.success.main,
    },
    error: {
      color: palette.error.main,
    },
    warning: {
      color: 'warning.main',
    },
    successSecondary: {
      color: palette.success.lightest,
    },
    errorSecondary: {
      color: palette.error.lightest,
    },
    warningSecondary: {
      color: palette.warning.lightest,
    },
    info: {
      color: 'gray.64',
    },
  },
  svgIconSize: {
    small: {
      fontSize: 16,
    },
    medium: {
      fontSize: 24,
    },
  },
  loading: {
    '.MuiAlert-message': {
      margin: 0,
    },
  },
  loadingBackground: {
    backgroundColor: 'gray.3',
  },
  flexRowCentered: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  circularProgress: { color: 'gray.40' },
  rectangularSkeleton: { marginLeft: 1 },
  warningAdditionalMessage: {
    color: 'warning.main',
    typography: 'medium',
  },
}

export const handleStylesWithProps = ({ hasBackground }) => {
  return {
    message: {
      justifyContent: {
        xs: hasBackground ? 'start' : 'space-between',
        sm: 'start',
      },
    },
    extraInfoText: {
      marginLeft: {
        xs: hasBackground ? 0 : 1,
        sm: 0,
      },
    },
  }
}
