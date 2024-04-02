import OtpInput from 'react-otp-input'
import * as PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { Box, Typography } from '@mui/material'
import { useCallback } from 'react'

import { styles } from './code-text-field.styles'
import { CODE_FIELD_DEFAULT_VALUE } from './code-text-field.constants'

const CodeTextField = ({ placeholder, separator, length, name, error, isInputNum, ...props }) => {
  const { control, register } = useFormContext()

  const {
    field: { value, onChange },
    formState: { errors },
  } = useController({ defaultValue: CODE_FIELD_DEFAULT_VALUE, name, control, register })

  const hasError = !!errors[name] || !!error

  const helperTextMessage = useCallback(() => {
    if (hasError && errors?.[name]?.message) {
      return errors?.[name]?.message
    }

    if (error) {
      return error.message
    }
    return null
  }, [errors, hasError, name, error])

  const renderHelperText = (
    <Typography typography="small" sx={styles.error}>
      {helperTextMessage()}
    </Typography>
  )

  return (
    <Box sx={[styles.root, hasError && styles.error]}>
      <OtpInput
        value={value}
        onChange={onChange}
        numInputs={length}
        separator={separator || ''}
        placeholder={placeholder || ''}
        isInputNum={isInputNum}
        {...props}
      />
      {hasError && renderHelperText}
    </Box>
  )
}

export default CodeTextField

CodeTextField.propTypes = {
  error: PropTypes.bool,
  name: PropTypes.string,
  length: PropTypes.number,
  separator: PropTypes.node,
  placeholder: PropTypes.string,
  isInputNum: PropTypes.bool,
}
