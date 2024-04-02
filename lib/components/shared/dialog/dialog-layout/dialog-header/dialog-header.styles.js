import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    paddingY: 2.5,
    paddingRight: 2,
    paddingLeft: 4,
    boxSizing: 'border-box',
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: 'gray.8',
    borderBottomStyle: 'solid',
  },
  containerWithIcon: {
    paddingLeft: 3,
  },
  navigation: { display: 'flex', alignItems: 'center' },
  titleIcon: { marginRight: 2, color: 'gray.56' },
  titleAvatar: {
    marginRight: '16px',
  },
  closeAndEdit: { display: 'flex', justifyContent: 'flex-end' },
  editIcon: { display: 'flex', marginY: 0, marginRight: 2, marginLeft: 1 },
  cancel: { marginRight: 1 },
  backButton: {
    fontWeight: 600,
    '&.MuiButton-root': {
      lineHeight: 1.75,
    },
  },
}
