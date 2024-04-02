import { Box, DialogContent, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import Avatar from '_components/shared/avatar/avatar.component'
import { AVATAR_SIZE } from '_components/shared/avatar/avatar.constants'
import { BUTTON_VARIANTS } from '_components/shared/button/button.constants'
import DialogLayout from '_components/shared/dialog/dialog-layout/dialog-layout.component'
import { SIZES } from '_components/shared/dialog/dialog-layout/dialog-layout.constants'
import Button from '_components/shared/button/button.component'
import Badge from '_components/shared/badge/badge.component'
import { useDialog } from '_components/shared/dialog/dialog.hooks'
import { BADGE_ANCHOR_ORIGIN, BADGE_OVERLAP } from '_components/shared/badge/badge.constants'
import { imageToUrl } from '_utils/file.utils'
import { useTimeout } from '_hooks/timeout.hooks'

import { uploadSuccessStyles } from './modal-upload-photo.styles'
import { badgeSuccess, CLOSE_SUCCESSFUL_DIALOG_TIMEOUT } from './modal-upload-photo.constants'

const ModalUploadPhotoSuccess = ({ image, imageDelayedToLoad }) => {
  const { t } = useTranslation(['lib', 'common'])
  const imageUrl = imageToUrl(image)
  const { filterDialogStack, dialogState, closeDialog } = useDialog()
  useTimeout(closeDialog, CLOSE_SUCCESSFUL_DIALOG_TIMEOUT)

  return (
    <DialogLayout
      closeAction={() =>
        filterDialogStack(
          dialogState?.dialogFilterParams?.key,
          dialogState?.dialogFilterParams?.value,
        )
      }
      headerStylesOverride={uploadSuccessStyles.dialogLayout}
      size={SIZES.XS}
      hasMobileBottomSheet
    >
      <DialogContent sx={uploadSuccessStyles.dialogContent}>
        <Stack spacing={3} alignItems="center">
          <Badge
            overlap={BADGE_OVERLAP.CIRCULAR}
            anchorOrigin={BADGE_ANCHOR_ORIGIN.BOTTOM_CENTER}
            withBackground={true}
            isBadgeRounded={true}
            withBorder={true}
            badgeContent={badgeSuccess}
            sx={uploadSuccessStyles.badge}
          >
            <Avatar
              item={{ src: imageUrl, alt: 'client-photo-updated' }}
              size={AVATAR_SIZE.PROFILE}
            />
          </Badge>
          <Box sx={uploadSuccessStyles.textContainer}>
            <Typography typography="header1" color="gray.80">
              {t('lib:profilePicture.photoChanged')}
            </Typography>
            <Typography typography="large" color="gray.56">
              {imageDelayedToLoad
                ? t('lib:profilePicture.successfullyChangedPhotoDelayed')
                : t('lib:profilePicture.successfullyChangedPhoto')}
            </Typography>
          </Box>
          <Button
            variant={BUTTON_VARIANTS.TEXT}
            label={t('common:dismiss')}
            onClick={() =>
              filterDialogStack(
                dialogState?.dialogFilterParams?.key,
                dialogState?.dialogFilterParams?.value,
              )
            }
          />
        </Stack>
      </DialogContent>
    </DialogLayout>
  )
}

ModalUploadPhotoSuccess.propTypes = {
  image: PropTypes.string.isRequired,
  imageDelayedToLoad: PropTypes.bool,
}

export default ModalUploadPhotoSuccess
