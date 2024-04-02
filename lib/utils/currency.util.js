import { round } from './math.util'

export const formatValueOnReceipt = (value, currencySymbol = '$') => {
  return `${value < 0 ? '-' : ''} ${currencySymbol} ${Math.abs(round(value, 2)).toFixed(2)}`
}
