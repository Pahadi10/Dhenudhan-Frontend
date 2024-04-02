import { isBefore } from 'date-fns'

import { RANGE_DAY } from './date-picker.constants'

export function calculateNewRange(newValue, range, rangeDay, setRangeDay) {
  if (rangeDay === RANGE_DAY.FIRST) {
    if (isBefore(newValue, range[0]) || !range[0]) {
      return [newValue, range[1]]
    }
    setRangeDay(RANGE_DAY.LAST)
    return [range[0], newValue]
  }
  setRangeDay(RANGE_DAY.FIRST)
  if (isBefore(newValue, range[0])) {
    return [newValue, range[1]]
  }
  return [newValue, null]
}
