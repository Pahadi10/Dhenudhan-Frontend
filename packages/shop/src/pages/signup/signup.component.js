import { joiResolver } from '@hookform/resolvers/joi'
import { Box, Typography } from '@mui/material'
import joi from 'joi'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Logo from '@lib/assets/images/logo.png'
import EnvelopeIcon from '@lib/assets/svgs/envelope-small.svg'
import LockAltIcon from '@lib/assets/svgs/lock-alt-small.svg'
import UserIcon from '@lib/assets/svgs/user-small.svg'
import Button from '@lib/components/shared/button/button.component'
import TextField from '@lib/components/shared/text-field/text-field.component'
import { TEXT_FIELD_TYPE } from '@lib/components/shared/text-field/text-field.constants'
import { USER } from '_constants/constants'
import { SCHEMAS } from '@lib/utils/validations.util'

import { AUTOCOMPLETE_VALUES } from '../../../../../lib/components/shared/form/form.constants'

import {
  NAME_FIELD_NAME,  
  NAME_FIELD_ID,  
  EMAIL_FIELD_ID,
  EMAIL_FIELD_NAME,
  PASSWORD_FIELD_ID,
  PASSWORD_FIELD_NAME,
  CONFIRM_PASSWORD_FIELD_NAME,
  CONFIRM_PASSWORD_FIELD_ID
} from './signup.constants'
import { styles } from './signup.styles'


const joiSchema = joi.object({

  [NAME_FIELD_NAME]: SCHEMAS.apiUsername ,  
  [EMAIL_FIELD_NAME]: SCHEMAS.email,
  [PASSWORD_FIELD_NAME]: SCHEMAS.password,
  [CONFIRM_PASSWORD_FIELD_NAME]: SCHEMAS.confirmPassword,
})

const Signup = () => {
  const formMethods = useForm({
    resolver: joiResolver(joiSchema),
    mode: 'onTouched',
  })
  // const location = useLocation()
  // const from = location.state?.from.pathname
  const { t } = useTranslation('shop')

  // const user = JSON.parse(sessionStorage.getItem(USER))
  // const hasValidSession = user?.token?.accessToken

  // if (hasValidSession) {
  //   if (from) {
  //     return <Navigate to={from} state={{ from: location }} replace />
  //   }
  //   // return <Navigate to={ROUTES.dashboard.path} state={{ from: location }} replace />
  // }

  // const handleSubmit = async data => {
  //   sessionStorage.setItem('user', { token: { accessToken: 'aaaaa' } })
  //   // sendRequest({
  //   //   email: data[EMAIL_FIELD_NAME],
  //   //   password: data[PASSWORD_FIELD_NAME],
  //   // })
  // }
  const Navigate = useNavigate();
  const handleLogin = () => {
    sessionStorage.setItem("loggedIn", "1")
    Navigate("/")
  }

  const {
    formState: { isValid },
  } = formMethods

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(handleLogin)} style={styles.form}>
        <Box sx={styles.root}>
          <Box sx={styles.formRoot}>
            <Box sx={styles.flexCenter}>
              {/* <img alt={t('signup.logoAltText')} src={Logo} style={styles.logo} /> */}
            </Box>
            <Box sx={styles.credentialsContainer}>
              <Typography typography="header1" sx={styles.title}>
                {t('signup.title')}
              </Typography>
              <Typography typography="medium" sx={styles.subtitle}>
                {t('signup.subtitle')}
              </Typography>
              <Box mt={4}>
                <TextField
                  name={NAME_FIELD_NAME}
                  label={t('shop:signup.name')}
                  startAdornment={UserIcon}
                  id={NAME_FIELD_ID}
                  autoComplete={AUTOCOMPLETE_VALUES.name}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>

              <Box mt={3}>
                <TextField
                  name={EMAIL_FIELD_NAME}
                  label={t('shop:signup.email')}
                  startAdornment={EnvelopeIcon}
                  id={EMAIL_FIELD_ID}
                  autoComplete={AUTOCOMPLETE_VALUES.email}
                  InputLabelProps={{ shrink: true }}
                />
                
              </Box>
              <Box mt={3}>
                <TextField
                  name={PASSWORD_FIELD_NAME}
                  label={t('signup.password')}
                  startAdornment={LockAltIcon}
                  textFieldType={TEXT_FIELD_TYPE.PASSWORD}
                  id={PASSWORD_FIELD_ID}
                  autoComplete={AUTOCOMPLETE_VALUES.currentPassword}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box mt={3}>
                <TextField
                  name={CONFIRM_PASSWORD_FIELD_NAME}
                  label={t('signup.confirmPassword')}
                  startAdornment={LockAltIcon}
                  textFieldType={TEXT_FIELD_TYPE.PASSWORD}
                  id={CONFIRM_PASSWORD_FIELD_ID}
                  autoComplete={AUTOCOMPLETE_VALUES.currentPassword}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box mt={4}>
                <Button label={t('signup.buttonLabel')} sx={styles.button} disabled={!isValid} />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.backgroundPatternImage}></Box>
        </Box>
      </form>
    </FormProvider>
  )
}

export default Signup
