import { t } from 'i18next'
import { Box } from '@mui/system'
import { Icon, SvgIcon } from '@mui/material'

import checkCircle from '_assets/svgs/check-circle-small.svg'
import { FILE_FORMATS } from '_constants/files.constants'
import cameraSlashIcon from '_assets/svgs/camera-slash-large.svg'
import cameraVideoIcon from '_assets/svgs/camera-video.svg'
import timesCircleIcon from '_assets/svgs/times-circle-error.svg'
// import HapanaSparkLoading from '_components/shared/hapana-spark-loading/hapana-spark-loading.component'
import Badge from '_components/shared/badge/badge.component'
import { BADGE_ANCHOR_ORIGIN } from '_components/shared/badge/badge.constants'

import ModalUploadPhoto from './modal-upload-photo.component'
import { allowCameraStyles, uploadSuccessStyles } from './modal-upload-photo.styles'
import ModalCameraBlocked from './modal-camera-blocked.component'

export const FRAME_SIZE = {
  TOP: 24,
  BOTTOM: 49,
  LEFT: 108,
  RIGHT: 108,
}

export const FRAME_SIZE_MOBILE = {
  TOP: 23,
  BOTTOM: 48,
  LEFT: 47,
  RIGHT: 47,
}

export const INTERVAL_DELAY = 1 * 1000
export const INITIAL_COUNTER = 1
export const END_COUNTER = 3
export const CONVERT_QUALITY = 1
export const ALLOWED_TYPES = [FILE_FORMATS.JPEG, FILE_FORMATS.PNG, FILE_FORMATS.GIF]
export const INPUT_FILE_NAME = 'buttonInputFile'
export const MAX_IMAGE_SIZE_MB = 5

export const USER_MEDIA_EXCEPTIONS = {
  NOT_ALLOWED_ERROR: 'NotAllowedError',
  NOT_FOUND_ERROR: 'NotFoundError',
}

export const MODAL_ALLOW_CAMERA_TYPES = {
  NOT_ALLOWED: 'cameraNotAllowed',
  ALLOW: 'cameraWaiting',
  STARTING: 'cameraStarting',
}

export const USER_MEDIA_CONSTRAINTS = {
  audio: false,
  video: {
    width: { ideal: 1280 },
    height: { ideal: 1280 },
    facingMode: 'environment',
  },
}

export const EXCEPTIONS_MODALS = {
  [USER_MEDIA_EXCEPTIONS.NOT_ALLOWED_ERROR]: ModalCameraBlocked,
  [USER_MEDIA_EXCEPTIONS.NOT_FOUND_ERROR]: args => <ModalUploadPhoto {...args} />,
}

export const MODAL_ALLOW_CAMERA_ARGS = {
  [MODAL_ALLOW_CAMERA_TYPES.STARTING]: {
    TITLE: t('lib:profilePicture.cameraStarting'),
    SUBTITLE: t('lib:profilePicture.pleaseWaitCamera'),
    // ICON: (
    //   <Box sx={allowCameraStyles.loading}>
    //     <HapanaSparkLoading />
    //   </Box>
    // ),
  },
  [MODAL_ALLOW_CAMERA_TYPES.ALLOW]: {
    TITLE: t('lib:profilePicture.allowCamera'),
    SUBTITLE: t('lib:profilePicture.giveCameraAccess'),
    ICON: <Icon sx={allowCameraStyles.cameraIcon} component={cameraSlashIcon} />,
  },
  [MODAL_ALLOW_CAMERA_TYPES.NOT_ALLOWED]: {
    TITLE: t('lib:profilePicture.cameraIsBlocked'),
    SUBTITLE: t('lib:profilePicture.unlockCamera'),
    ICON: (
      <Box sx={allowCameraStyles.badgeWrapper}>
        <Badge
          isBadgeRounded
          anchorOrigin={BADGE_ANCHOR_ORIGIN.BOTTOM_RIGHT}
          badgeContent={<SvgIcon sx={allowCameraStyles.badge} component={timesCircleIcon} />}
        >
          <SvgIcon
            sx={allowCameraStyles.cameraBlockedIcon}
            viewBox="0 0 46 26"
            component={cameraVideoIcon}
          />
        </Badge>
      </Box>
    ),
  },
}

export const badgeSuccess = <SvgIcon sx={uploadSuccessStyles.badgeIcon} component={checkCircle} />

export const CLOSE_SUCCESSFUL_DIALOG_TIMEOUT = 2 * 1000
