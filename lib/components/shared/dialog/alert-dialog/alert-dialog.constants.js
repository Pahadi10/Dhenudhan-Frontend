import PropTypes from 'prop-types'

export const VARIANTS = {
  SUCCESS: 'success',
  NEUTRAL: 'neutral',
  CRITICAL: 'critical',
}

export const SIZES = {
  XXXS: 280,
  XXS: 360,
  XS: 480,
}

export const PROP_TYPES = {
  title: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.oneOf(Object.values(VARIANTS)).isRequired,
  icon: PropTypes.object.isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)).isRequired,
  children: PropTypes.node,
  iconContainerStyles: PropTypes.object,
  hideCancel: PropTypes.bool,
}

export const DEFAULT_PROPS = {
  size: SIZES.XXS,
  hideCancel: false,
}
