import { Box, Typography } from '@mui/material'
import * as PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { styles } from './code-field-helper.styles'

const Helper = ({ errors, possibleErrors, hasBeenFilled }) => {
  const { t } = useTranslation('shop')

  return (
    <Box sx={styles.root}>
      <Typography typography="header4" color="gray.80">
        {t('modals.resetPassword.must')}
      </Typography>
      <Box sx={styles.helperContainer}>
        {possibleErrors.map(item => {
          const matchedErrors = errors?.filter(error => error.type === item.key) || []
          const matchedError = matchedErrors[0]?.context.name
            ? matchedErrors.find(error => error.context.name === item.name)
            : matchedErrors[0]
          return (
            <Box sx={styles.helperList} key={`${item.key}-${item.name}`}>
              {!matchedError && hasBeenFilled ? (
                <Typography sx={styles.checkIcon}>&#10004;</Typography>
              ) : (
                <Typography typography="medium" color="gray.80" sx={styles.dot}>
                  &#x2022;
                </Typography>
              )}
              <Box
                sx={[styles.helper, !matchedError && hasBeenFilled && styles.success]}
                component="span"
              >
                {item.message}
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

export default Helper

Helper.propTypes = {
  errors: PropTypes.array,
  possibleErrors: PropTypes.array,
  hasBeenFilled: PropTypes.bool,
}
