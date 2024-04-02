import PropTypes from 'prop-types'
import { DialogContent, Typography } from '@mui/material'

import { allowCameraStyles } from './modal-upload-photo.styles'
import { MODAL_ALLOW_CAMERA_ARGS } from './modal-upload-photo.constants'

const ModalAllowCamera = ({ allowType, children }) => (
  <DialogContent sx={allowCameraStyles.dialogContent}>
    {MODAL_ALLOW_CAMERA_ARGS[allowType].ICON}
    <Typography typography="header1" color="gray.80">
      {MODAL_ALLOW_CAMERA_ARGS[allowType].TITLE}
    </Typography>
    <Typography typography="large" color="gray.56" sx={allowCameraStyles.subtitleAllowCam}>
      {MODAL_ALLOW_CAMERA_ARGS[allowType].SUBTITLE}
    </Typography>
    {children}
  </DialogContent>
)

ModalAllowCamera.propTypes = {
  allowType: PropTypes.string,
  children: PropTypes.node,
}
ModalAllowCamera.defaultProps = {
  children: null,
}

export default ModalAllowCamera
