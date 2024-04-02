import { MAX_IMAGE_SIZE_MB } from '_components/shared/modal-upload-photo/modal-upload-photo.constants'
import { PATTERNS, rules } from '_utils/validations.util'

export const RULES = {
  minLength: rules.minLength(1),
  maxLength: rules.maxLength(50),
  required: rules.required,
  pattern: rules.pattern(PATTERNS.ALPHANUMERIC_ONLY),
}

export const PHONE_RULE = {
  validate: rules.isValidPhoneNumber,
}
export const hasDaysSelectedRules = (hasCustomHours, selectedWeekdays) => ({
  validate: rules.hasDaysSelected(hasCustomHours, selectedWeekdays),
})

export const MEGABYTES_IN_BYTES = 1024 * 1024

export const PHOTO_CLIENT_RULES = allowedTypes => {
  return {
    required: rules.required,
    validate: {
      maxSize: rules.maxSize(MAX_IMAGE_SIZE_MB * MEGABYTES_IN_BYTES),
      acceptedFormats: rules.acceptedFormats(allowedTypes),
    },
  }
}
