import { Box, MenuItem, Select as MuiSelect, Popover, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { format } from 'date-fns'

import ClearSearchIcon from '_assets/svgs/times-circle.svg'

import Button from '../button/button.component'
import { BUTTON_VARIANTS } from '../button/button.constants'
import DatePicker from '../date-picker/date-picker.component'
import { VARIANTS } from '../date-picker/date-picker.constants'

import { FILTER_DEFAULT_VALUE, FILTER_SELECT_TYPES } from './table.constants'
import { handleStylesWithProps, styles } from './table.styles'

const TableFilterSelect = ({
  name,
  options,
  placeholder,
  type = FILTER_SELECT_TYPES.select,
  multiple,
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isSelectOpen, setIsSelectOpen] = useState(false)
  const { control, register } = useFormContext()
  const {
    field: { value, onChange },
  } = useController({
    register,
    control,
    name,
  })

  const renderWithMultiple = useCallback(
    options => {
      return multiple ? placeholder : options.find(option => option.value === value)?.label || value
    },
    [multiple, placeholder, value],
  )
  const renderValue = useCallback(
    value => {
      if (value || value === false) {
        return (
          <Box sx={styles.flexSpaceBetween}>
            <Box sx={styles.filterSelect.renderValue}>
              <Typography typography="header5" sx={styles.filterSelect.selectedPlaceholder}>
                {placeholder}
              </Typography>

              <Typography typography="header4" sx={styles.filterSelect.value}>
                {type === FILTER_SELECT_TYPES.date
                  ? `${value[0] ? format(value[0], 'MMM dd, yyyy') : ''} -
                      ${value[1] ? format(value[1], 'MMM dd, yyyy') : ''}
                    `
                  : renderWithMultiple(options)}
              </Typography>
            </Box>
          </Box>
        )
      }
      return (
        <Typography typography="header4" sx={styles.filterSelect.placeholder}>
          {placeholder}
        </Typography>
      )
    },
    [placeholder, options, type, renderWithMultiple],
  )

  const handleOpen = event => {
    if (type === FILTER_SELECT_TYPES.select) {
      setIsSelectOpen(true)
    } else {
      setAnchorEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    if (type === FILTER_SELECT_TYPES.select) {
      setIsSelectOpen(false)
    } else {
      setAnchorEl(null)
    }
  }

  const handleChange = e => {
    if (type === FILTER_SELECT_TYPES.select) {
      const {
        target: { value: eventValue },
      } = e
      const isEmpty =
        (Array.isArray(eventValue) && eventValue.includes('')) || eventValue.length === 0
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
    }
  }

  const isOpen = Boolean(anchorEl)
  const id = isOpen ? 'simple-popover' : undefined
  const stylesWithProps = handleStylesWithProps({ filterSelectType: type })

  return (
    <Box sx={[styles.filterSelect.root, multiple && styles.filterSelect.multipleRoot]}>
      <MuiSelect
        onChange={handleChange}
        value={multiple ? value || [] : value}
        sx={{
          ...styles.filterSelect.select,
          ...stylesWithProps.filterSelect.select,
        }}
        displayEmpty
        multiple={!!multiple}
        renderValue={renderValue}
        open={isSelectOpen}
        onOpen={handleOpen}
        aria-describedby={id}
        onClose={() => setIsSelectOpen(false)}
      >
        <MenuItem value={''}>{placeholder}</MenuItem>
        {options.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {(!multiple && value) || value === false ? (
        <Box sx={styles.filterSelect.clearButtonContainer}>
          <Button
            variant={BUTTON_VARIANTS.ICON}
            icon={ClearSearchIcon}
            sx={styles.filterSelect.clearButton}
            onClick={() => onChange(FILTER_DEFAULT_VALUE)}
            type="button"
          />
        </Box>
      ) : null}
      <Popover
        open={isOpen}
        id={id}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <DatePicker variant={VARIANTS.RANGE} value={value} onChange={onChange} />
      </Popover>
    </Box>
  )
}

TableFilterSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ),
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(Object.values(FILTER_SELECT_TYPES)),
  multiple: PropTypes.bool,
}

export default TableFilterSelect
