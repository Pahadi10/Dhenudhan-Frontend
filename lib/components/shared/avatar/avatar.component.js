import PropTypes from 'prop-types'
import React from 'react'

import GroupAvatar from './group-avatar.component'
import { AVATAR_SIZE, AVATAR_TYPES, AVATAR_VARIANT } from './avatar.constants'
import SingleAvatar from './single-avatar.component'

const Avatar = ({ item, onClick, avatarType, size, variant, avatar, animationStyles }) => {
  const Component = {
    [AVATAR_TYPES.SINGLE_AVATAR]: SingleAvatar,
    [AVATAR_TYPES.GROUP_AVATAR]: GroupAvatar,
  }[avatarType]

  return (
    <Component
      onClick={onClick}
      size={size}
      variant={variant}
      avatar={avatar}
      animationStyles={animationStyles}
      {...item}
    />
  )
}

Avatar.propTypes = {
  item: PropTypes.shape({
    total: PropTypes.number,
    avatarList: PropTypes.array,
    src: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
  avatarType: PropTypes.oneOf(Object.values(AVATAR_TYPES)),
  size: PropTypes.number,
  variant: PropTypes.string,
  avatar: PropTypes.object,
  animationStyles: PropTypes.object,
}

Avatar.defaultProps = {
  onClick: () => {},
  avatarType: AVATAR_TYPES.SINGLE_AVATAR,
  size: AVATAR_SIZE.SMALL,
  variant: AVATAR_VARIANT.CIRCULAR,
  avatar: {},
}

export default React.memo(Avatar)
