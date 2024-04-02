import * as React from 'react'
import PropTypes from 'prop-types'
import MuiChip from '@mui/material/Chip'
import { Grid, Typography } from '@mui/material'

import { CHIP_SIZE, CHIP_VARIANT } from './chip.constants'
import { styles } from './chip.styles'

const Chip = ({
  variant,
  label,
  size,
  onClick,
  disabled,
  avatar,
  icon,
  onDelete,
  subText,
  selected,
  sx,
  ...props
}) => {
  const mapComponent = {
    [CHIP_VARIANT.CONTAINED]: {
      Component: MuiChip,
      itemProps: {
        size,
        label,
        sx: [styles.chip, size === CHIP_SIZE.SMALL && styles.smallText, sx],
      },
    },
    [CHIP_VARIANT.FILTER]: {
      Component: MuiChip,
      itemProps: {
        size,
        label,
        sx: [styles.chip, styles.filterChip, size === CHIP_SIZE.SMALL && styles.smallText, sx],
      },
    },
    [CHIP_VARIANT.FILTER_AVATAR]: {
      Component: MuiChip,
      itemProps: {
        size,
        label,
        avatar,
        sx: [styles.chip, styles.filterChip, sx],
      },
    },
    [CHIP_VARIANT.ICON]: {
      Component: MuiChip,
      itemProps: {
        label,
        size: CHIP_SIZE.SMALL,
        icon,
        sx: [styles.chip, styles.iconChip, selected && styles.selected, sx],
      },
    },
    [CHIP_VARIANT.LARGE]: {
      Component: MuiChip,
      itemProps: {
        variant: CHIP_VARIANT.OUTLINED,
        label: (
          <Grid container direction="column" sx={styles.labelSubLabel}>
            <Typography sx={styles.labelLine}>{label}</Typography>
            <Typography sx={styles.subLabelLine}>{subText} </Typography>
          </Grid>
        ),
        size: CHIP_SIZE.LARGE,
        icon,
        sx: [styles.chipLarge, styles.textChipLarge, selected ? styles.selected : '', sx],
      },
    },
    [CHIP_VARIANT.LARGE_ICON]: {
      Component: MuiChip,
      itemProps: {
        variant: CHIP_VARIANT.OUTLINED,
        label: (
          <Grid container direction="column" sx={styles.labelSubLabel}>
            <Typography sx={styles.iconLine}>{icon}</Typography>
            <Typography sx={styles.iconLabelLine}>{label} </Typography>
          </Grid>
        ),
        size: CHIP_SIZE.LARGE,
        sx: [styles.chipLarge, styles.textChipLarge, selected ? styles.selectedIcon : '', sx],
      },
    },
    [CHIP_VARIANT.SELECTABLE_CONTAINED]: {
      Component: MuiChip,
      itemProps: {
        size,
        label,
        sx: [
          styles.chipSelectable,
          selected ? styles.selected : '',
          size === CHIP_SIZE.SMALL && styles.smallText,
          sx,
        ],
      },
    },
  }
  const chipComponent = ({ Component, itemProps }) => (
    <Component
      disabled={disabled}
      onDelete={onDelete}
      onClick={onClick}
      {...itemProps}
      {...props}
      {...(onClick && {
        component: 'button',
      })}
    />
  )
  return chipComponent(mapComponent[variant])
}

Chip.propTypes = {
  size: PropTypes.oneOf(Object.values(CHIP_SIZE)),
  variant: PropTypes.oneOf(Object.values(CHIP_VARIANT)),
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
}

Chip.defaultProps = {
  size: CHIP_SIZE.MEDIUM,
  variant: CHIP_VARIANT.CONTAINED,
  disabled: false,
  icon: null,
  label: '',
  selected: false,
}

export default Chip
