import { useTranslation } from 'react-i18next'
import { Box } from '@mui/system'

import Button from '_components/shared/button/button.component'
import { BUTTON_VARIANTS } from '_components/shared/button/button.constants'
import DialogLayout from '_components/shared/dialog/dialog-layout/dialog-layout.component'
import { SIZES } from '_components/shared/dialog/dialog-layout/dialog-layout.constants'
import { useDialog } from '_components/shared/dialog/dialog.hooks'

import ModalAllowCamera from './modal-allow-camera.component'
import { MODAL_ALLOW_CAMERA_TYPES } from './modal-upload-photo.constants'
import { blockedCamStyles } from './modal-upload-photo.styles'

const ModalCameraBlocked = () => {
  const { closeDialog, filterDialogStack, dialogState } = useDialog()
  const { t } = useTranslation('lib')

  return (
    <DialogLayout
      size={SIZES.XS}
      headerStylesOverride={blockedCamStyles.dialogLayout}
      closeAction={() =>
        filterDialogStack(
          dialogState?.dialogFilterParams?.key,
          dialogState?.dialogFilterParams?.value,
        )
      }
      hasMobileBottomSheet
    >
      <ModalAllowCamera allowType={MODAL_ALLOW_CAMERA_TYPES.NOT_ALLOWED}>
        <Box sx={blockedCamStyles.action}>
          <Button
            variant={BUTTON_VARIANTS.TEXT}
            label={t('lib:profilePicture.dismiss')}
            onClick={closeDialog}
          />
        </Box>
      </ModalAllowCamera>
    </DialogLayout>
  )
}

export default ModalCameraBlocked
