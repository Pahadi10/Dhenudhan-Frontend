import '@lib/utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  form: {
    height: '100%',
    width: '100%',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'gray.8',
    height: '90vh',
    alignItems: 'center',
    position: 'relative',
    marginTop: 8,
  },
  flexCenter: { display: 'flex', justifyContent: 'center' },
  logo: { height: 'auto', width: 100 },
  credentialsContainer: {
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 5,
    marginTop: 4,
    borderColor: 'primary.main',
  },
  title: { color: 'primary.main' },
  button: { width: '100%' },
  forgotPasswordLabel: { color: 'primary.main' },
  getHelpSigningLabel: { color: 'primary.main', cursor: 'pointer' },
  subtitle: { marginTop: 1, color: 'primary.main' },
  formRoot: { width: 438, backgroundColor: 'gray.8', zIndex: 1 },
  backgroundPatternImage: {
    position: 'absolute',
    height: 248,
    width: '100%',
    bottom: 0,
  },

  loaderContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  },
}
