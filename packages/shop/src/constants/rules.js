import { rules } from '@lib/utils/validations.util'
import {
  ALLOWED_TYPES,
  MAX_IMAGE_SIZE_MB,
} from '_components/modals/upload-photo/upload-photo.constants'
import { MEGABYTES_IN_BYTES } from '_constants/constants'

export const PHOTO_CLIENT_RULES = {
  required: rules.required,
  validate: {
    maxSize: rules.maxSize(MAX_IMAGE_SIZE_MB * MEGABYTES_IN_BYTES),
    acceptedFormats: rules.acceptedFormats(ALLOWED_TYPES),
  },
}
