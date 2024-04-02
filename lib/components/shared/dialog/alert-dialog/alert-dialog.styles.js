import '_utils/type-defs.util'
import { SIZES, VARIANTS } from './alert-dialog.constants'

/** @type {Styles} */

export const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginBottom: 4,
    marginX: 2,
  },
  title: { marginTop: 3, typography: 'header2', color: 'gray.80' },
  description: {
    marginTop: 1,
    textAlign: 'center',
    color: 'gray.80',
    typography: 'medium',
    marginX: 3,
  },
  headerOverride: { borderBottom: 0 },
}

export const handleStylesWithProps = ({ variant, size }) => {
  const geticonColor = () => {
    switch (variant) {
      case VARIANTS.SUCCESS:
        return 'success.main'
      case VARIANTS.NEUTRAL:
        return 'warning.light'
      default:
        return 'error.main'
    }
  }

  const geticonWrapperBackgroundColor = () => {
    switch (variant) {
      case VARIANTS.SUCCESS:
        return 'success.lightest'
      case VARIANTS.NEUTRAL:
        return 'warning.lightest'
      default:
        return 'error.lightest'
    }
  }

  return {
    dialog: {
      width: {
        xs: SIZES.XXXS,
        sm: size,
      },
      height: 'auto',
      top: 'auto',
    },
    icon: {
      color: geticonColor(),
    },
    iconWrapper: {
      backgroundColor: geticonWrapperBackgroundColor(),
      width: 48,
      height: 48,
      borderRadius: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
}
