import PropTypes from 'prop-types'
import { FormProvider, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { DialogContent } from '@mui/material'

import { styles as dialogStyles } from '@lib/components/shared/dialog/dialog-layout/dialog-layout.styles'
import {
  CLOSE_TYPES,
  SIZES,
} from '@lib/components/shared/dialog/dialog-layout/dialog-layout.constants'
import Dialog from '@lib/components/shared/dialog/dialog.component'
import TextField from '@lib/components/shared/text-field/text-field.component'

const SingleFieldDialog = ({ title, defaultValue, onSubmit, field, rules }) => {
  const { t } = useTranslation(['common'])

  const formMethods = useForm({
    defaultValues: { [field.name]: defaultValue },
    mode: 'onChange',
  })
  const {
    formState: { isDirty, isValid },
  } = formMethods

  const isDisabled = !isDirty || !isValid
  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} style={dialogStyles.form}>
        <Dialog
          title={title}
          closeType={CLOSE_TYPES.TEXT}
          size={SIZES.XXS}
          hasMobileBottomSheet
          primaryAction={{
            label: t('common:saveChanges'),
            props: { disabled: isDisabled },
          }}
        >
          <DialogContent>
            <TextField fullWidth rules={rules} {...field} />
          </DialogContent>
        </Dialog>
      </form>
    </FormProvider>
  )
}

SingleFieldDialog.propTypes = {
  title: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    helperText: PropTypes.string,
    inputProps: PropTypes.shape({
      startAdornment: PropTypes.node,
      endAdornment: PropTypes.node,
    }),
    InputLabelProps: PropTypes.shape({
      shrink: PropTypes.bool,
    }),
  }).isRequired,
  rules: PropTypes.object.isRequired,
}

export default SingleFieldDialog
