import '_utils/type-defs.util'
import { FILE_FORMATS } from '_constants/files.constants'

/**
 * Capture a frame of a video element and draw the frame size area on a canvas element.
 * @func
 * @param  {MutableRefObject} mediaRef A ref object whose `.current` property
 * is an {@link HTMLVideoElement} from which the frame will be taken.
 * @param  {VideoElementOffsets} offsets The dimensions of the video element
 * @param  {FrameSizePosition} frameSize The inset offset of the frame size area.
 * @param  {MutableRefObject} canvasCropper A ref object whose `.current`
 * property is an {@link HTMLCanvasElement} to draw the frame cropped on.
 * @param  {number} quality A Number between 0 and 1 indicating the image quality
 * @param  {captureCallback} callback A function that will receive the URL of the cropped image.
 * @return {void}
 */

export const capturePhoto = (mediaRef, offsets, frameSize, canvasCropper, quality, callback) => {
  mediaRef.current.pause()
  const croppedArea = getCropperCoordinates(offsets, frameSize)
  const canvasCropperContext = canvasCropper.current.getContext('2d')
  canvasCropperContext.drawImage(mediaRef.current, ...croppedArea)
  canvasCropperContext.canvas.toBlob(
    blob => callback(URL.createObjectURL(blob)),
    FILE_FORMATS.JPG,
    quality,
  )
}

export const drawFrame = (canvas, frameSize, width, height) => {
  if (!canvas.current) return
  const { LEFT, TOP, RIGHT, BOTTOM } = frameSize

  const ctx = canvas?.current?.getContext('2d')

  canvas.current.width = width
  canvas.current.height = height

  ctx.globalAlpha = 0.6
  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, width, height)

  ctx.clearRect(LEFT, TOP, width - (RIGHT + LEFT), height - (BOTTOM + TOP))

  ctx.beginPath()
  ctx.setLineDash([6])
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 2
  ctx.lineCap = 'round'

  ctx.globalAlpha = 1
  ctx.strokeRect(frameSize.LEFT, frameSize.TOP, width - (RIGHT + LEFT), height - (BOTTOM + TOP))
}
export const getCropperSize = (offsets, frameSize) => {
  const [offsetWidth = 0, offsetHeight = 0] = offsets
  const { LEFT, TOP, RIGHT, BOTTOM } = frameSize

  return {
    width: offsetWidth - (RIGHT + LEFT),
    height: offsetHeight - (BOTTOM + TOP),
  }
}

/** @param {Offsets} offsets */

export const getCropperCoordinates = (offsets, frameSize) => {
  const { videoWidth, videoHeight, offsetWidth, offsetHeight } = offsets
  const { LEFT, TOP, RIGHT, BOTTOM } = frameSize

  const ratioX = videoWidth / offsetWidth
  const ratioY = videoHeight / offsetHeight
  const ratio = Math.min(ratioX, ratioY)
  const maxVideoWidth = Math.round(offsetWidth * ratio)
  const maxVideoHeight = Math.round(offsetHeight * ratio)
  const hiddenXArea = videoWidth - maxVideoWidth
  const hiddenYArea = videoHeight - maxVideoHeight

  const sourceStartX = hiddenXArea / 2
  const sourceStartY = hiddenYArea / 2

  const sourceFrameArea = {
    top: Math.round(TOP * ratio),
    bottom: Math.round(BOTTOM * ratio),
    left: Math.round(LEFT * ratio),
    right: Math.round(RIGHT * ratio),
  }

  const sourceStartCroppedX = sourceStartX + sourceFrameArea.left
  const sourceStartCroppedY = sourceStartY + sourceFrameArea.top
  const sourceFinishCroppedX = maxVideoWidth - (sourceFrameArea.right + sourceFrameArea.left)
  const sourceFinishCroppedY = maxVideoHeight - (sourceFrameArea.bottom + sourceFrameArea.top)

  const destinyStartCroppedX = 0
  const destinyStartCroppedY = 0
  const destinyFinishCroppedX = offsetWidth - (RIGHT + LEFT)
  const destinyFinishCroppedY = offsetHeight - (BOTTOM + TOP)

  return [
    sourceStartCroppedX,
    sourceStartCroppedY,
    sourceFinishCroppedX,
    sourceFinishCroppedY,
    destinyStartCroppedX,
    destinyStartCroppedY,
    destinyFinishCroppedX,
    destinyFinishCroppedY,
  ]
}

export const filterAllowedFileFormats = allowedFormats =>
  Object.keys(FILE_FORMATS).filter(key => allowedFormats.includes(FILE_FORMATS[key]))
