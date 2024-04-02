import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  root: {
    backgroundColor: 'gray.3',
    paddingY: 0.5,
    paddingX: 3,
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing: 'border-box',
    minHeight: 48,
  },

  labelContent: {
    paddingY: 1.25,
    display: 'flex',
    flexDirection: 'column',
  },

  label: {
    color: 'gray.64',
    display: 'flex',
  },

  description: {
    color: 'gray.64',
    marginTop: 1,
    display: 'flex',
  },

  labelAction: {
    '& .MuiButton-root': {
      backgroundColor: 'transparent',
      paddingLeft: 1.5,
      paddingRight: 2,
      whiteSpace: 'nowrap',
      color: 'gray.80',
      fontWeight: 600,
      '& .MuiButton-startIcon': {
        marginRight: 0.5,
        '& .MuiSvgIcon-root': {
          fontSize: 24,
          color: 'gray.56',
          fontWeight: 400,
        },
      },
    },
  },
}
