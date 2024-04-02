import { Box, DialogContent, useMediaQuery } from '@mui/material'
import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import cameraIcon from '_assets/svgs/camera.svg'
import {
  BUTTON_SIZE,
  BUTTON_THEME,
  BUTTON_VARIANTS,
} from '_components/shared/button/button.constants'
import DialogLayout from '_components/shared/dialog/dialog-layout/dialog-layout.component'
import { CLOSE_TYPES, SIZES } from '_components/shared/dialog/dialog-layout/dialog-layout.constants'
import { useDialog } from '_components/shared/dialog/dialog.hooks'
import { useCounterInterval } from '_hooks/interval.hooks'
import { useUserMedia } from '_hooks/useUserMedia.hooks'
import CameraFrame from '_components/shared/camera-frame/camera-frame.component'

import ModalAllowCamera from './modal-allow-camera.component'
import {
  END_COUNTER,
  EXCEPTIONS_MODALS,
  INITIAL_COUNTER,
  INTERVAL_DELAY,
  MODAL_ALLOW_CAMERA_TYPES,
  USER_MEDIA_CONSTRAINTS,
} from './modal-upload-photo.constants'
import { cameraFramingStyles } from './modal-upload-photo.styles'
import ModalCropClientPhoto from './modal-crop-photo.component'
import { CONVERT_QUALITY, FRAME_SIZE, FRAME_SIZE_MOBILE } from './modal-upload-photo.constants'

const ModalCameraFraming = ({ isCameraEnabled, mutation, isBannerImage }) => {
  const { pushDialog, filterDialogStack, dialogState } = useDialog()
  const { t } = useTranslation('lib')
  const { hasFinished, hasStarted, start, counter, isCounting } = useCounterInterval(
    INTERVAL_DELAY,
    INITIAL_COUNTER,
    END_COUNTER,
  )
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const frameSize = isMobile ? FRAME_SIZE_MOBILE : FRAME_SIZE

  const onError = useCallback(
    error => {
      pushDialog(EXCEPTIONS_MODALS[error.name], { hasCam: false })
    },
    [pushDialog],
  )

  const { ref: mediaRef, isStreamEnabled } = useUserMedia({
    constraints: USER_MEDIA_CONSTRAINTS,
    onError,
  })

  const isDisabled = !isStreamEnabled || hasStarted

  const capturePhotoCallback = useCallback(
    photo => {
      const timeoutId = setTimeout(() => {
        pushDialog(ModalCropClientPhoto, { image: photo, mutation, isBannerImage })
      }, 500)
      return () => clearInterval(timeoutId)
    },
    [pushDialog, mutation, isBannerImage],
  )

  const primaryActionButtonProps = {
    variant: BUTTON_VARIANTS.ICON,
    buttonIconTheme: BUTTON_THEME.PRIMARY,
    disabled: isDisabled,
    size: BUTTON_SIZE.MEDIUM,
    sx: [
      cameraFramingStyles.primaryAction,
      isCounting && cameraFramingStyles.primaryActionCounter,
      hasFinished && cameraFramingStyles.capturing,
    ],
    ...(isCounting ? { children: counter } : { icon: cameraIcon }),
    iconProps: {
      viewBox: '0 0 16 17',
      sx: cameraFramingStyles.primaryActionIcon,
    },
  }

  const dialogLayoutProps = {
    closeAction: () =>
      filterDialogStack(
        dialogState?.dialogFilterParams?.key,
        dialogState?.dialogFilterParams?.value,
      ),
    primaryAction: {
      label: t('lib:profilePicture.startCapture'),
      action: () => start(),
      containerProps: {
        sx: cameraFramingStyles.primaryActionContainer,
      },
      props: primaryActionButtonProps,
    },
    ...(isStreamEnabled
      ? { title: t('lib:profilePicture.cameraFraming') }
      : { headerStylesOverride: cameraFramingStyles.dialogHeader }),
  }

  return (
    <DialogLayout
      {...dialogLayoutProps}
      closeType={isStreamEnabled ? CLOSE_TYPES.TEXT : CLOSE_TYPES.ICON}
      size={SIZES.XS}
      hasMobileBottomSheet
    >
      {isStreamEnabled ? (
        <DialogContent sx={cameraFramingStyles.dialogContent}>
          <Box sx={cameraFramingStyles.container}>
            <CameraFrame
              mediaRef={mediaRef}
              hasFinished={hasFinished}
              hasStarted={hasStarted}
              capturePhotoCallback={capturePhotoCallback}
              convertQuality={CONVERT_QUALITY}
              frameSize={frameSize}
            />
          </Box>
        </DialogContent>
      ) : (
        <ModalAllowCamera
          allowType={
            isCameraEnabled ? MODAL_ALLOW_CAMERA_TYPES.STARTING : MODAL_ALLOW_CAMERA_TYPES.ALLOW
          }
        />
      )}
    </DialogLayout>
  )
}

ModalCameraFraming.propTypes = {
  isCameraEnabled: PropTypes.bool,
  isBannerImage: PropTypes.bool,
  clientId: PropTypes.string,
  mutation: PropTypes.shape({
    mutate: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    responseKey: PropTypes.string.isRequired,
    onUploadSuccess: PropTypes.func,
  }).isRequired,
}

ModalCameraFraming.defaultProps = {
  isCameraEnabled: false,
  isBannerImage: false,
  clientId: '',
}

export default ModalCameraFraming
