import '@lib/utils/type-defs.util'

/** @type { Styles } */

export const styles = {
  root: {
    backgroundColor: 'gray.0',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerWrapper: {
    paddingTop: 2.5,
    paddingBottom: 2.5,
    paddingRight: 2.5,
    paddingLeft: 5,
    border: '1px solid',
    borderBottomColor: 'gray.8',
  },
  contentWrapper: {
    paddingTop: 3,
    paddingBottom: 2,
    paddingRight: 2,
    paddingLeft: 5,
  },
  contentHeaderWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  contentHeaderDescription: {
    marginTop: 1,
    marginLeft: 4,
  },
  editNameWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  editNameIcon: {
    marginLeft: 1.5,
    color: 'gray.40',
    cursor: 'pointer',
  },
  uploadPic: {
    marginLeft: -1,
    marginTop: -1.25,
    '& svg': {
      marginTop: 0.75,
    },
  },
  editsectionWrapper: { width: 'fit-content', marginTop: 4 },
  editSection: {
    border: '1px solid',
    borderColor: 'gray.8',
    borderRadius: 0.5,
    padding: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editSectionDescription: { display: 'flex', alignItems: 'center' },
  email: { marginLeft: 2 },
  editAndLogoutContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
}
