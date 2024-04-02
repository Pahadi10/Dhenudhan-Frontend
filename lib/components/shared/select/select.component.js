import { useCallback, useState } from 'react'
import { MenuItem, OutlinedInput, Select as MuiSelect, SvgIcon, Typography } from '@mui/material'
import { PropTypes } from 'prop-types'
import { Box } from '@mui/system'
import { useController, useFormContext } from 'react-hook-form'

import { SELECT_VARIANTS, SELECT_POPOVER_PROPS } from './select.constants'
import { styles } from './select.styles'

const Select = ({
  variant,
  multiple,
  options,
  name,
  defaultValue,
  icon,
  placeholder,
  selectStyles,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState()
  const { control, register } = useFormContext()
  const {
    field: { value, onChange, ref },
  } = useController({
    register,
    control,
    defaultValue: defaultValue || (multiple ? [''] : ''),
    name,
  })
  const isFiltered = multiple ? !value.includes('') : value !== ''
  const handleChange = useCallback(
    event => {
      const {
        target: { value: eventValue },
      } = event

      const isEmpty =
        (Array.isArray(eventValue) && eventValue.includes('') && isFiltered) ||
        eventValue.length === 0
      const filledValue =
        typeof eventValue === 'string'
          ? eventValue.split(',')
          : eventValue.filter(item => item !== '')

      let onChangeValue
      if (isEmpty && multiple) {
        onChangeValue = ['']
      } else if (multiple) {
        onChangeValue = filledValue
      } else {
        onChangeValue = eventValue
      }

      onChange(onChangeValue)
    },
    [isFiltered, onChange, multiple],
  )
  const handleOpen = () => setIsOpen(!isOpen)

  const renderValue = () => {
    let optionsItems = placeholder

    if (isFiltered && multiple) {
      optionsItems = options
        .filter(option => value.includes(option.value))
        .map(itemsSelected => itemsSelected.label)
        .join(', ')
    } else if (isFiltered && !multiple) {
      optionsItems = options.find(option => option.value === value).label
    }

    return (
      <Box sx={styles.valueContainer}>
        {icon && <SvgIcon sx={styles.startAdornment} component={icon} />}
        <Typography sx={styles.value}>{optionsItems}</Typography>
      </Box>
    )
  }

  return (
    <MuiSelect
      sx={[
        styles.select,
        styles[variant],
        isFiltered && styles[`${variant}Filtered`],
        isOpen && styles[`${variant}SelectOpened`],
        ...(Array.isArray(selectStyles) ? selectStyles : [selectStyles]),
      ]}
      inputRef={ref}
      multiple={!!multiple}
      value={value}
      displayEmpty
      onOpen={handleOpen}
      onClose={handleOpen}
      onChange={handleChange}
      input={<OutlinedInput />}
      renderValue={renderValue}
      autoWidth
      MenuProps={SELECT_POPOVER_PROPS.BOTTOM_RIGHT}
      {...props}
    >
      {placeholder && (
        <MenuItem sx={styles.menuItem} value="">
          {placeholder}
        </MenuItem>
      )}
      {options.map(option => (
        <MenuItem sx={styles.menuItem} key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </MuiSelect>
  )
}

Select.propTypes = {
  variant: PropTypes.oneOf(Object.values(SELECT_VARIANTS)),
  multiple: PropTypes.bool,
  options: PropTypes.array,
  icon: PropTypes.func,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  selectStyles: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
}
Select.defaultProps = {
  variant: SELECT_VARIANTS.DEFAULT,
  multiple: false,
  options: [],
  icon: null,
  defaultValue: '',
}
export default Select
