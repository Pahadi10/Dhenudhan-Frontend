import {
  endOfWeek,
  getWeeksInMonth,
  isSameDay,
  isSaturday,
  isSunday,
  isValid,
  isWithinInterval,
  startOfWeek,
} from 'date-fns'

import { typography } from '_styles/material-ui/typography'

import '_utils/type-defs.util'
import { VARIANTS } from './date-picker.constants'

/** @type {Styles} */
export const styles = {
  root: {
    backgroundColor: 'gray.0',
    width: 320,
    '.MuiTypography-root': {
      margin: 0,
    },
    '.PrivatePickersFadeTransitionGroup-root': {
      fontSize: 14,
      overflow: 'hidden',
      fontFamily: typography.fontFamily,
      fontWeight: 600,
      color: 'gray.80',
    },
    '.MuiPickersDay-hiddenDaySpacingFiller': {
      width: 40,
      height: 40,
    },
    '.MuiTypography-caption': {
      width: 40,
      fontSize: 14,
    },
    '.MuiCalendarPicker-root': {
      paddingTop: 0.75,
    },
    '.MuiDateCalendar-root': {
      backgroundColor: 'gray.0',
    },
    '.MuiPickersCalendarHeader-label': {
      color: 'gray.80',
    },
    '.MuiPickersCalendarHeader-switchViewButton': {
      color: 'gray.80',
    },
    '.MuiPickersArrowSwitcher-button': {
      color: 'gray.56',
    },
    '.MuiDayCalendar-weekDayLabel': {
      color: 'gray.64',
    },
    '.MuiPickersYear-yearButton': {
      color: 'gray.100',
    },
  },
  pickersDay: {
    fontSize: 14,
    color: 'gray.80',
    ':hover': {
      backgroundColor: 'gray.3',
    },
    '&.MuiPickersDay-today': {
      borderColor: 'gray.16',
      fontWeight: 600,
    },
    '&.Mui-selected': {
      fontWeight: 400,
    },
    width: 40,
    height: 40,
  },
}

export const handleStylesWithProps = ({
  date,
  range,
  variant,
  selectedDay,
  isOutsideCurrentMonth,
  monthDate,
}) => {
  switch (variant) {
    case VARIANTS.WEEK:
      const start = startOfWeek(selectedDay)
      const end = endOfWeek(selectedDay)

      let dayIsBetween = isValid(selectedDay) && isWithinInterval(date, { start, end })
      let isFirstDay = isSameDay(date, start)
      let isLastDay = isSameDay(date, end)

      return {
        pickersDay: {
          ...(isOutsideCurrentMonth && {
            color: 'gray.56',
          }),
          ...(dayIsBetween && {
            borderRadius: 0,
            backgroundColor: 'primary.main',
            color: 'gray.0',
            '&:hover, &:focus': {
              backgroundColor: 'primary.dark',
            },
          }),
          ...(isFirstDay && {
            borderTopLeftRadius: '50%',
            borderBottomLeftRadius: '50%',
          }),
          ...(isLastDay && {
            borderTopRightRadius: '50%',
            borderBottomRightRadius: '50%',
          }),
        },
      }

    case VARIANTS.RANGE:
      isFirstDay = isSameDay(date, range[0])
      isLastDay = isSameDay(date, range[1])
      const isFirstAndLastDaySelected = isValid(range[0]) && isValid(range[1])
      dayIsBetween =
        isFirstAndLastDaySelected && isWithinInterval(date, { start: range[0], end: range[1] })
      const isDaySaturday = isSaturday(date)
      const isDaySunday = isSunday(date)

      return {
        pickersDayContainer: {
          ...(isFirstDay &&
            isFirstAndLastDaySelected && {
              backgroundColor: 'primary.lightest',
              borderTopLeftRadius: '50%',
              borderBottomLeftRadius: '50%',
            }),
          ...(isLastDay &&
            isFirstAndLastDaySelected && {
              backgroundColor: 'primary.lightest',
              borderTopRightRadius: '50%',
              borderBottomRightRadius: '50%',
            }),
        },
        pickersDay: {
          ...(isOutsideCurrentMonth && {
            color: 'gray.56',
          }),
          ...(dayIsBetween && {
            backgroundColor: 'primary.lightest',
            borderRadius: 0,
            color: 'primary.main',
            ...(isDaySaturday && {
              borderTopRightRadius: '50%',
              borderBottomRightRadius: '50%',
            }),
            ...(isDaySunday && {
              borderTopLeftRadius: '50%',
              borderBottomLeftRadius: '50%',
            }),
          }),
          ...(isFirstDay && {
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            color: 'gray.0',
            ':hover': {
              backgroundColor: 'primary.dark',
            },
          }),
          ...(isLastDay && {
            backgroundColor: 'primary.main',
            borderRadius: '50%',
            color: 'gray.0',
            ':hover': {
              backgroundColor: 'primary.dark',
            },
          }),
        },
      }
    default:
      const hasExtraWeekRow = getWeeksInMonth(monthDate) === 6

      return {
        pickersDay: {
          ...(isOutsideCurrentMonth && {
            color: 'gray.56',
          }),
        },
        root: {
          '.MuiPickersSlideTransition-root': {
            minHeight: hasExtraWeekRow ? 270 : 230,
          },
          height: hasExtraWeekRow ? 370 : 'initial',
        },
      }
  }
}
