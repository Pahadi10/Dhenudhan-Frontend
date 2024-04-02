import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  textFieldBg: {
    '& .MuiOutlinedInput-root ': {
      backgroundColor: 'transparent',
    },
    '& .MuiInputLabel-root': {
      color: 'gray.56',
    },
    '& .MuiOutlinedInput-input ': {
      color: 'gray.56',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray.16',
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.56',
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'gray.64',
    },

    '& .Mui-error': {
      color: 'error.main',
    },
    '& .Mui-disabled.Mui-error': {
      color: 'gray.40',
      '& .MuiInputLabel-asterisk.Mui-error': {
        color: 'gray.40',
      },
    },
    '& .Mui-disabled > .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray.16',
      color: 'gray.16',
    },
  },
  textRootWithStringAdornment: {
    '& .MuiInputLabel-root': {
      marginLeft: 3,
      color: 'gray.56',
    },
    '& .MuiOutlinedInput-root ': {
      backgroundColor: 'transparent',
    },
    '& .MuiOutlinedInput-input ': {
      color: 'gray.56',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray.16',
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.56',
      },
    },
  },
  textRoot: {
    '& .MuiInputLabel-root': {
      marginLeft: 5.25,
      color: 'gray.56',
    },
    '& .MuiOutlinedInput-root ': {
      backgroundColor: 'transparent',
    },
    '& .MuiOutlinedInput-input ': {
      color: 'gray.56',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray.16',
    },
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.56',
      },
    },
    '& .MuiFormHelperText-root': {
      color: 'gray.64',
    },
    '& .Mui-error': {
      color: 'error.main',
    },
  },
  topLabel: {
    typography: 'header4',
    color: 'gray.64',
    lineHeight: 1.43,
  },
  labelBox: {
    marginY: 1.25,
    color: 'gray.64',
    alignItems: 'center',
    display: 'flex',
    '& svg': {
      color: 'gray.56',
    },
  },
  labelBoxError: {
    color: 'error.main',
    alignItems: 'center',
    display: 'flex',
    marginY: 1.25,
  },
  disabledLabel: {
    color: 'gray.40',
    borderColor: 'gray.16',
    alignItems: 'center',
    display: 'flex',
    '& .Mui-disabled.Mui-error': {
      color: 'gray.40',
      '& .Mui-error': {
        color: 'gray.40',
      },
    },
  },
  labelIcon: {
    width: 16,
    height: 16,
    display: 'inline-block',
    marginLeft: 8,
  },
  leftText: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.33,
  },
  rightText: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.33,
    textAlign: 'end',
  },
  errorIcon: {
    width: 24,
    height: 24,
    color: 'red',
  },
  textEndAdornment: {
    fontSize: 16,
    color: 'gray.56',
    padding: 1,
    borderRadius: 0.5,
    backgroundColor: 'gray.16',
  },
  eyeIcon: {
    width: 24,
    height: 24,
    cursor: 'pointer',
    color: 'gray.56',
  },
  stringStartAdornmentStyle: {
    marginRight: 1,
  },
  startAdornmentStyle: {
    width: 16,
    height: 12,
    marginRight: 3,
    '& .MuiSvgIcon-root': {
      width: 26,
    },
    marginLeft: 0.25,
    color: 'gray.56',
  },
  errorEndAdornment: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.5,
    marginRight: 1.25,
  },
  helperText: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  helperTextDisable: {
    color: 'gray.40',
  },
  disabledIcon: {
    color: 'gray.40',
  },
  hide: {
    visibility: 'hidden',
  },
  show: {
    visibility: 'visible',
  },
}
