import { t } from 'i18next'

export const FORM_MODES = {
  onChange: 'onChange',
  onSubmit: 'onSubmit',
  onBlur: 'onBlur',
}

export const FORM_DATA_MODES = {
  add: {
    key: 'add',
    label: t('fields:modes.add'),
  },
  edit: {
    key: 'edit',
    label: t('fields:modes.edit'),
  },
}

export const AUTOCOMPLETE_VALUES = {
  name: 'name',
  email: 'email',
  username: 'username',
  currentPassword: 'current-password',
  newPassword: 'new-password',
  oneTimeCode: 'one-time-code',
  organizationTitle: 'organization-title',
  organization: 'organization',
  streetAddress: 'street-address',
  addressLevel4: 'address-level4',
  addressLevel3: 'address-level3',
  addressLevel2: 'address-level2',
  addressLevel1: 'address-level1',
  country: 'country',
  countryName: 'country-name',
  postalCode: 'postal-code',
  ccName: 'cc-name',
  ccGivenName: 'cc-given-name',
  ccAdditionalName: 'cc-additional-name',
  ccFamilyName: 'cc-family-name',
  ccNumber: 'cc-number',
  ccExp: 'cc-exp',
  ccExpMonth: 'cc-exp-month',
  ccExpYear: 'cc-exp-year',
  ccCsc: 'cc-csc',
  ccType: 'cc-type',
  transactionCurrency: 'transaction-currency',
  transactionAmount: 'transaction-amount',
  language: 'language',
  bday: 'bday',
  bdayDay: 'bday-day',
  bdayMonth: 'bday-month',
  bdayYear: 'bday-year',
}
