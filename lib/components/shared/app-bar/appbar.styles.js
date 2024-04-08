import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  menuRoot: {
    // backgroundColor: 'primary.main',
    backgroundColor: 'white',
    color: 'primary.main'
  },

  logoImage: {
    width: '50%',
  },

  searchBar: {
      color: 'red',
      background: 'primary.main'
  },
  
  searchContainerReoot: {
    '& .MuiOutlinedInput-input': {
      // color: '#ffffff !important',
      color: 'primary.main',
      paddingY: 1,
    },
    '& .MuiButtonBase-root-JvZdr':{
      color: 'primary.main',
      background: 'transparent',
      border: 'none',
    },
  }
};
