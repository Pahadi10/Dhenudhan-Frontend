import PropType from 'prop-types'

export const TOAST_PROPS_OPTIONS = {
  SEVERITY: {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info',
  },
  HORIZONTAL: {
    RIGHT: 'right',
    CENTER: 'center',
    LEFT: 'left',
  },
}

export const TOAST_PROP_TYPES = {
  severity: PropType.oneOf(Object.values(TOAST_PROPS_OPTIONS.SEVERITY)).isRequired,
  horizontal: PropType.oneOf(Object.values(TOAST_PROPS_OPTIONS.HORIZONTAL)),
  title: PropType.string.isRequired,
  description: PropType.string,
  isOpen: PropType.bool.isRequired,
}

export const TOAST_DEFAULT_PROPS = {
  horizontal: 'center',
}

export const TOAST_AUTO_HIDE_DURATION = 5 * 1000
