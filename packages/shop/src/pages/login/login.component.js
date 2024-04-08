import { joiResolver } from '@hookform/resolvers/joi'
import { Box, Typography } from '@mui/material'
import joi from 'joi'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

import EnvelopeIcon from '@lib/assets/svgs/envelope-small.svg'
import LockAltIcon from '@lib/assets/svgs/lock-alt-small.svg'
import Button from '@lib/components/shared/button/button.component'
import TextField from '@lib/components/shared/text-field/text-field.component'
import { TEXT_FIELD_TYPE } from '@lib/components/shared/text-field/text-field.constants'
import { SCHEMAS } from '@lib/utils/validations.util'

import { AUTOCOMPLETE_VALUES } from '../../../../../lib/components/shared/form/form.constants'

import {
  EMAIL_FIELD_ID,
  EMAIL_FIELD_NAME,
  PASSWORD_FIELD_ID,
  PASSWORD_FIELD_NAME,
} from './login.constants'
import { styles } from './login.styles'
import { useState } from 'react'
import { useToast } from '@lib/components/shared/toast/toast.hooks'

import { CircularProgress } from '@mui/material'



const joiSchema = joi.object({
  [PASSWORD_FIELD_NAME]: SCHEMAS.apiAccesspassword,
  [EMAIL_FIELD_NAME]: SCHEMAS.email,
})

const Login = () => {


  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false);

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


  const {
    formState: { isValid },
  } = formMethods


  const handleNewUser = () => {
    Navigate("/signup")
  }

  const handleLogin = data => {
    setIsLoading(true);
    const userData = {
      email: data.email,
      password: data.password
    };

    try {
      axios.post("https://dhenudhan-backend.adaptable.app/api/v1/users/login", userData)
        .then((response) => {
          setIsLoading(false);
          if (response.data.statusCode === 200) {
            sessionStorage.setItem("loggedIn", "1");
            
            // alert(response.data.message);
            toast.openToast({ title: response.data.message, severity: 'success', isOpen: true });
            // Toast({ title: response.data.message, severity: 'success', isOpen: true });
            Navigate("/");
          } else {
            // Toast({ title: response.data.message, severity: 'error', isOpen: true });
            // alert(response.data.message);
            toast.openToast({ title: response.data.message, severity: 'error', isOpen: true });
          }
        })
        .catch(error => {
          const { response: { data: { message } } } = error
          toast.openToast({ title: message, severity: 'error', isOpen: true });
          // console.log({ message })
          setIsLoading(false);
        });
    }
    catch (error) {
      const errorMessage = error.response?.data?.message || 'An error occurred';
      toast.openToast({ title: errorMessage, severity: 'error', isOpen: true });
      setIsLoading(false);
    }
  };



  return (
    <FormProvider {...formMethods}>
      {isLoading ? (<Box sx={styles.loaderContainer}> <CircularProgress sx={styles.loader} /> </Box>) : (
      <form onSubmit={formMethods.handleSubmit(handleLogin)} style={styles.form}>
        <Box sx={styles.root}>
          <Box sx={styles.formRoot}>
            {/* <Box sx={styles.flexCenter}>
              <img alt={t('login.logoAltText')} src={Logo} style={styles.logo} />
            </Box> */}
            <Box sx={styles.credentialsContainer}>
              <Typography typography="header1" sx={styles.title}>
                {t('login.title')}
              </Typography>
              <Typography typography="medium" sx={styles.subtitle}>
                {t('login.subtitle')}
              </Typography>
              <Box mt={4}>
                <TextField
                  name={EMAIL_FIELD_NAME}
                  label={t('shop:login.email')}
                  startAdornment={EnvelopeIcon}
                  id={EMAIL_FIELD_ID}
                  autoComplete={AUTOCOMPLETE_VALUES.email}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box mt={3}>
                <TextField
                  name={PASSWORD_FIELD_NAME}
                  label={t('login.password')}
                  startAdornment={LockAltIcon}
                  textFieldType={TEXT_FIELD_TYPE.PASSWORD}
                  id={PASSWORD_FIELD_ID}
                  autoComplete={AUTOCOMPLETE_VALUES.currentPassword}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box textAlign='end' mt={1} >
                <Typography typography="subtitle2" sx={styles.textButton}>
                  {t('login.forgotPass')}
                </Typography>
              </Box>
              <Box mt={3}>
                {
                  isLoading ? (<Box sx={styles.loaderContainer}> <CircularProgress sx={styles.loader} /> </Box>) : (<Button label={t('login.buttonLabel')} sx={styles.button} disabled={!isValid} />)
                }

              </Box>
              <Box textAlign='center' mt={1} >
                <Typography typography="subtitle2" sx={styles.textButton} onClick={handleNewUser}>
                  {t('login.registerNewUser')}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.backgroundPatternImage}></Box>
        </Box>
      </form>)}
    </FormProvider>
  )
}

export default Login
