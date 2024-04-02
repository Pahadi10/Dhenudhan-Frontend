/**
 * Filter keydown events to only allow numeric characters.
 * The field should be a `<input type="number">`.
 * @func
 * @param  {KeyboardEvent} event The keydown event
 */

import Joi from 'joi'

import i18n from '_i18n/index'

export const allowOnlyNumbers = event => {
  const { key } = event
  const nonNumeric = /[^e+-.]/i
  if (!nonNumeric.test(key)) {
    event.preventDefault()
  }
}

// This happens in case name is a string that contains a nested object reference.
// It usually happens inside a fieldArray.
export const getNestedFormError = (errors, name) => {
  const nameArray = name.split('.')
  if (nameArray.length > 1) {
    let error = errors

    for (let i = 0; i < nameArray.length; i++) {
      if (isNaN(nameArray[i])) {
        error = error[nameArray[i]]
      } else {
        error = error[parseInt(nameArray[i])]
      }

      if (error === undefined || error === null) {
        error = null
        break
      }
    }
    return error?.message
  }
}

export const generateFormFields = fields => {
  const schemaObject = {}
  Object.values(fields).forEach(field => {
    schemaObject[field.name] = field.validations?.isRequired
      ? Joi.string().required()
      : Joi.string().allow('')
    schemaObject[field.name] = field.validations?.max
      ? schemaObject[field.name].max(field.validations?.max)
      : schemaObject[field.name]
    schemaObject[field.name] = field.validations?.pattern
      ? schemaObject[field.name].pattern(field.validations?.pattern.base)
      : schemaObject[field.name]
    schemaObject[field.name] = schemaObject[field.name].messages({
      ...(field.validations?.isRequired ? { 'string.empty': i18n.t('errors:forms.required') } : {}),
      ...(field.validations?.max
        ? {
            'string.max': i18n.t('errors:forms.maxLength', {
              count: field.validations?.max,
            }),
          }
        : {}),
      ...(field.validations?.pattern
        ? {
            'string.pattern.base': field.validations?.pattern.message,
          }
        : {}),
    })
  })

  return Joi.object(schemaObject)
}
