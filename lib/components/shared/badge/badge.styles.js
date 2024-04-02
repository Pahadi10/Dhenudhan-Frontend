import '_utils/type-defs.util'
/** @type {Styles} */

export const styles = {
  'badgePosition-bottom-center': {
    '.MuiBadge-badge': {
      margin: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      left: 0,
      right: 0,
      bottom: 5,
      transform: 'translateY(50%)',
    },
  },
  'badgePosition-top-center': {
    '.MuiBadge-badge': {
      margin: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      left: 0,
      right: 0,
      top: 5,
      transform: 'translateY(-50%)',
    },
  },
  'badgePosition-left-center': {
    '.MuiBadge-badge': {
      margin: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      left: 5,
      top: 0,
      bottom: 0,
      transform: 'translateX(-50%)',
    },
  },
  'badgePosition-right-center': {
    '.MuiBadge-badge': {
      margin: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      right: 5,
      top: 0,
      bottom: 0,
      transform: 'translateX(50%)',
    },
  },

  'badgePosition-bottom-right': {
    '.MuiBadge-badge': {
      right: 5,
    },
  },

  badgeRounded: {
    '.MuiBadge-badge': {
      borderRadius: '50%',
    },
  },
  badgeBackground: {
    '.MuiBadge-badge': {
      backgroundColor: 'gray.0',
      color: 'gray.100',
      padding: 0.9,
    },
  },
  badgeBorder: {
    '.MuiBadge-badge': {
      border: 2,
      borderColor: 'gray.8',
      padding: 0,
    },
  },
}
