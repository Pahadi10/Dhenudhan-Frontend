import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  menuRoot: {
    backgroundColor: 'primary.main',
  },

  logoImage: {
    width: '50%',
  },

  searchBar: {
      color: 'white',
  },
  
  searchContainerReoot: {
    '& .MuiOutlinedInput-input': {
      color: '#ffffff !important',
      paddingY: 1,
    },
    '& .MuiButtonBase-root-JvZdr':{
      color: 'white',
      background: 'transparent',
      border: 'none',
    },
  }
};
