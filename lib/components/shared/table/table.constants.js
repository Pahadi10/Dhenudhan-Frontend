import { v4 as uuidv4 } from 'uuid'

export const SEARCH_DEBOUNCE = 1000

export const SEARCH_UUID = uuidv4()

export const CLIENT_SIDE_SEARCH_DEBOUNCE_VALUE = 500
export const CLIENT_SIDE_SELECT_FIELD_NAME = 'filter'

export const FILTER_DEFAULT_VALUE = ''

export const FILTER_MODES = {
  CLIENT_SIDE: 'client-side',
  SERVER_SIDE: 'server-side',
}

export const COLUMN_TYPES = {
  action: 'action',
}

export const FILTER_SELECT_TYPES = {
  select: 'select',
  date: 'date',
}

export const FILTER_TYPES = {
  exact: 'exact',
  range: 'range',
  array: 'array',
}

export const FILTER_OPERATORS = {
  EQUAL: 'EQUAL',
  NOT_EQUAL: 'NOT_EQUAL',
  GREATER_THAN: 'GREATER_THAN',
  GREATER_THAN_EQUAL: 'GREATER_THAN_EQUAL',
  LESS_THAN: 'LESS_THAN',
  LESS_THAN_EQUAL: 'LESS_THAN_EQUAL',
  IN: 'IN',
  NOT_IN: 'NOT_IN',
}

export const SORTING_DIRECTIONS = {
  asc: 1,
  desc: -1,
  default: 0,
}
