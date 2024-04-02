import MuiSkeleton from '@mui/material/Skeleton'
import PropTypes from 'prop-types'

import { SKELETON_ANIMATIONS, SKELETON_VARIANTS } from './skeleton.constants'
import { styles } from './skeleton.styles'

export const Skeleton = ({ variant, isRounded, sx, animation }) => {
  return (
    <MuiSkeleton
      variant={variant}
      animation={animation}
      sx={[
        styles.skeleton,
        variant === SKELETON_VARIANTS.rectangular && styles.defaultRectangular,
        isRounded && styles.rounded,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  )
}

export default Skeleton

Skeleton.propTypes = {
  variant: PropTypes.oneOf(Object.values(SKELETON_VARIANTS)),
  width: PropTypes.number,
  height: PropTypes.number,
  isRounded: PropTypes.bool,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  animation: PropTypes.oneOf(Object.values(SKELETON_ANIMATIONS)),
}

Skeleton.defaultProps = {
  animation: SKELETON_ANIMATIONS.wave,
}
