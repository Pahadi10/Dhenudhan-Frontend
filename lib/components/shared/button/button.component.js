import PropTypes from 'prop-types'
import MuiButton from '@mui/material/Button'
import { IconButton, SvgIcon, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { forwardRef } from 'react'

import { styles } from './button.styles'
import { BUTTON_SIZE, BUTTON_THEME, BUTTON_VARIANTS } from './button.constants'

const Button = forwardRef(
  (
    {
      variant,
      label,
      size,
      onClick,
      disabled,
      startIcon,
      endIcon,
      icon,
      theme,
      buttonIconTheme,
      stroke,
      textPadding,
      sx,
      type,
      href,
      iconProps,
      image,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslation('button')
    const BoxButton = () => (
      <Stack justifyContent="center" alignItems="center" spacing={0.5}>
        {icon && <SvgIcon component={icon} />}
        {image && <img src={image} alt={t('buttonImage')} style={styles.buttonImage} />}
        <Typography variant="button">{label}</Typography>
      </Stack>
    )

    const handleClick = e => {
      // Remove focus from the clickable button
      // element when ref is passed to the button component
      ref?.current?.blur()
      if (onClick) {
        onClick(e)
      }
    }

    const mapComponent = {
      [BUTTON_VARIANTS.CONTAINED]: {
        Component: MuiButton,
        itemProps: {
          variant,
          size,
          children: label,
          startIcon: startIcon && <SvgIcon component={startIcon} />,
          endIcon: endIcon && <SvgIcon component={endIcon} />,
          sx: [
            styles.button,
            styles.buttonSize,
            styles.primary,
            styles.contained,
            styles[theme],
            styles.removeDefault,
            ...(Array.isArray(sx) ? sx : [sx]),
          ],
        },
      },
      [BUTTON_VARIANTS.OUTLINED]: {
        Component: MuiButton,
        itemProps: {
          variant,
          size,
          children: label,
          color: BUTTON_THEME.PRIMARY,
          startIcon: startIcon && <SvgIcon component={startIcon} />,
          endIcon: endIcon && <SvgIcon component={endIcon} />,
          sx: [
            styles.button,
            styles.minTargetHeight,
            styles.buttonSize,
            styles.outlined,
            styles[theme],
            styles.removeDefault,
            ...(Array.isArray(sx) ? sx : [sx]),
          ],
        },
      },
      [BUTTON_VARIANTS.TEXT]: {
        Component: MuiButton,
        itemProps: {
          variant: BUTTON_VARIANTS.TEXT,
          size: size ? size : BUTTON_SIZE.MEDIUM,
          color: BUTTON_THEME.SECONDARY,
          children: label,
          startIcon: startIcon && <SvgIcon component={startIcon} />,
          endIcon: endIcon && <SvgIcon component={endIcon} />,
          disableRipple: true,
          sx: [
            styles.button,
            styles.minTargetHeight,
            styles.text,
            !!startIcon && styles.textIcon,
            textPadding && styles.buttonTextPadding,
            stroke && styles.textStroke,
            styles.removeDefault,
            ...(Array.isArray(sx) ? sx : [sx]),
          ],
        },
      },
      [BUTTON_VARIANTS.ICON]: {
        Component: IconButton,
        itemProps: {
          'aria-label': label,
          size,
          children: icon && <SvgIcon component={icon} {...iconProps} />,
          sx: [
            styles.iconButton,
            styles[`${buttonIconTheme}IconButton`],
            stroke && styles.iconButtonStroke,
            styles.removeDefault,
            ...(Array.isArray(sx) ? sx : [sx]),
          ],
        },
      },
      [BUTTON_VARIANTS.BOX]: {
        Component: MuiButton,
        itemProps: {
          size: BUTTON_SIZE.LARGE,
          children: <BoxButton />,
          sx: [styles.box, styles.removeDefault, ...(Array.isArray(sx) ? sx : [sx])],
        },
      },
      [BUTTON_VARIANTS.SECONDARY]: {
        Component: MuiButton,
        itemProps: {
          variant: BUTTON_VARIANTS.OUTLINED,
          size,
          children: label,
          color: BUTTON_THEME.PRIMARY,
          startIcon: startIcon && <SvgIcon component={startIcon} />,
          endIcon: endIcon && <SvgIcon component={endIcon} />,
          sx: [
            styles.button,
            styles.minTargetHeight,
            styles.buttonSize,
            styles.outlined,
            styles[theme],
            styles.removeDefault,
            styles.secondary,
            ...(Array.isArray(sx) ? sx : [sx]),
          ],
        },
      },
    }
    const buttonComponent = ({ Component, itemProps }) => (
      <Component
        href={href}
        disabled={disabled}
        onClick={href ? null : handleClick}
        type={type}
        ref={ref}
        {...(href && { target: '_blank', rel: 'noreferrer noopener' })}
        {...itemProps}
        {...props}
      />
    )
    return buttonComponent(mapComponent[variant])
  },
)

Button.propTypes = {
  variant: PropTypes.oneOf(Object.values(BUTTON_VARIANTS)),
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
  theme: PropTypes.oneOf(Object.values(BUTTON_THEME)),
  buttonIconTheme: PropTypes.oneOf(Object.values(BUTTON_THEME)),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  startIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  endIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  disabled: PropTypes.bool,
  stroke: PropTypes.bool,
  textPadding: PropTypes.bool,
  onClick: PropTypes.func,
  sx: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
  type: PropTypes.string,
  href: PropTypes.string,
  iconProps: PropTypes.shape({}),
  image: PropTypes.string,
}

Button.defaultProps = {
  variant: BUTTON_VARIANTS.CONTAINED,
  size: BUTTON_SIZE.MEDIUM,
  theme: BUTTON_THEME.PRIMARY,
  buttonIconTheme: BUTTON_THEME.GRAY,
  label: null,
  startIcon: null,
  endIcon: null,
  icon: null,
  disabled: false,
  stroke: false,
  textPadding: true,
  sx: {},
  type: 'submit',
  iconProps: {},
}
export default Button
