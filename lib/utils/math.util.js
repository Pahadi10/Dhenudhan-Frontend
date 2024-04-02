import lodashRound from 'lodash.round'

export const round = (value, precision = 0) => {
  return lodashRound(value, precision)
}
