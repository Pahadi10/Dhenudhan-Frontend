import PropTypes from 'prop-types'
import {
  FormGroup,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  Typography,
  Stack,
  IconButton,
} from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useController } from 'react-hook-form'
import { useEffect } from 'react'

import Tooltip from '../tooltip/tooltip.component'

import { CHECKBOX_TYPES } from './checkbox.constants'
import { styles } from './checkbox.styles'

const Checkbox = ({
  label,
  type,
  name,
  indeterminate,
  description,
  disabled,
  warning,
  formGroupProps,
  sx,
  control,
  value: valueFromProps,
  ...props
}) => {
  const {
    field: { value, onChange, ref },
  } = useController({
    ...(control && { control }),
    defaultValue: false,
    name,
  })

  const isChecked = value
  const inputProps = {
    'aria-label': label,
    ...props.inputProps,
  }

  // Forces sync when used inside other field components, like dropdown
  // and value state can be controlled by the other component
  useEffect(() => {
    onChange(valueFromProps)
  }, [valueFromProps, onChange])

  const LabelContent = () => (
    <>
      <Stack direction="row" spacing={1} sx={styles.labelWrapper}>
        {label && (
          <Typography
            sx={[!!description && styles.multilineLabel, disabled && styles.multilineLabelDisabled]}
            variant="inherit"
            component="div"
          >
            {label}
          </Typography>
        )}
        {warning && (
          <Tooltip placement="bottom" title={warning}>
            <IconButton sx={styles.tooltip} disableRipple>
              <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </Stack>
      {description && (
        <Typography
          sx={[styles.multilineLabel, disabled && styles.multilineLabelDisabled]}
          variant="small"
          component="div"
        >
          {description}
        </Typography>
      )}
    </>
  )
  const CheckboxItem = itemProps => {
    return (
      <MuiCheckbox
        color="primary"
        name={name}
        inputProps={inputProps}
        inputRef={ref}
        checked={isChecked}
        value={isChecked}
        disabled={disabled}
        onChange={onChange}
        indeterminate={indeterminate}
        {...itemProps}
        sx={[styles.checkbox, ...(Array.isArray(itemProps?.sx) ? itemProps?.sx : [itemProps?.sx])]}
      />
    )
  }

  const mapComponent = {
    [CHECKBOX_TYPES.SIMPLE]: <CheckboxItem sx={styles.simple} {...props} />,
    [CHECKBOX_TYPES.LABEL]: (
      <FormControlLabel
        sx={[
          styles.label,
          (isChecked || indeterminate) && styles.labelSelected,
          disabled && styles.labelDisabled,
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        control={<CheckboxItem />}
        label={<LabelContent />}
      />
    ),
    [CHECKBOX_TYPES.BOX_LABEL]: (
      <FormControlLabel
        sx={[
          styles.label,
          styles.box,
          (isChecked || indeterminate) && { ...styles.boxSelected, ...styles.labelSelected },
          disabled && styles.boxDisabled,
        ]}
        control={<CheckboxItem />}
        label={<LabelContent />}
        labelPlacement="end"
      />
    ),
    [CHECKBOX_TYPES.BOX_TWO_LINES]: (
      <FormControlLabel
        sx={[
          styles.label,
          styles.box,
          (isChecked || indeterminate) && { ...styles.boxSelected, ...styles.labelSelected },
          disabled && styles.boxDisabled,
        ]}
        control={<CheckboxItem />}
        label={<LabelContent />}
        labelPlacement="start"
      />
    ),
  }

  return <FormGroup {...formGroupProps}>{mapComponent[type]}</FormGroup>
}

Checkbox.propTypes = {
  label: PropTypes.string,
  description: PropTypes.string,
  warning: PropTypes.string,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(CHECKBOX_TYPES)).isRequired,
  name: PropTypes.string.isRequired,
  formGroupProps: PropTypes.object,
  inputProps: PropTypes.object,
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  control: PropTypes.object,
  value: PropTypes.bool,
}

Checkbox.defaultProps = {
  label: '',
  description: '',
  warning: '',
  indeterminate: false,
  disabled: false,
  formGroupProps: {},
  inputProps: {},
}

export default Checkbox
