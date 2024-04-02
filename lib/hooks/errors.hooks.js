import i18next from 'i18next'

import { TOAST_PROPS_OPTIONS } from '_components/shared/toast/toast.constants'
import { useToast } from '_components/shared/toast/toast.hooks'
import { GENERIC_ERROR_KEY } from '_constants/errors.constants'

/* The i18n variable is associated to the context property of the error
 * e.g: context.limit, or context.regex
 */
const REASON_I18N_VARIABLE = {
  min: 'limit',
  max: 'limit',
  excludes: 'excludes',
  required: null,
  pattern: 'regex',
  empty: null,
}

const getErrorMessage = (error, localizedFields) => {
  const { t } = i18next

  // TODO: Implement errors functionality whenever backend maps errors
  if (localizedFields === GENERIC_ERROR_KEY) {
    return t('errors:api.generic')
  }

  const details = error?.extensions?.details

  if (!details) {
    return t('errors:api.generic')
  }

  const { field, reason, context } = details?.[0]?.field && details[0]

  const message = t(`errors:api.${reason}`, {
    field: t(`${localizedFields}.${field}`),
    ...(!!context && {
      [reason]: context[REASON_I18N_VARIABLE[reason]],
    }),
  })

  return message || t('errors:api.generic')
}

/**
 * handles the error behavior from the failed query/mutation
 * @param {String} localizedFields localization path to the field names
 * (e.g. 'siteSettings:fields') where it contains same field names used by the query/mutation
 * @returns {{onError: function({ response:{errors:List<{field: string, reason: string, context: {limit?: number, regex?: string}}>} })}}
 */
export const useErrorHandler = localizedFields => {
  const { openToast } = useToast()

  return {
    onError: error => {
      if (error?.response?.errors?.length === 0) {
        return
      }

      if (!error?.response?.errors) {
        return openToast({
          severity: TOAST_PROPS_OPTIONS.SEVERITY.ERROR,
          title: error.message,
        })
      }

      const [singleError] = error?.response?.errors

      const errorMessage = getErrorMessage(singleError, localizedFields)
      if (errorMessage) {
        openToast({
          severity: TOAST_PROPS_OPTIONS.SEVERITY.ERROR,
          title: errorMessage,
        })
      }
    },
  }
}
