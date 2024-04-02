import MuiAvatar from '@mui/material/Avatar'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { animated } from 'react-spring'

import { AVATAR_SIZE, AVATAR_VARIANT } from './avatar.constants'
import { styles, handleStylesWithProps } from './avatar.styles'

const AnimatedAvatar = animated(MuiAvatar)

const Avatar = ({ alt, size, variant, children, src, avatar, onClick, index, animationStyles }) => {
  const style = useMemo(
    () => ({
      style: index + 1 ? { zIndex: index + 1, ...animationStyles } : { ...animationStyles },
    }),
    [index, animationStyles],
  )

  const stylesWithProps = handleStylesWithProps({ size })
  return (
    <AnimatedAvatar
      sx={[stylesWithProps.avatarSize, avatar ? avatar : styles.avatar]}
      alt={alt}
      variant={variant}
      src={src}
      onClick={onClick}
      {...style}
    >
      {children}
    </AnimatedAvatar>
  )
}

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node,
  avatar: PropTypes.any,
  onClick: PropTypes.func,
  index: PropTypes.number,
  animationStyles: PropTypes.object,
}

Avatar.defaultProps = {
  variant: AVATAR_VARIANT.CIRCULAR,
  size: AVATAR_SIZE.LARGE,
}

export default React.memo(Avatar)
