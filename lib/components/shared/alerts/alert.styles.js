import '_utils/type-defs.util'

export const applyStackStyle = index => ({
  style: { zIndex: index + 1 },
})

export const handleStylesWithProps = color => ({
  color: `${color}.main`,
  backgroundColor: `${color}.lightest`,
})

export const moreAlertsHandleStyles = (listLength, maxItems) =>
  listLength > maxItems && {
    '& .MuiAvatar-root:first-child': {
      fontSize: 12,
      zIndex: 100,
      backgroundColor: 'gray.8',
      color: 'gray.40',
    },
  }

/** @type {Styles} */
export const styles = {
  root: {
    '& .MuiAvatar-root:last-child': {
      marginLeft: 0,
    },
  },
  small: {
    '.MuiAvatar-root': {
      height: { xs: 20, lg: 24 },
      width: { xs: 20, lg: 24 },
      marginLeft: { xs: -0.8, lg: -1 },
      '& .MuiSvgIcon-root': {
        fontSize: 16,
      },
    },
  },
  large: {
    '.MuiAvatar-root': {
      height: 32,
      width: 32,
      '& svg': {
        height: 20,
        width: 20,
      },
    },
  },
  alertPopover: {
    width: 300,
    padding: 2,
  },

  alertPopoverTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  alertIcon: {
    height: 32,
    width: 32,
    '& svg': {
      height: 16,
      width: 16,
    },
  },
  alertTitle: {
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 1,
  },
  alertPopoverContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeading: {
    marginBottom: 1,
    color: 'gray.64',
  },
  sectionContent: {
    marginBottom: 0.5,
    color: 'gray.80',
  },
  sectionDate: {
    color: 'gray.64',
  },
  sectionMore: {
    color: 'primary.main',
    marginTop: 2,
    marginBottom: 2,
    '.MuiTypography-header4': {
      display: 'flex',
      alignItems: 'center',
    },
    '& svg': {
      fontSize: 20,
      marginRight: 1.25,
    },
  },
  bigDivider: {
    marginX: -2,
    borderColor: 'gray.3',
    borderWidth: 2,
    background: 'gray.3',
  },
  avatar: {
    transition: 'all .1s',
  },
  clickable: {
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-8px)',
    },
  },
  openAlert: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  alignButton: {
    display: 'flex',
    justifyContent: 'end',
  },
  modalContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  viewAllNotes: {
    color: 'secondary.main',
  },
  alertDescription: {
    marginTop: 1,
  },
}
