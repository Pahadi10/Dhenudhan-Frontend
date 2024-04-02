import '_utils/type-defs.util'
/** @type {Styles} */

export const handleStylesWithProps = ({ size }) => {
  const getAvatarSize = () => {
    return {
      width: size,
      height: size,
    }
  }

  return {
    avatarSize: getAvatarSize(),
    multiAvatar: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& .MuiAvatar-root:last-child': {
        marginLeft: -1,
      },
      '& .MuiAvatar-root': {
        zIndex: 1000,
        ...getAvatarSize(),
      },
    },
  }
}

export const styles = {
  avatar: {
    background: 'gray.8',
  },
}
