import '_utils/type-defs.util'

/** @type {Styles} */
export const styles = {
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      borderRadius: '100px 100px 0 0',
      width: '100%',
      backgroundColor: 'primary.main',
    },
  },
  tabList: { borderBottom: 1, borderColor: 'gray.8' },
  tab: {
    color: 'gray.64',
    fontSize: 14,
    marginLeft: 1,
    marginRight: 1,
  },
  tabPanel: {
    color: 'gray.64',
    padding: 0,
  },
}
