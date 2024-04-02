import '_utils/type-defs.util'
import { SIZES } from './dialog-layout.constants'

/** @type {Styles} */

export const styles = {
  paper: {
    position: 'fixed',
    margin: 0,
    backgroundColor: 'gray.0',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
    maxHeight: '100%',
  },
}

export const handleStylesWithProps = ({ size, hasMobileBottomSheet }) => {
  const getPaperXSHeight = () => {
    switch (size) {
      case SIZES.XXXS:
        return 'auto'
      case SIZES.XXS:
      case SIZES.XS:
        if (hasMobileBottomSheet) {
          return 'auto'
        }
        return '100%'
      case SIZES.SM:
      case SIZES.MD:
        return 1
      default:
        return 'auto'
    }
  }

  return {
    paper: {
      right: size >= SIZES.SM ? 0 : 'auto',
      height: {
        xs: getPaperXSHeight(),
        sm: size >= SIZES.SM ? '100%' : 'auto',
      },
      width: {
        xs: size === SIZES.XXXS && !hasMobileBottomSheet ? size : '100%',
        sm: size >= SIZES.SM ? '100%' : size,
        md: size,
      },

      maxHeight: {
        xs: size < SIZES.SM && hasMobileBottomSheet ? 'calc(100% - 40px)' : '100%',
        sm: '100%',
      },
      '@media screen and (max-height: 412px)': {
        maxHeight: {
          xs: '100%',
        },
      },
      maxWidth: '100%',
      bottom: {
        xs: size >= SIZES.SM || hasMobileBottomSheet ? 0 : 'initial',
        sm: 'auto',
      },
    },
  }
}
