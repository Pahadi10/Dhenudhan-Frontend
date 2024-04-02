import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  titleContainer: {
    display: 'flex',
    paddingY: 1.75,
    paddingX: 3,
    /* This is hardcoded as of now as it's not taking the value for colors from palette */
    backgroundColor: '#25272d',
  },
  content: { paddingY: 3, paddingX: 3 },
  title: {
    typography: 'header4',
    color: 'gray.64',
    lineHeight: 1.4,
  },
}
