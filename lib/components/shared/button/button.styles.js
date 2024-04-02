import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  removeDefault: {
    ':focus, :active': {
      color: 'initial',
    },
  },
  button: {
    '&.MuiButton-root': { lineHeight: 1 },
    typography: 'button',
    boxShadow: 0,
    ':hover, :active': { boxShadow: 0, color: 'initial' },
    '.MuiButton-endIcon, .MuiButton-startIcon': {
      '.MuiSvgIcon-root': {
        fontSize: 24,
      },
    },
    '&.MuiButton-sizeSmall': {
      '.MuiButton-endIcon, .MuiButton-startIcon': {
        '.MuiSvgIcon-root': {
          fontSize: 16,
        },
      },
    },
  },

  buttonSize: {
    minWidth: 80,
    '&.MuiButton-sizeMedium': { height: 40 },
    '&.MuiButton-sizeLarge': { height: 48 },
    '&.MuiButton-sizeSmall': {
      height: 32,
    },
  },

  contained: {
    borderRadius: 6,
    '&.MuiButton-sizeSmall': {
      paddingY: 0.875,
      paddingX: 2,
    },
    '&.MuiButton-sizeMedium': { paddingY: 1.125, paddingX: 2.5 },
    '&.MuiButton-sizeLarge': { paddingY: 1.625, paddingX: 3 },
  },

  outlined: {
    borderRadius: 6,
    '&.MuiButton-sizeLarge': { paddingY: 1.375, paddingX: 2.875, borderRadius: 6 },
    '&.MuiButton-sizeMedium': { paddingY: 0.875, paddingX: 2.375, borderRadius: 5 },
    '&.MuiButton-sizeSmall': {
      paddingY: 0.625,
      paddingX: 1.875,
      borderRadius: 4,
    },
    '&:hover': {
      backgroundColor: 'gray.3',
      borderColor: 'gray.12',
    },
    '&:focus': {
      backgroundColor: 'gray.8',
      borderColor: 'gray.16',
    },
    '&.Mui-disabled:not(.MuiButton-outlinedPrimary)': {
      backgroundColor: 'gray.0',
      color: 'gray.16',
      borderColor: 'gray.12',
      '.MuiButton-endIcon, .MuiButton-startIcon': {
        color: 'gray.16',
      },
    },
    '.MuiTouchRipple-root': {
      color: 'gray.40',
    },
  },

  primary: {
    color: 'gray.0',
    '&.MuiButton-outlined': {
      color: 'primary.main',
      backgroundColor: 'gray.0',
      border: 2,
      ':hover': {
        border: 2,
        backgroundColor: 'primary.lightest',
      },
      ':focus': {
        backgroundColor: 'primary.lightest',
        color: 'primary.dark',
        borderColor: 'primary.dark',
      },
      '&.Mui-disabled': { borderColor: 'gray.12' },
    },
    '&.Mui-disabled': {
      backgroundColor: 'gray.12',
      color: 'gray.0',
      borderColor: 'gray.12',
    },
    ':focus': {
      backgroundColor: 'primary.darkest',
    },
    '&.MuiButton-sizeLarge': { paddingX: 2.75, borderRadius: 6 },
    '&.MuiButton-sizeMedium': { paddingX: 2.25, borderRadius: 5 },
    '&.MuiButton-sizeSmall': { paddingX: 1.75, borderRadius: 4 },
  },

  secondary: {
    backgroundColor: 'gray.0',
    color: 'primary.main',
    borderColor: 'gray.12',
    '&.Mui-disabled': { borderColor: 'gray.12' },
  },

  gray: {
    backgroundColor: 'gray.0',
    borderColor: 'gray.12',
    color: 'gray.80',
    '&.Mui-disabled': { borderColor: 'gray.16', color: 'gray.16' },
    '&:not(.Mui-disabled)': {
      '.MuiButton-endIcon, .MuiButton-startIcon': {
        color: 'gray.64',
      },
    },
    '&:hover': {
      backgroundColor: 'gray.3',
      borderColor: 'gray.12',
      color: 'gray.80',
    },
  },

  iconButton: {
    '&.MuiIconButton-sizeLarge': {
      width: 72,
      height: 72,
    },
    '&.MuiIconButton-sizeMedium': {
      width: 40,
      height: 40,
    },
    '&.MuiIconButton-sizeSmall': {
      width: 32,
      height: 32,
      '.MuiIcon-root, .MuiSvgIcon-root': {
        fontSize: 19,
      },
    },
    '&.MuiIconButton-sizeMedium, &.MuiIconButton-sizeLarge': {
      '.MuiIcon-root, .MuiSvgIcon-root': {
        fontSize: 20.58,
      },
    },
    ':hover, :focus': {
      border: 1,
    },
  },

  iconButtonStroke: {
    border: 1,
    borderColor: 'gray.12',
  },
  primaryIconButton: {
    backgroundColor: 'primary.main',
    color: 'gray.0',
    ':focus': {
      backgroundColor: 'primary.darkest',
      borderColor: 'primary.darkest',
    },
    ':hover': {
      backgroundColor: 'primary.dark',
      borderColor: 'primary.dark',
    },

    '&.Mui-disabled': {
      border: 1,
      borderColor: 'gray.8',
      color: 'gray.0',
      backgroundColor: 'gray.12',
    },
  },
  grayIconButton: {
    color: 'gray.64',
    backgroundColor: 'gray.0',
    ':hover': {
      backgroundColor: 'gray.3',
      borderColor: 'gray.8',
    },
    ':focus': {
      borderColor: 'gray.12',
      backgroundColor: 'gray.8',
    },
    '&.Mui-disabled': {
      borderColor: 'gray.16',
      color: 'gray.16',
    },
  },
  box: {
    padding: 2.5,
    lineHeight: 1.42,
    typography: 'button',
    height: 96,
    width: 160,
    color: 'gray.64',
    border: 1,
    borderColor: 'gray.12',
    ':hover': { backgroundColor: 'gray.3' },
    ':focus': { backgroundColor: 'gray.8' },
    '&.MuiButton-root': {
      '.MuiIcon-root, .MuiSvgIcon-root': {
        color: 'gray.56',
        fontSize: 22,
      },
    },

    '&.Mui-disabled': {
      borderColor: 'gray.8',
      color: 'gray.16',
      '.MuiIcon-root, .MuiSvgIcon-root': {
        color: 'gray.16',
      },
    },
  },

  text: {
    minWidth: 'auto',
    backgroundColor: 'transparent',
    paddingX: 0,
    paddingY: 0.625,
    color: 'primary.main',
    ':hover, :focus': {
      backgroundColor: 'transparent',
      color: 'primary.dark',
    },
    '&.Mui-disabled': {
      color: 'gray.16',
    },
    '.MuiButton-startIcon': {
      marginRight: 0.75,
    },
  },

  textStroke: {
    borderRadius: 6,
    border: 1,
    borderColor: 'gray.12',
  },

  textIcon: { paddingLeft: 0.75, paddingY: 0.22 },

  buttonTextPadding: {
    paddingY: 1.213,
    paddingX: 2,
  },

  minTargetHeight: {
    position: 'relative',
    '&.MuiButton-sizeSmall, &.MuiButton-text': {
      '&:after': {
        content: '" "',
        height: 40,
        position: 'absolute',
        display: 'block',
        left: 0,
        right: 0,
        borderRadius: 6,
      },
    },
  },
  buttonImage: {
    width: 32,
    height: 32,
  },
}
