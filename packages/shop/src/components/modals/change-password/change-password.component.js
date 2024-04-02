import { joiResolver } from '@hookform/resolvers/joi'
import { Box, DialogContent, Divider, Typography } from '@mui/material'
import joi from 'joi'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { useUpdatePassword } from '_hooks/auth.hooks'
import {
  CLOSE_TYPES,
  SIZES,
} from '@lib/components/shared/dialog/dialog-layout/dialog-layout.constants'
import { styles as dialogStyles } from '@lib/components/shared/dialog/dialog-layout/dialog-layout.styles'
import Dialog from '@lib/components/shared/dialog/dialog.component'
import TextField from '@lib/components/shared/text-field/text-field.component'
import { TEXT_FIELD_TYPE } from '@lib/components/shared/text-field/text-field.constants'
import LockAltIcon from '@lib/assets/svgs/lock-alt-small.svg'
import { SCHEMAS, PASSWORD_WITH_HELPER_OBJECT } from '@lib/utils/validations.util'
import Helper from '_components/code-field-helper/code-field-helper.component'

import { styles } from './change-password.styles'
import { FIELD_NAME, DATA_TEST_ID } from './change-password.constants'

const joiSchema = joi.object({
  [FIELD_NAME.CURRENT_PASSWORD]: SCHEMAS.password,
  [FIELD_NAME.NEW_PASSWORD]: SCHEMAS.passwordWithHelper,
})

const ChangePassword = () => {
  const { t } = useTranslation('shop')

  const formMethods = useForm({
    resolver: joiResolver(joiSchema),
    defaultValues: {},
    mode: 'onTouched',
  })

  const {
    handleSubmit,
    formState: { isValid },
  } = formMethods

  const possibleErrors = Object.values(PASSWORD_WITH_HELPER_OBJECT)

  const newPassword = formMethods.watch(FIELD_NAME.NEW_PASSWORD)

  const formValidationInfo = joiSchema.validate(
    { [FIELD_NAME.NEW_PASSWORD]: newPassword },
    { abortEarly: false },
  )

  const onSubmit = data => {}

  const isButtonEnabled = isValid && !formValidationInfo.error

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)} style={dialogStyles.form}>
        <Dialog
          title={t('modals.changePassword.dialogTitle')}
          closeType={CLOSE_TYPES.ICON}
          size={SIZES.XS}
          hasMobileBottomSheet
          primaryAction={{
            label: t('modals.changePassword.primaryLabel'),
            props: { disabled: !isButtonEnabled },
          }}
        >
          <DialogContent sx={styles.dialogContent}>
            <Box mt={4}>
              <Box sx={styles.fieldWrapper}>
                <TextField
                  name={FIELD_NAME.CURRENT_PASSWORD}
                  textFieldType={TEXT_FIELD_TYPE.PASSWORD}
                  data-testid={DATA_TEST_ID.CURRENT_PASSWORD}
                  label={t('modals.changePassword.currentPassword')}
                />
              </Box>
              <Divider sx={styles.divider} />
              <Box sx={styles.fieldWrapper}>
                <TextField
                  name={FIELD_NAME.NEW_PASSWORD}
                  textFieldType={TEXT_FIELD_TYPE.PASSWORD}
                  data-testid={DATA_TEST_ID.NEW_PASSWORD}
                  label={t('modals.changePassword.newPassword')}
                />
              </Box>
              <Box sx={styles.fieldWrapper}>
                <Helper
                  errors={formValidationInfo.error?.details}
                  possibleErrors={possibleErrors}
                  hasBeenFilled={!!formValidationInfo.value[FIELD_NAME.NEW_PASSWORD]}
                />
              </Box>
            </Box>
          </DialogContent>
        </Dialog>
      </form>
    </FormProvider>
  )
}

export default ChangePassword
