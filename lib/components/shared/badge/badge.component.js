import { Badge as MuiBadge } from '@mui/material'
import PropTypes from 'prop-types'

import { styles } from './badge.styles'
import { ANCHOR_ORIGIN, BADGE_ANCHOR_ORIGIN } from './badge.constants'

const Badge = ({
  anchorOrigin,
  children,
  withBackground,
  isBadgeRounded,
  withBorder,
  badgeContent,
  sx,
  ...muiBadgeProps
}) => (
  <MuiBadge
    sx={[
      styles[`badgePosition-${anchorOrigin}`],
      isBadgeRounded && styles.badgeRounded,
      withBorder && styles.badgeBorder,
      withBackground && styles.badgeBackground,
      sx,
    ]}
    anchorOrigin={ANCHOR_ORIGIN[anchorOrigin]}
    badgeContent={badgeContent}
    {...muiBadgeProps}
  >
    {children}
  </MuiBadge>
)

Badge.propTypes = {
  anchorOrigin: PropTypes.oneOf(Object.values(BADGE_ANCHOR_ORIGIN)),
  badgeContent: PropTypes.oneOfType([PropTypes.node, PropTypes.number, PropTypes.string]),
  isBadgeRounded: PropTypes.bool,
  withBackground: PropTypes.bool,
  withBorder: PropTypes.bool,
  children: PropTypes.node.isRequired,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}

Badge.defaultProps = {
  anchorOrigin: BADGE_ANCHOR_ORIGIN.TOP_RIGHT,
  isBadgeRounded: false,
  withBackground: false,
  sx: {},
}

export default Badge
