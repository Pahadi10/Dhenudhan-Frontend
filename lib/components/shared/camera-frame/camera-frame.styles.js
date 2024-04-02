import '_utils/type-defs.util'

/** @type{Styles} */
export const styles = {
  cameraMedia: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },

  canvas: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    display: 'block',
  },
  canvasCropper: {
    display: 'none',
  },
  overlayCamera: {
    zIndex: 'mobileStepper',
    width: '100%',
    height: '100%',
    position: 'absolute',
    // overflow: 'hidden',
  },

  flash: {
    zIndex: 'mobileStepper',
    backgroundColor: 'gray.0',
    inset: 0,
    position: 'absolute',
  },

  videoInfo: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    zIndex: '1200',
    textAlign: 'center',
    inset: 0,
    marginTop: 'auto',
    color: 'gray.100',
    typography: {
      xs: 'header5',
      md: 'header4',
    },
    marginBottom: {
      xs: 1,
      md: 2,
    },
    marginX: {
      xs: 4,
      sm: 8,
      md: 2,
    },
  },
}
