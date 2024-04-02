import React, { useState, forwardRef } from 'react'
import { Box } from '@mui/material'
import Cropper from 'react-easy-crop'
import PropTypes from 'prop-types'

import { styles } from './crop-image.styles'
import getCroppedImg from './easy-crop-image.component'

const CropImageInput = forwardRef(
  ({ image, cropperWrapperStyles, cropperStyles, setCropper, isAvatar, isBannerImage }, ref) => {
    const cropperProps = {
      aspectRatio: isBannerImage ? 3 : 1,
      minCropBoxHeight: isBannerImage ? 72 : 60,
      minCropBoxWidth: isBannerImage ? 216 : 60,
    }
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(1)
    const [rotation, setRotation] = useState(0)

    const onCropComplete = (croppedArea, croppedAreaPixels) => {
      const aspectRatio = 3
      const Width = croppedAreaPixels.width

      const calculatedHeight = isBannerImage ? Math.ceil(Width / aspectRatio) : Width
      const calculatedWidth = isBannerImage ? 3 * calculatedHeight : calculatedHeight

      const adjustedCroppedAreaPixels = {
        width: calculatedWidth,
        height: calculatedHeight,
        x: croppedAreaPixels?.x,
        y: croppedAreaPixels?.y,
      }

      getCroppedImg(image, adjustedCroppedAreaPixels, rotation)
        .then(croppedImg => {
          setCropper(croppedImg)
        })
        .catch(error => {
          return error
        })
    }

    return (
      <Box
        sx={[
          styles.cropperWrapper,
          isAvatar && styles.avatarMask,
          ...(Array.isArray(cropperWrapperStyles) ? cropperWrapperStyles : [cropperWrapperStyles]),
        ]}
      >
        <Cropper
          ref={ref}
          style={{ ...styles.cropperContainer, ...cropperStyles }}
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={cropperProps.aspectRatio}
          onCropComplete={onCropComplete}
          onCropChange={e => {
            setCrop(e)
          }}
          onZoomChange={setZoom}
        />
      </Box>
    )
  },
)

CropImageInput.propTypes = {
  image: PropTypes.string.isRequired,
  cropperWrapperStyles: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.array]),
  cropperStyles: PropTypes.shape({}),
  setCropper: PropTypes.func,
  isAvatar: PropTypes.bool,
  isBannerImage: PropTypes.bool,
}
CropImageInput.defaultProps = {
  cropperWrapperStyles: {},
  isAvatar: false,
  isBannerImage: false,
}
export default CropImageInput
