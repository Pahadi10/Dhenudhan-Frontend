import joi from 'joi'
import { isValidPhoneNumber } from 'react-phone-number-input'

import i18 from '_i18n/index'

export const PATTERNS = {
  EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  CHARGE_RATE: /^\d+(\.\d{1,})?$/,
  SPECIAL_CHARACTERS: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/,
  UPPERCASE: /[A-Z]/,
}

export const ACCESS_NAME_MAX_LENGTH = 100
export const API_USERNAME_MAX_LENGTH = 100
export const API_ACCESS_PASSWORD_MIN_LENGTH = 6
export const PASSWORD_MIN_LENGTH = 8
export const PASSWORD_MAX_LENGTH = 50

export const PASSWORD_WITH_HELPER_OBJECT = {
  minLength: {
    key: 'string.min',
    message: i18.t('errors:forms.minLengthHelper', { count: PASSWORD_MIN_LENGTH }),
  },
  maxLength: {
    key: 'string.max',
    message: i18.t('errors:forms.maxLengthHelper', { count: PASSWORD_MAX_LENGTH }),
  },
  uppercase: {
    key: 'string.pattern.name',
    name: 'uppercase',
    message: i18.t('errors:forms.helper.uppercase'),
  },
  specialCharacters: {
    key: 'string.pattern.name',
    name: 'specialCharacters',
    message: i18.t('errors:forms.helper.specialCharacters'),
  },
}
export const rules = {
  minLength: minLengthValue => ({
    value: minLengthValue,
    message: i18.t('errors:forms.minLength', { count: minLengthValue }),
  }),
  maxLength: maxLengthValue => ({
    value: maxLengthValue,
    message: i18.t('errors:forms.maxLength', { count: maxLengthValue }),
  }),
  required: () => ({
    value: true,
    message: i18.t('errors:forms.required'),
  }),
  pattern: (pattern, customMessage) => ({
    value: pattern,
    message: customMessage || i18.t('errors:forms.pattern'),
  }),
  isValidPhoneNumber: phoneNumber =>
    isValidPhoneNumber(phoneNumber) || i18.t('errors:forms.invalidPhone'),

  maxSize: maxSize => files => {
    const [file] = files
    return file?.size < maxSize || i18.t('errors:forms.maxSize')
  },
  acceptedFormats: formats => files => {
    const [file] = files
    return formats.includes(file.type) || i18.t('errors:forms.invalidFile')
  },
  hasDaysSelected: (hasCustomHours, selectedWeekdays) => value => {
    return !(value && hasCustomHours && selectedWeekdays.length === 0) || ' '
  },
}

export const SCHEMAS = {
  accessName: joi
    .string()
    .max(ACCESS_NAME_MAX_LENGTH)
    .messages({
      'string.empty': i18.t('errors:forms.required'),
      'string.max': i18.t('errors:forms.maxLength', { count: ACCESS_NAME_MAX_LENGTH }),
    }),
  associatedBussinessIds: joi.string().messages({
    'string.empty': i18.t('errors:forms.required'),
  }),
  apiUsername: joi
    .string()
    .max(API_USERNAME_MAX_LENGTH)
    .messages({
      'string.empty': i18.t('errors:forms.required'),
      'string.max': i18.t('errors:forms.maxLength', { count: API_USERNAME_MAX_LENGTH }),
    }),
  apiAccesspassword: joi
    .string()
    .min(API_ACCESS_PASSWORD_MIN_LENGTH)
    .messages({
      'string.empty': i18.t('errors:forms.required'),
      'string.min': i18.t('errors:forms.minLength', { count: API_ACCESS_PASSWORD_MIN_LENGTH }),
    }),
  chargeRate: joi
    .number()
    .required()
    .min(0)
    .messages({
      'number.base': i18.t('errors:forms.requiredNumber', { field: 'Charge Rate' }),
      'number.min': i18.t('errors:forms.minLengthCount', {
        field: 'Charge Rate',
        count: '0',
      }),
    }),
  email: joi
    .string()
    .pattern(PATTERNS.EMAIL)
    .messages({
      'string.pattern.base': i18.t('errors:forms.invalidEmail'),
      'string.empty': i18.t('errors:forms.required'),
    }),
  confirmPassword: joi
    .string()
    // check if the password and the confirmation password are the same
    .valid(joi.ref('password'))
    .messages({
      'any.only': i18.t('errors:forms.confirmPassword'),
    }),
  notEmpty: joi.string().messages({
    'string.empty': i18.t('errors:forms.required'),
  }),
  password: joi
    .string()
    .max(PASSWORD_MAX_LENGTH)
    .min(PASSWORD_MIN_LENGTH)
    .messages({
      'string.empty': i18.t('errors:forms.required'),
      'string.max': i18.t('errors:forms.maxLength', { count: PASSWORD_MAX_LENGTH }),
      'string.min': i18.t('errors:forms.minLength', { count: PASSWORD_MIN_LENGTH }),
    }),
  passwordWithHelper: joi
    .string()
    .pattern(PATTERNS.UPPERCASE, { name: PASSWORD_WITH_HELPER_OBJECT.uppercase.name })
    .pattern(PATTERNS.SPECIAL_CHARACTERS, {
      name: PASSWORD_WITH_HELPER_OBJECT.specialCharacters.name,
    })
    .max(PASSWORD_MAX_LENGTH)
    .min(PASSWORD_MIN_LENGTH)
    .messages({
      'string.pattern.uppercase': PASSWORD_WITH_HELPER_OBJECT.uppercase.message,
      'string.pattern.specialCharacters_other':
        PASSWORD_WITH_HELPER_OBJECT.specialCharacters.message,
      'string.max': PASSWORD_WITH_HELPER_OBJECT.maxLength.message,
      'string.min': PASSWORD_WITH_HELPER_OBJECT.minLength.message,
    }),
}
