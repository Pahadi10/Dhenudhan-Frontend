import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  checkbox: {
    width: 'fit-content',
    '&:not(.Mui-checked):not(.Mui-disabled):not(.MuiCheckbox-indeterminate) > .MuiSvgIcon-root	': {
      color: 'gray.40',
      height: 24,
      width: 24,
    },
    '&.Mui-disabled .MuiSvgIcon-root': {
      color: 'gray.16',
    },
    '& .MuiSvgIcon-root': {
      height: 24,
      width: 24,
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },

  label: {
    color: 'gray.80',

    '&.MuiFormControlLabel-labelPlacementStart': {
      justifyContent: 'space-between',
      paddingLeft: 2.5,
    },
    '.MuiFormControlLabel-label': { typography: 'medium' },
  },

  labelSelected: {
    color: 'primary.main',
    '&.MuiTypography-small': {
      color: 'primary.main',
    },
    '.MuiFormControlLabel-label': {
      fontWeight: 600,
    },
  },
  labelDisabled: {
    color: 'gray.40',
    '&.MuiTypography-small': {
      color: 'gray.40',
    },
    '.MuiFormControlLabel-label': {
      fontWeight: 400,
    },
  },
  box: {
    backgroundColor: 'gray.0',
    borderColor: 'gray.12',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 1,
    outline: 1,
    outlineColor: 'transparent',
    paddingY: 1.8,
    paddingX: 1.4,
    margin: 1.5,
    color: 'gray.80',
    '&:hover': {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: 'gray.40',
    },
  },

  boxSelected: {
    borderWidth: 1,
    borderColor: 'primary.main',
    outline: 1,
    outlineStyle: 'solid',
    outlineColor: 'primary.main',
    color: 'primary.main',
    '&:hover': {
      border: 1,
      outline: 1,
      outlineStyle: 'solid',
      borderColor: 'primary.main',
      outlineColor: 'primary.main',
      color: 'primary.main',
    },
    '& .MuiTypography-root': {
      color: 'primary.main',
    },
  },
  multilineLabel: {
    fontWeight: 600,
    '&.MuiTypography-small': {
      fontWeight: 400,
      color: 'gray.64',
      marginTop: 0.2,
    },
  },
  multilineLabelDisabled: {
    color: 'gray.40',
    '&.MuiTypography-small': {
      color: 'gray.40',
    },
  },
  boxDisabled: {
    color: 'gray.40',
    outlineColor: 'transparent',
    borderColor: 'gray.8',
    '&:hover': {
      outlineColor: 'transparent',
      color: 'gray.8',
      borderColor: 'gray.8',
      border: 1,
      '.MuiFormControlLabel-label': { color: 'gray.40' },
    },
  },
  tooltip: {
    color: 'gray.56',
    padding: 0,
    '.MuiSvgIcon-root': { fontSize: 19.21 },
  },
  labelWrapper: {
    alignItems: 'center',
  },
}
