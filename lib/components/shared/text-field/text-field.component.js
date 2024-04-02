import MaskedInput from 'react-input-mask'
import { Box, Icon, InputAdornment, Typography, Grid, SvgIcon } from '@mui/material'
import MuiTextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import React, { useCallback, useMemo, useState } from 'react'
import { useController } from 'react-hook-form'

import ErrorIcon from '_assets/svgs/exclamation-circle-small.svg'
import ExclamationOpposite from '_assets/svgs/exclamation-opposite-small.svg'
import EyeIcon from '_assets/svgs/eye-small.svg'
import EyeIconOff from '_assets/svgs/eye-slash-small.svg'
import ToolTip from '_components/shared/tooltip/tooltip.component'
import { useToggle } from '_components/shared/text-field/text-field.hooks'
import { TEXT_FIELD_TYPE } from '_components/shared/text-field/text-field.constants'
import { allowOnlyNumbers, getNestedFormError } from '_utils/form.util'

import { styles } from './text-field.styles'

const handleMouseDownPassword = event => {
  event.preventDefault()
}

const TextField = ({
  topLabel,
  label,
  disabled,
  name,
  InputProps,
  InputLabelProps,
  variant,
  placeholder,
  fullWidth,
  textFieldType,
  mask,
  tooltip,
  startAdornment,
  endAdornment,
  key,
  helperText,
  showAdornmentWithSuffix,
  rules,
  shouldUnregister,
  isNumeric,
  inputProps,
  startAdornmentStyle,
  uid,
  control,
  maxLength,
  sx,
  hideHelperText,
  autoComplete,
  // This should only be used when all alternatives have been tested
  // like using setError from react-hook-form on parent component
  forceError,
  ...props
}) => {
  const {
    field: { value, onChange, ref, onBlur },
    formState: { errors },
  } = useController({
    ...(control && { control }),
    defaultValue: '',
    shouldUnregister,
    rules,
    name,
  })

  const handleOnChange = event => {
    const {
      target: { value },
    } = event
    if (textFieldType === TEXT_FIELD_TYPE.PASSWORD) {
      // Removes whitespace character from passwords as discussed here
      return onChange(value.replace(/ /g, ''))
    }
    return onChange(value)
  }

  const [showPassword, togglePasswordVisibility] = useToggle()

  const hasError = !!errors[name] || getNestedFormError(errors, name) || forceError

  const [isFocused, setIsFocused] = useState(false)
  const shouldShrink = useMemo(() => isFocused || !!value.length, [isFocused, value])

  const helperTextMessage = useCallback(() => {
    if (hasError && errors?.[name]?.message) {
      return errors?.[name]?.message
    }

    const nestedFormError = getNestedFormError(errors, name)
    if (nestedFormError) return nestedFormError

    return helperText ?? null
  }, [errors, hasError, helperText, name])

  const renderHelperText = (
    <Grid
      container
      sx={[
        styles.helperText,
        disabled && styles.helperTextDisable,
        helperText && hideHelperText && styles.hide,
        hasError && styles.show,
      ]}
    >
      <Grid
        item
        xs={rules?.maxLength || maxLength ? 6 : 12}
        sm={rules?.maxLength || maxLength ? 10 : 12}
      >
        <Typography sx={styles.leftText}>{helperTextMessage()}</Typography>
      </Grid>
      {rules?.maxLength ||
        (maxLength && (
          <Grid item xs={6} sm={2} sx={styles.rightBox}>
            {(rules?.maxLength || maxLength) && (
              <Typography sx={styles.rightText}>
                {value.length + '/' + (rules?.maxLength?.value || rules?.maxLength || maxLength)}
              </Typography>
            )}
          </Grid>
        ))}
    </Grid>
  )

  const isStartAdornmentString = typeof startAdornment === 'string'
  const isEndAdornmentString = typeof endAdornment === 'string'

  const inputTextIconProps = useMemo(
    () => ({
      onFocus: () => setIsFocused(true),
      onBlur: () => {
        onBlur()
        setIsFocused(false)
      },
      ...(startAdornment && {
        startAdornment: (
          <InputAdornment
            position="start"
            sx={[
              styles.startAdornmentStyle,
              isStartAdornmentString && styles.stringStartAdornmentStyle,
            ]}
          >
            {isStartAdornmentString ? (
              <Typography typography="large" color="gray.56">
                {startAdornment}
              </Typography>
            ) : (
              <SvgIcon component={startAdornment} sx={startAdornmentStyle} />
            )}
          </InputAdornment>
        ),
      }),
      ...(endAdornment && {
        endAdornment: (
          <InputAdornment position="end">
            {showAdornmentWithSuffix && hasError && (
              <Typography sx={styles.errorEndAdornment}>{endAdornment}</Typography>
            )}
            {hasError ? (
              isEndAdornmentString ? (
                <Icon sx={[styles.errorIcon, disabled && styles.disabledIcon]}>
                  {<ErrorIcon />}
                </Icon>
              ) : (
                endAdornment
              )
            ) : isEndAdornmentString ? (
              <Typography sx={styles.textEndAdornment}>{endAdornment}</Typography>
            ) : (
              endAdornment
            )}
          </InputAdornment>
        ),
      }),
    }),
    [
      startAdornment,
      endAdornment,
      showAdornmentWithSuffix,
      hasError,
      disabled,
      startAdornmentStyle,
      isStartAdornmentString,
      onBlur,
      isEndAdornmentString,
    ],
  )

  const inputPasswordIconProps = useMemo(
    () => ({
      onFocus: () => setIsFocused(true),
      onBlur: () => {
        onBlur()
        setIsFocused(false)
      },
      ...(startAdornment && {
        startAdornment: (
          <InputAdornment position="start" sx={styles.startAdornmentStyle}>
            <SvgIcon component={startAdornment} />
          </InputAdornment>
        ),
      }),
      endAdornment: (
        <InputAdornment position="end">
          <Icon
            sx={styles.eyeIcon}
            onClick={togglePasswordVisibility}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <EyeIconOff /> : <EyeIcon />}
          </Icon>
        </InputAdornment>
      ),
    }),
    [startAdornment, togglePasswordVisibility, showPassword, onBlur],
  )

  const getLabelBoxStyle = useCallback(() => {
    if (disabled) {
      return styles.disabledLabel
    }

    return hasError ? styles.labelBoxError : styles.labelBox
  }, [disabled, hasError])

  const mapProps = {
    [TEXT_FIELD_TYPE.TEXT]: {
      itemProps: {
        variant,
        value,
        inputRef: ref,
        type: TEXT_FIELD_TYPE.TEXT,
        label,
        InputProps: {
          ...(mask && { inputComponent: MaskedInput }),
          ...inputTextIconProps,
          ...InputProps,
        },
      },
    },
    [TEXT_FIELD_TYPE.PASSWORD]: {
      itemProps: {
        variant,
        value,
        label,
        inputRef: ref,
        type: showPassword ? TEXT_FIELD_TYPE.TEXT : TEXT_FIELD_TYPE.PASSWORD,
        InputProps: {
          ...inputPasswordIconProps,
          ...InputProps,
        },
      },
    },
  }
  const textFieldComponent = ({ itemProps }) => {
    return (
      <>
        <MuiTextField
          name={name}
          id={uid ? uid : ''}
          sx={[styles.textFieldBg, sx]}
          fullWidth={fullWidth}
          disabled={disabled}
          onChange={handleOnChange}
          error={hasError}
          placeholder={placeholder}
          helperText={renderHelperText}
          autoComplete={autoComplete}
          FormHelperTextProps={{ component: 'span' }}
          inputProps={{
            mask,
            ...(isNumeric && { onKeyDown: allowOnlyNumbers }),
            ...inputProps,
          }}
          InputLabelProps={{
            shrink: shouldShrink,
            sx: {
              ...(disabled && styles.disabledLabel),
            },
            ...InputLabelProps,
          }}
          {...(!shouldShrink &&
            !InputLabelProps.shrink &&
            startAdornment && {
              sx: [styles.textRoot, sx],
            })}
          {...itemProps}
          {...props}
        />
      </>
    )
  }

  return (
    <>
      {topLabel && (
        <Box sx={getLabelBoxStyle()}>
          <Typography sx={styles.topLabel} component={'label'} htmlFor={props.id}>
            {topLabel}
          </Typography>

          {tooltip && (
            <ToolTip title={tooltip} children={<ExclamationOpposite style={styles.labelIcon} />} />
          )}
        </Box>
      )}
      {textFieldComponent(mapProps[textFieldType])}
    </>
  )
}

