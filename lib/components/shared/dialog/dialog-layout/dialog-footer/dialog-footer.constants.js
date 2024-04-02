import PropTypes from 'prop-types'

export const PROP_TYPES = {
  externalURL: PropTypes.string,
  primaryAction: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
    props: PropTypes.shape({}),
    containerProps: PropTypes.shape({}),
  }),
  secondaryAction: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
    props: PropTypes.shape({}),
  }),
  tertiaryAction: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
    icon: PropTypes.object,
  }),
}
