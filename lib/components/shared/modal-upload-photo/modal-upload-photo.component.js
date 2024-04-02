import { Box, DialogContent, Icon, Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import { forwardRef, useCallback, useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Trans, useTranslation } from 'react-i18next'

import cameraIcon from '_assets/svgs/camera-large.svg'
import cameraSlashIcon from '_assets/svgs/camera-slash-large.svg'
import ButtonSelectFile from '_components/shared/button-select-file/button-select-file.component'
import DialogLayout from '_components/shared/dialog/dialog-layout/dialog-layout.component'
import { CLOSE_TYPES, SIZES } from '_components/shared/dialog/dialog-layout/dialog-layout.constants'
import { useDialog } from '_components/shared/dialog/dialog.hooks'
import { useIsCameraEnabled } from '_hooks/useIsCameraEnabled.hooks'
import { filterAllowedFileFormats } from '_utils/camera.util'
import { PHOTO_CLIENT_RULES } from '_constants/rules'

import { MEGABYTES_IN_BYTES } from '../../../constants/rules'

import ModalCameraFraming from './modal-camera-framing.component'
import ModalCropClientPhoto from './modal-crop-photo.component'
import { ALLOWED_TYPES, INPUT_FILE_NAME, MAX_IMAGE_SIZE_MB } from './modal-upload-photo.constants'
import { styles } from './modal-upload-photo.styles'

const ModalUploadPhoto = forwardRef(
  ({ hasCam, mutation, directOpen, allowedTypes, isBannerImage, imageDelayedToLoad }, ref) => {
    const { pushDialog, filterDialogStack, dialogState, popDialog } = useDialog()
    const isCameraEnabled = useIsCameraEnabled()
    const { t } = useTranslation('lib')
    const formMethods = useForm({
      mode: 'onChange',
    })
    const inputRef = useRef(null)
    const allowedFileFormatTypes = allowedTypes || ALLOWED_TYPES
    const { watch, formState, handleSubmit } = formMethods
    const { errors, isValid } = formState

    const hasErrors = Object.keys(errors).length > 0
    const imageData = watch(INPUT_FILE_NAME)

    const openFile = () => {
      inputRef.current.click()
    }

    const onSubmit = useCallback(
      data => {
        const [file] = data
        if (file) {
          const isMaxSizeExceeded = file?.size > MAX_IMAGE_SIZE_MB * MEGABYTES_IN_BYTES
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => {
            if (!isMaxSizeExceeded) {
              pushDialog(ModalCropClientPhoto, {
                image: reader.result,
                hasCam,
                mutation,
                directOpen,
                isBannerImage,
                imageDelayedToLoad,
              })
            }
          }
        }
      },
      [pushDialog, hasCam, mutation, directOpen, isBannerImage, imageDelayedToLoad],
    )

    const uploadPhotoAction = {
      label: t('lib:profilePicture.uploadPhoto'),
      action: openFile,
    }
    const useCameraAction = {
      label: t('lib:profilePicture.useCamera'),
      action: () => pushDialog(ModalCameraFraming, { isCameraEnabled, mutation, isBannerImage }),
    }

    const dialogLayoutProps = {
      withCam: { primaryAction: useCameraAction, secondaryAction: uploadPhotoAction },
      withoutCam: { primaryAction: uploadPhotoAction },
    }

    useEffect(() => {
      if (isValid) {
        handleSubmit(onSubmit(imageData))
      }
    }, [isValid, handleSubmit, imageData, onSubmit])

    if (directOpen) {
      return (
        <FormProvider {...formMethods}>
          <form>
            <Stack sx={styles.inputFileWarning}>
              <ButtonSelectFile
                labelProps={{ ref }}
                aria-label={t('lib:profilePicture.uploadPhoto')}
                accept={allowedFileFormatTypes.join(',')}
                rules={PHOTO_CLIENT_RULES(allowedFileFormatTypes)}
                hiddenButton
                name={INPUT_FILE_NAME}
                directOpen
              />
            </Stack>
          </form>
        </FormProvider>
      )
    }
    return (
      <DialogLayout
        {...(hasCam ? dialogLayoutProps.withCam : dialogLayoutProps.withoutCam)}
        headerStylesOverride={styles.dialogHeader}
        closeType={CLOSE_TYPES.ICON}
        size={SIZES.XS}
        closeAction={() => {
          if (dialogState?.dialogFilterParams) {
            filterDialogStack(
              dialogState?.dialogFilterParams?.key,
              dialogState?.dialogFilterParams?.value,
            )
          } else {
            popDialog()
          }
        }}
        hasMobileBottomSheet
      >
        <DialogContent sx={styles.dialogContent}>
          <FormProvider {...formMethods}>
            <form>
              <Box sx={[styles.titleWrapper, hasErrors && styles.titleWrapperInputError]}>
                <Icon sx={styles.cameraIcon} component={hasCam ? cameraIcon : cameraSlashIcon} />
                <Typography typography="header1" color="gray.80">
                  {hasCam
                    ? t('lib:profilePicture.changePhoto')
                    : t('lib:profilePicture.cameraNotFound')}
                </Typography>
                <Typography color="gray.56" typography="header3">
                  {hasCam
                    ? t('lib:profilePicture.takePictureOrUpload')
                    : t('lib:profilePicture.cantConnectCamera')}
                </Typography>
              </Box>
              <Stack sx={styles.inputFileWarning}>
                <ButtonSelectFile
                  labelProps={{ ref: inputRef }}
                  aria-label={t('lib:profilePicture.uploadPhoto')}
                  accept={allowedFileFormatTypes.join(',')}
                  rules={PHOTO_CLIENT_RULES(allowedFileFormatTypes)}
                  hiddenButton
                  name={INPUT_FILE_NAME}
                />
                <Typography color="gray.56" typography="large">
                  <Trans
                    i18nKey="lib:profilePicture.photoTypesAllowed"
                    values={{ val: filterAllowedFileFormats(allowedFileFormatTypes) }}
                    components={[<Typography component="span" typography="header3" />]}
                  />
                </Typography>

                <Typography color="gray.56" typography="large">
                  <Trans
                    i18nKey="lib:profilePicture.maxSize"
                    values={{ size: MAX_IMAGE_SIZE_MB }}
                    components={[<Typography component="span" typography="header3" />]}
                  />
                </Typography>
              </Stack>
            </form>
          </FormProvider>
        </DialogContent>
      </DialogLayout>
    )
  },
)
ModalUploadPhoto.propTypes = {
  hasCam: PropTypes.bool,
  allowedTypes: PropTypes.array,
  directOpen: PropTypes.bool,
  clientId: PropTypes.string,
  imageDelayedToLoad: PropTypes.bool,
  isBannerImage: PropTypes.bool,
  mutation: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    responseKey: PropTypes.string.isRequired,
    onUploadSuccess: PropTypes.func,
    additionalData: PropTypes.object,
  }).isRequired,
}
ModalUploadPhoto.defaultProps = {
  hasCam: true,
  clientId: '',
  isBannerImage: false,
}
export default ModalUploadPhoto
