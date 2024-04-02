import { useState } from 'react'
import { Box, DialogContent } from '@mui/material'
import { PropTypes } from 'prop-types'
import { useTranslation } from 'react-i18next'

import DialogLayout from '_components/shared/dialog/dialog-layout/dialog-layout.component'
import { useDialog } from '_components/shared/dialog/dialog.hooks'
import { CLOSE_TYPES, SIZES } from '_components/shared/dialog/dialog-layout/dialog-layout.constants'
import syncIcon from '_assets/svgs/sync-small.svg'
import CropImage from '_components/shared/crop-image/crop-image.component'
import { getFileExtension, imageToUrl, uploadImageToS3 } from '_utils/file.utils'
import { useToast } from '_components/shared/toast/toast.hooks'
import { TOAST_PROPS_OPTIONS } from '_components/shared/toast/toast.constants'
import { useErrorHandler } from '_hooks/errors.hooks'
import { GENERIC_ERROR_KEY } from '_constants/errors.constants'
import { EXTENSIONS } from '_constants/files.constants'

import ModalUploadPhotoSuccess from './modal-upload-photo-success.component'
import ModalUploadPhoto from './modal-upload-photo.component'
import { cropStyles } from './modal-upload-photo.styles'

const ModalCropClientPhoto = ({
  image,
  mutation,
  directOpen,
  isBannerImage,
  imageDelayedToLoad,
  ...dialogProps
}) => {
  const { pushDialog, filterDialogStack, dialogState, closeDialog } = useDialog()
  const { t } = useTranslation('lib')
  const { openToast } = useToast()
  const [cropper, setCropper] = useState()
  const imageUrl = imageToUrl(image)
  const [isUploading, setIsUploading] = useState(false)
  const { mutate, isLoading, additionalData: mutatationAdditionalData } = mutation
  const { onError } = useErrorHandler(GENERIC_ERROR_KEY)

  const upload = async presignedUrlResponse => {
    setIsUploading(true)
    uploadImageToS3(presignedUrlResponse, cropper, mutation.responseKey, {
      onSuccess: () => {
        pushDialog(ModalUploadPhotoSuccess, {
          image: cropper,
          imageDelayedToLoad,
        })
        mutation?.onUploadSuccess?.(cropper)
      },
      onError: error => {
        console.error(error)
        openToast({
          title: t('errors:api.generic'),
          severity: TOAST_PROPS_OPTIONS.SEVERITY.ERROR,
          horizontal: TOAST_PROPS_OPTIONS.HORIZONTAL.CENTER,
        })
      },
    })
  }

  return (
    <DialogLayout
      title={t('lib:profilePicture.cropAndSave')}
      closeType={CLOSE_TYPES.TEXT}
      size={SIZES.XS}
      closeAction={() => {
        if (dialogState?.dialogFilterParams?.key) {
          filterDialogStack(
            dialogState?.dialogFilterParams?.key,
            dialogState?.dialogFilterParams?.value,
          )
        } else {
          closeDialog()
        }
      }}
      hasMobileBottomSheet
      primaryAction={{
        label: t(`lib:profilePicture.${directOpen ? 'saveChanges' : 'savePhoto'}`),
        action: () => {
          mutate(
            {
              fileExtension: getFileExtension(image) || EXTENSIONS.JPEG,
              image: cropper,
              croppedImage: cropper,
              ...mutatationAdditionalData,
            },
            {
              onSuccess: upload,
              onError,
            },
          )
        },
        props: {
          disabled: isUploading || isLoading,
        },
      }}
      secondaryAction={
        !directOpen && {
          label: t('lib:profilePicture.startOver'),
          action: () => pushDialog(ModalUploadPhoto, { mutation, ...dialogProps, isBannerImage }),
          props: {
            startIcon: syncIcon,
          },
        }
      }
    >
      <DialogContent sx={cropStyles.dialogContent}>
        <Box sx={cropStyles.cropperContainer}>
          <CropImage
            cropperWrapperStyles={cropStyles.cropperWrapper}
            cropperStyles={cropStyles.cropper}
            isAvatar
            setCropper={setCropper}
            image={imageUrl}
            isBannerImage={isBannerImage}
          />
        </Box>
      </DialogContent>
    </DialogLayout>
  )
}
ModalCropClientPhoto.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Blob)]).isRequired,
  mutation: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    responseKey: PropTypes.string.isRequired,
    onUploadSuccess: PropTypes.func,
    additionalData: PropTypes.object,
  }).isRequired,
  directOpen: PropTypes.bool,
  isBannerImage: PropTypes.bool,
  imageDelayedToLoad: PropTypes.bool,
}

export default ModalCropClientPhoto
