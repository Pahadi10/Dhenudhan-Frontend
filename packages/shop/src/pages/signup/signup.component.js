import { joiResolver } from '@hookform/resolvers/joi'
import { Box, Typography } from '@mui/material'
import joi from 'joi'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
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
import {CircularProgress} from '@mui/material'

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

import { useToast } from '@lib/components/shared/toast/toast.hooks'

const joiSchema = joi.object({
  [NAME_FIELD_NAME]: SCHEMAS.accessName,
  [EMAIL_FIELD_NAME]: SCHEMAS.email,
  [PASSWORD_FIELD_NAME]: SCHEMAS.password,
  [CONFIRM_PASSWORD_FIELD_NAME]: SCHEMAS.confirmPassword,
})

const Signup = () => {
  
  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast()

  const formMethods = useForm({
    resolver: joiResolver(joiSchema),
    mode: 'onTouched',
  })

  const { t } = useTranslation('shop')


  const Navigate = useNavigate();

  const handleSignup = data => {
    
    setIsLoading(true);
    
    const userData = {
      fullName: data.name,
      email: data.email,
      password: data.password
    }

    try {
    axios.post("https://dhenudhan-backend.adaptable.app/api/v1/users/register", userData).then((response) => {
      // console.log(response.status, response.data);
      setIsLoading(false);


      if (response.data.statusCode === 200) {
        sessionStorage.setItem("loggedIn", "1")
        // alert(response.data.message)
        toast.openToast({ title: response.data.message, severity: 'success', isOpen: true });

        Navigate("/")
      }
      else {
        // alert(response.data.message)
        toast.openToast({ title: response.data.message, severity: 'error', isOpen: true });
      }
    

    })
    .catch(error => {
      const { response: { data: { message } } } = error
      console.log({ message })
      toast.openToast({ title: message, severity: 'error', isOpen: true });
      setIsLoading(false);
    });
  }
  catch (error) {
    const errorMessage = error.response?.data?.message || 'An error occurred';
    toast.openToast({ title: errorMessage, severity: 'error', isOpen: true });
    setIsLoading(false);
  }
  };

  const {
    formState: { isValid },
  } = formMethods

  return (
    <FormProvider {...formMethods}>

{isLoading ? (<Box sx={styles.loaderContainer}> <CircularProgress sx={styles.loader} /> </Box>) : (
      <form onSubmit={formMethods.handleSubmit(handleSignup)} style={styles.form}>
        <Box sx={styles.root}>
          <Box sx={styles.formRoot}>
            <Box sx={styles.flexCenter}>
              {/* Logo of Dhenudhan in the form  */}

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
                {/* Split the name textField into first name and last name once the Ankur changes them in the backend */}

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
                // onChange={handleDataChange}
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
                {
                  <Button label={t('signup.buttonLabel')} sx={styles.button} disabled={!isValid} />
                }
              </Box>
            </Box>
          </Box>
          <Box sx={styles.backgroundPatternImage}></Box>
        </Box>
      </form>
)}
    </FormProvider>
  )
}

export default Signup
