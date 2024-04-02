import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  mainBox: {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    bottom: 20,
    width: '100%',
  },
  root: {
    borderLeft: {
      xs: 0,
      sm: 4,
    },
    color: 'primary.main',

    boxShadow: '0px 6px 12px 4px rgba(30, 32, 38, 0.08)',
    minWidth: 252,
  },

  cardHeader: {
    borderBottom: {
      xs: 1,
      sm: 0,
    },
    color: 'gray.8',

    paddingLeft: {
      xs: 2.5,
      sm: 3.5,
    },
    paddingTop: {
      xs: 1.5,
      sm: 2,
    },
    '& .MuiCardHeader-avatar': {
      color: 'primary.main',
      marginRight: 1.5,
      width: 24,
      height: 24,
    },
  },

  cardContent: {
    paddingX: {
      xs: 1.3,
      sm: 2,
    },
    paddingY: {
      xs: 1.5,
      sm: 0,
    },
    '&.MuiCardContent-root:last-child': {
      paddingBottom: 2,
    },
  },
  label: {
    fontSize: 16,
    color: 'gray.80',
    fontWeight: 600,
    display: 'inline-block',
  },
  description: {
    fontSize: 16,
    color: 'gray.80',
    fontWeight: 400,
    marginLeft: 0.5,
    display: 'inline-block',
  },

  actionList: {
    margin: 0,
    paddingLeft: {
      xs: 0,
      sm: 4,
    },
    display: 'flex',
    flexFlow: {
      xs: 'column',
      sm: 'row',
    },
  },
  buttons: {
    width: 'fit-content',
  },
}
