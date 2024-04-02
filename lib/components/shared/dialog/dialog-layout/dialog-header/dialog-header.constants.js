import PropTypes from 'prop-types'

export const PROP_TYPES = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  onEdit: PropTypes.func,
  closeType: PropTypes.string,
  closeAction: PropTypes.func,
  titleType: PropTypes.string,
  titleIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
    PropTypes.object,
  ]),
  avatarSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  title: PropTypes.string,
  hasBackLabel: PropTypes.bool,
  headerStylesOverride: PropTypes.object,
}
