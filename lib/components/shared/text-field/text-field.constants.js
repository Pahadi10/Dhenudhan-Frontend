import PropTypes from 'prop-types'

export const ITEM_PROP_TYPES = PropTypes.shape({
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  required: PropTypes.bool,
  helperText: PropTypes.object,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  showAdornmentWithSuffix: PropTypes.bool,
  key: PropTypes.string,
  errorMessage: PropTypes.string,
})

export const TEXT_FIELD_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
}