TextField.propTypes = {
  disabled: PropTypes.bool,
  InputProps: PropTypes.any,
  InputLabelProps: PropTypes.any,
  variant: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  topLabel: PropTypes.string,
  textFieldType: PropTypes.oneOf(Object.values(TEXT_FIELD_TYPE)),
  mask: PropTypes.string,
  tooltip: PropTypes.string,
  label: PropTypes.string,
  startAdornment: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  endAdornment: PropTypes.node,
  key: PropTypes.any,
  helperText: PropTypes.string,
  showAdornmentWithSuffix: PropTypes.bool,
  rules: PropTypes.object,
  shouldUnregister: PropTypes.bool,
  isNumeric: PropTypes.bool,
  inputProps: PropTypes.object,
  startAdornmentStyle: PropTypes.object,
  uid: PropTypes.string,
  control: PropTypes.object,
  maxLength: PropTypes.number,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.func]),
  hideHelperText: PropTypes.bool,
  forceError: PropTypes.bool,
  id: PropTypes.string,
  autoComplete: PropTypes.string,
}

TextField.defaultProps = {
  disabled: false,
  isNumeric: false,
  InputProps: {},
  InputLabelProps: {},
  variant: 'outlined',
  placeholder: '',
  fullWidth: true,
  shouldUnregister: false,
  textFieldType: TEXT_FIELD_TYPE.TEXT,
  readOnly: false,
  label: '',
  rules: {},
  name: '',
  inputProps: {},
  startAdornmentStyle: {},
  autoComplete: 'off',
}

export default React.memo(TextField)
