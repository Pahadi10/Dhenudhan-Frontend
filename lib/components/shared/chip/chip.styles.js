import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  chip: {
    '&.MuiChip-root': {
      backgroundColor: 'primary.lightest',
      color: 'primary.main',
      fontWeight: 600,
      fontSize: 14,
      borderRadius: 1,
      lineHeight: 1.25,
    },
    '&.Mui-disabled': {
      backgroundColor: 'gray.8',
      color: 'gray.64',
      opacity: 1,
    },
  },
  filterChip: {
    '&.MuiChip-deletable': {
      '.MuiChip-deleteIcon': {
        color: 'primary.main',
        fontSize: 16,
      },
      '.MuiAvatar-root': {
        marginLeft: 0.625,
      },
    },
  },
  smallText: {
    '& .MuiChip-label': {
      fontSize: 12,
    },
  },
  iconChip: {
    '& .MuiChip-label': {
      fontSize: 12,
    },
    '&.MuiChip-root': {
      '.MuiSvgIcon-root': {
        color: 'primary.main',
        fontSize: 14,
      },
    },
  },
  chipLarge: {
    '&.MuiChip-root': {
      padding: 2,
      borderRadius: 1,
      border: '1px solid gray.12',
      height: 'auto',
    },
  },

  labelLine: {
    fontWeight: 600,
    fontSize: 14,
    color: 'gray.80',
  },
  subLabelLine: {
    fontWeight: 400,
    color: 'gray.64',
    fontSize: 12,
  },
  labelSubLabel: {
    alignItems: 'center',
  },
  iconLine: {
    color: 'gray.56',
  },
  iconLabelLine: {
    fontWeight: 600,
    fontSize: 14,
    color: 'gray.80',
  },

  selectedIcon: {
    '&.MuiChip-root': {
      borderSize: '1px',
      borderColor: 'primary.main',
      backgroundColor: 'primary.lightest',

      '& .MuiTypography-root': {
        color: 'primary.main',
      },
    },
  },
  chipSelectable: {
    cursor: 'pointer',
    '&.MuiChip-root': {
      backgroundColor: 'transparent',
      color: 'gray.80',
      fontWeight: 600,
      fontSize: 14,
      borderRadius: 1,
      border: '1px solid',
      borderColor: 'gray.12',
      lineHeight: 1.25,
    },
  },
  selected: {
    '&.MuiChip-root': {
      border: 'none',
      backgroundColor: 'primary.main',

      '& .MuiTypography-root': {
        color: 'gray.0',
      },
      '& .MuiChip-label': {
        color: 'gray.0',
      },
    },
  },
}
