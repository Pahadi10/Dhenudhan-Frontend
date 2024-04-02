import AvatarGroup from '@mui/material/AvatarGroup'
import PropTypes from 'prop-types'
import React from 'react'

import SingleAvatar from './single-avatar.component'
import { handleStylesWithProps } from './avatar.styles'

const GroupAvatar = ({ avatarList, onClick, size, variant, max, avatar }) => {
  const stylesWithProps = handleStylesWithProps({ size })

  return (
    <AvatarGroup sx={[stylesWithProps.multiAvatar]} max={max} variant={variant}>
      {avatarList.map((item, index) => {
        return (
          <SingleAvatar
            index={index}
            key={item.key}
            onClick={() => onClick(item)}
            size={size}
            avatar={avatar}
            {...item}
          />
        )
      })}
    </AvatarGroup>
  )
}

GroupAvatar.propTypes = {
  avatarList: PropTypes.array,
  onClick: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string,
  max: PropTypes.number,
  avatar: PropTypes.object,
}

GroupAvatar.defaultProps = {
  avatarList: [],
}

export default React.memo(GroupAvatar)
