import { Box, Stack, SvgIcon, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { useCallback, useEffect, useState } from 'react'

import exclamation from '_assets/svgs/exclamation-circle-small.svg'
import Button from '_components/shared/button/button.component'
import { MEGABYTES_IN_BYTES } from '_constants/rules'

import { MAX_IMAGE_SIZE_MB } from '../modal-upload-photo/modal-upload-photo.constants'
import { useToast } from '../toast/toast.hooks'
import { TOAST_PROPS_OPTIONS } from '../toast/toast.constants'

import { styles } from './button-select-file.styles'
import { BUTTON_SELECT_FILE_ID } from './button-select-file.constants'

const ButtonSelectFile = ({
  name,
  rules,
  hiddenButton,
  buttonProps,
  labelProps,
  directOpen,
  ...inputProps
}) => {
  const { control, register } = useFormContext()
  const [size, setSize] = useState(null)
  const { openToast } = useToast()
  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    register,
    control,
    rules,
    name,
  })
  const handleChange = event => {
    if (event.target.files.length) {
      setSize(event.target.files[0].size / MEGABYTES_IN_BYTES)
      onChange(event.target.files)
    }
  }

  useEffect(() => {
    if (error && directOpen && size > MAX_IMAGE_SIZE_MB) {
      openToast({
        title: error.message,
        severity: TOAST_PROPS_OPTIONS.SEVERITY.ERROR,
        horizontal: TOAST_PROPS_OPTIONS.HORIZONTAL.CENTER,
      })
      setSize(null)
    }
  }, [error, openToast, directOpen, size])

  const eventHandler = useCallback(event => {
    event.target.value = null
  }, [])

  return (
    <>
      <Box
        sx={styles.buttonInputWrapper}
        component="label"
        htmlFor={BUTTON_SELECT_FILE_ID}
        {...labelProps}
      >
        <input
          type="file"
          ref={ref}
          onChange={handleChange}
          onClick={eventHandler}
          id={BUTTON_SELECT_FILE_ID}
          {...inputProps}
        />
        <Button component="span" sx={hiddenButton && styles.buttonInputHidden} {...buttonProps} />
      </Box>
      {error && !directOpen && (
        <Stack sx={styles.buttonInputError} direction="row" spacing={1}>
          <SvgIcon sx={styles.buttonInputErrorIcon} component={exclamation} />
          <Typography color="error.main" typography="header4">
            {error.message}
          </Typography>
        </Stack>
      )}
    </>
  )
}

ButtonSelectFile.propTypes = {
  buttonProps: PropTypes.object,
  labelProps: PropTypes.object,
  rules: PropTypes.object,
  hiddenButton: PropTypes.bool,
  name: PropTypes.string.isRequired,
  directOpen: PropTypes.bool,
}
ButtonSelectFile.defaultProps = {
  buttonProps: {},
  labelProps: {},
  rules: {},
  hiddenButton: false,
}

export default ButtonSelectFile
