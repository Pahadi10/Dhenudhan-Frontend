import '_utils/type-defs.util'

/** @type{Styles} */
export const styles = {
  dialogContent: {
    textAlign: 'center',
    paddingTop: 10.75,
    paddingBottom: 5,
  },
  titleWrapper: {
    marginBottom: 6,
  },
  titleWrapperInputError: {
    marginBottom: 2.5,
  },
  cameraIcon: {
    color: 'gray.16',
    fontSize: 40,
    marginBottom: 3,
  },
  dialogHeader: {
    borderBottom: 0,
  },
  inputFileWarning: {
    alignItems: 'center',
  },
}

/** @type{Styles} */
export const allowCameraStyles = {
  dialogContent: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 337,
    paddingY: 0,
  },
  cameraIcon: {
    color: 'gray.16',
    fontSize: 40,
    marginBottom: 2.5,
  },
  cameraBlockedIcon: {
    fontSize: 45,
    height: 'auto',
    color: 'gray.16',
  },
  badgeWrapper: {
    marginBottom: 3.5,
  },
  badge: {
    fontSize: 26,
  },
  subtitleAllowCam: {
    marginBottom: 3.6,
    whiteSpace: 'pre-wrap',
    paddingX: 2.5,
  },
  loading: {
    marginBottom: 1.5,
  },
}

/** @type{Styles} */
export const cameraFramingStyles = {
  dialogContent: {
    padding: 0,
  },
  container: {
    height: '100%',
    minHeight: 337,
    position: 'relative',
  },

  primaryAction: {
    typography: 'header1',
    position: 'relative',
    '&:hover, &:focus': {
      ':after': {
        inset: -5,
      },
    },
    ':after': {
      inset: 2,
      content: "''",
      position: 'absolute',
      borderRadius: '50%',
    },
    '&.MuiIconButton-root': {
      height: 56,
      width: 56,
    },
  },
  primaryActionCounter: {
    color: 'primary.main',
    backgroundColor: 'primary.lightest',
    '&.Mui-disabled': {
      color: 'primary.main',
      backgroundColor: 'primary.lightest',
    },
  },
  capturing: {
    '&.Mui-disabled': {
      color: 'gray.0',
      backgroundColor: 'primary.main',
    },
    ':after': {
      inset: -4,
      border: 2,
      borderColor: 'primary.main',
      borderStyle: 'dashed',
    },
  },
  primaryActionContainer: {
    margin: 'auto',
  },

  dialogHeader: {
    borderBottom: 0,
  },
  primaryActionIcon: {
    fontSize: 20,
    color: 'gray.0',
  },
  cameraIcon: {
    color: 'gray.16',
    fontSize: 40,
    marginBottom: 2.5,
  },
}

/** @type{Styles} */
export const cropStyles = {
  dialogContent: {
    padding: 0,
  },

  cropperContainer: {
    maxHeight: 337,
    height: '100%',
  },
  cropperWrapper: {
    '.cropper-container': {
      borderRadius: 0,
    },
  },
  cropper: {
    height: 337,
  },
}

/** @type{Styles} */
export const blockedCamStyles = {
  dialogLayout: {
    borderBottom: 0,
  },
  action: {
    marginTop: 4,
  },
}

/** @type{Styles} */
export const uploadSuccessStyles = {
  dialogContent: {
    paddingTop: 6.25,
    paddingBottom: 6,
  },

  dialogLayout: {
    borderBottom: 0,
  },
  textContainer: {
    textAlign: 'center',
  },

  badgeIcon: {
    color: 'success.main',
    fontSize: 34,
  },
  badge: {
    '.MuiBadge-badge': {
      padding: 0,
    },
  },
}
