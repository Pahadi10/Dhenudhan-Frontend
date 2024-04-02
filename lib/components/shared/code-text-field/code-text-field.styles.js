import '_utils/type-defs.util'

/** @type { Styles } */

export const styles = {
  root: theme => ({
    marginBottom: 3,
    '& > p': {
      marginBottom: 1.5,
    },
    '& input': {
      background: 'transparent',
      color: 'gray.80',
      height: 50,
      width: '45px !important',
      border: '1px solid',
      borderColor: 'gray.16',
      borderRadius: '4px',
      fontSize: 24,
      fontWeight: '600',
    },
    '& span': {
      color: 'gray.16',
      fontSize: 24,
      fontWeight: 900,
      marginLeft: 0.5,
      marginRight: 0.5,
    },
    '& > div': {
      justifyContent: 'space-between',
    },
    '& input: focus-within': {
      border: '2px solid',
      borderColor: 'gray.56',
      outline: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      '& input': {
        height: 40,
        width: '35px !important',
        fontSize: 20,
      },
    },
  }),
  error: {
    marginTop: 0.5,
    color: 'error.main',
    fontWeight: 500,
    '& input': {
      border: '1px solid',
      borderColor: 'error.main',
    },
  },
}
