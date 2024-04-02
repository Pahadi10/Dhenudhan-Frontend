import '_utils/type-defs.util'

/** @type {Styles} */

export const styles = {
  container: {
    height: 80,
    justifyContent: 'space-between',
    paddingY: 0,
    paddingX: 2,
    backgroundColor: 'gray.0',
    borderTopColor: 'gray.8',
    borderTopStyle: 'solid',
    borderTopWidth: 1,
  },
  externalURLAndTertiaryAction: { display: 'flex', alignItems: 'center' },
  externalURL: { paddingRight: 2.75, paddingLeft: 0.75 },
  divider: { height: 80, width: 1.05, backgroundColor: 'gray.8' },
  tertiaryAction: { marginLeft: 2 },
  customFooterContent: { marginLeft: 1 },
  actions: { display: 'flex', justifyContent: 'flex-end', flex: 1 },
  primaryActionContainer: {
    marginLeft: 0,
    flexGrow: {
      xs: 1,
      sm: 0,
      md: 0,
    },
  },
  secondaryActionContainer: {
    marginRight: 2,
    flexGrow: {
      xs: 1,
      md: 0,
    },
  },
  primaryAction: {
    width: {
      xs: '100%',
      md: 'auto',
    },
  },
  secondaryAction: {
    backgroundColor: 'transparent',
    width: {
      xs: '100%',
      md: 'auto',
    },
  },
}
