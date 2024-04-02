import { PickersDay, StaticDatePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Box, Paper } from '@mui/material'
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

import { RANGE_DAY, STATIC_WRAPPER_TYPE, VARIANTS } from './date-picker.constants'
import { handleStylesWithProps, styles } from './date-picker.styles'
import { calculateNewRange } from './date-picker.utils'

const Day = props => {
  const { day, selectedDay, outsideCurrentMonth, variant, range } = props
  const stylesWithProps = handleStylesWithProps({
    date: day,
    variant,
    range,
    selectedDay,
    isOutsideCurrentMonth: outsideCurrentMonth,
  })

  return (
    <Box sx={stylesWithProps.pickersDayContainer}>
      <PickersDay disableMargin sx={[styles.pickersDay, stylesWithProps.pickersDay]} {...props} />
    </Box>
  )
}

Day.propTypes = {
  day: PropTypes.object,
  selectedDay: PropTypes.object,
  outsideCurrentMonth: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  range: PropTypes.array,
}

const DatePicker = ({ variant, value, onChange, ...other }) => {
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [range, setRange] = useState([new Date(), new Date()])
  const [rangeDay, setRangeDay] = useState(RANGE_DAY.FIRST)
  const [monthDate, setMonthDate] = useState(new Date())

  const handleChange = newValue => {
    setSelectedDay(newValue)
    if (variant === VARIANTS.RANGE) {
      const newRange = calculateNewRange(newValue, range, rangeDay, setRangeDay)
      onChange(newRange)
      return setRange(newRange)
    }
    return onChange(newValue)
  }

  const stylesWithProps = handleStylesWithProps({ monthDate })

  return (
    <Paper sx={{ ...styles.root, ...stylesWithProps.root }} id="date-picker-container">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          id="date-picker"
          displayStaticWrapperAs={STATIC_WRAPPER_TYPE}
          value={selectedDay}
          onChange={handleChange}
          renderInput={params => <TextField {...params} />}
          closeOnSelect={false}
          {...other}
          showDaysOutsideCurrentMonth
          slots={{
            day: Day,
          }}
          slotProps={{
            day: {
              selectedDay,
              range,
              variant,
            },
          }}
          onMonthChange={value => setMonthDate(new Date(value))}
        />
      </LocalizationProvider>
    </Paper>
  )
}

DatePicker.propTypes = {
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  value: PropTypes.object,
  onChange: PropTypes.func,
}

DatePicker.defaultProps = {
  variant: VARIANTS.DAY,
  value: null,
  onChange: () => {},
}

export default DatePicker
