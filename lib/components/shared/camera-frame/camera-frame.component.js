import { Box, CardMedia, Fade, Typography } from '@mui/material'
import { useEffect, useRef, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { capturePhoto, drawFrame, getCropperSize } from '_utils/camera.util'
import { useResizeObserver } from '_hooks/useResizeObserver.hooks'

import { styles } from './camera-frame.styles'

export const CameraFrame = ({
  mediaRef,
  hasFinished,
  hasStarted,
  capturePhotoCallback,
  frameSize,
  convertQuality,
}) => {
  const [offsets, setOffsets] = useState({})
  const canvasFrameRef = useRef()
  const canvasCropper = useRef()
  const { t } = useTranslation('common')

  const handleCanPlay = useCallback(() => {
    const { videoWidth, videoHeight, offsetWidth, offsetHeight } = mediaRef?.current

    setOffsets({ videoWidth, videoHeight, offsetWidth, offsetHeight })
    drawFrame(canvasFrameRef, frameSize, offsetWidth, offsetHeight)
  }, [frameSize, mediaRef])

  const { size: videoOffsets } = useResizeObserver(mediaRef, {
    onResize: handleCanPlay,
  })

  const cropperSize = getCropperSize(videoOffsets, frameSize)

  useEffect(() => {
    if (hasFinished) {
      capturePhoto(
        mediaRef,
        offsets,
        frameSize,
        canvasCropper,
        convertQuality,
        capturePhotoCallback,
      )
    }
  }, [
    hasFinished,
    frameSize,
    offsets,
    mediaRef,
    canvasCropper,
    capturePhotoCallback,
    convertQuality,
  ])

  return (
    <>
      <Fade in timeout={300}>
        <Box sx={[styles.overlayCamera]}>
          <CardMedia
            sx={styles.cameraMedia}
            ref={mediaRef}
            component="video"
            autoPlay
            onCanPlay={handleCanPlay}
            playsInline
            controls={false}
          />
          <Box component="canvas" sx={styles.canvas} ref={canvasFrameRef} />
        </Box>
      </Fade>
      <canvas
        ref={canvasCropper}
        style={styles.canvasCropper}
        width={cropperSize.width}
        height={cropperSize.height}
      />

      <Fade in={!hasStarted}>
        <Typography color="gray.0" sx={styles.videoInfo}>
          {t('common:clientPositionOnCamera')}
        </Typography>
      </Fade>
      <Fade in={hasFinished}>
        <Box sx={styles.flash}></Box>
      </Fade>
    </>
  )
}

export default CameraFrame

CameraFrame.propTypes = {
  mediaRef: PropTypes.object.isRequired,
  hasFinished: PropTypes.bool.isRequired,
  hasStarted: PropTypes.bool.isRequired,
  capturePhotoCallback: PropTypes.func.isRequired,
  frameSize: PropTypes.object.isRequired,
  convertQuality: PropTypes.number,
}

CameraFrame.defaultProps = {
  convertQuality: 1,
}
