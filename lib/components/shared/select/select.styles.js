import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  menuItem: {
    typography: 'medium',
  },
  select: {
    minWidth: 81,
    maxWidth: 180,
    typography: 'medium',
    fontWeight: 600,
    '.MuiInputBase-input': {
      paddingY: 0.75,
      color: 'gray.80',
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: 1,
    },
    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        border: 1,
      },
    },
    '.MuiSelect-icon': {
      fontSize: 20,
    },
    '.MuiSelect-iconOpen': {
      transform: 'rotate(0)',
    },
    '.MuiPopover-paper': {
      boxShadow: 4,
    },
    '.MuiSvgIcon-root': { color: 'gray.64' },
    '&.Mui-disabled, &.Mui-disabled:hover': {
      backgroundColor: 'gray.3',
      color: 'gray.40',
      '.MuiOutlinedInput-notchedOutline': { borderColor: 'gray.3' },
      '.MuiSelect-icon, .MuiSvgIcon-root': {
        color: 'gray.16',
      },
    },
  },
  default: {
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray.12',
    },
    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.12',
      },
    },
    '&:hover': { '.MuiOutlinedInput-notchedOutline': { borderColor: 'gray.16' } },
  },
  ghost: {
    backgroundColor: 'gray.0',
    '.MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray.0',
    },
    '&:hover': {
      backgroundColor: 'gray.8',
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.8',
      },
    },
    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'gray.0',
      },
    },
  },

  defaultFiltered: {
    backgroundColor: 'primary.main',
    '.MuiInputBase-input': { color: 'gray.0' },
    '.MuiOutlinedInput-notchedOutline': {
      border: 1,
      borderColor: 'primary.main',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.main',
      },
    },
    '.MuiSelect-icon, .MuiSvgIcon-root': {
      color: 'gray.0',
    },
  },
  ghostFiltered: {
    backgroundColor: 'primary.lightest',
    '.MuiInputBase-input': { color: 'primary.main' },
    '.MuiOutlinedInput-notchedOutline': {
      border: 1,
      borderColor: 'primary.lightest',
    },
    '&:hover': {
      backgroundColor: 'primary.lightest',
      '.MuiOutlinedInput-notchedOutline': { borderColor: 'primary.lightest' },
    },
    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        borderColor: 'primary.lightest',
      },
    },
    '.MuiSelect-icon, .MuiSvgIcon-root': {
      color: 'primary.main',
    },
  },
  defaultSelectOpened: {
    backgroundColor: 'gray.0',
    '.MuiInputBase-input': { color: 'primary.main' },
    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        border: 1,
        borderColor: 'gray.12',
      },
    },
    '.MuiSelect-icon, .MuiSvgIcon-root': {
      color: 'primary.main',
    },
  },
  ghostSelectOpened: {
    backgroundColor: 'gray.0',
    '.MuiInputBase-input': { color: 'primary.main' },
    '&.Mui-focused': {
      '.MuiOutlinedInput-notchedOutline': {
        border: 1,
        borderColor: 'gray.0',
      },
    },
    '&:hover': {
      backgroundColor: 'gray.0',
      '.MuiOutlinedInput-notchedOutline': { borderColor: 'gray.0' },
    },
    '.MuiSelect-icon, .MuiSvgIcon-root': {
      color: 'primary.main',
    },
  },
  startAdornment: {
    fontSize: 16,
    marginRight: 1,
  },
  valueContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  value: {
    typography: 'medium',
    overflow: 'hidden',
    fontWeight: 600,
    textOverflow: 'ellipsis',
  },
}
