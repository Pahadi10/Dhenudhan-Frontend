import { uploadImage } from '_services/upload.service'

export const imageToUrl = image => {
  if (typeof image === 'string') {
    return image
  }

  if (image instanceof File || image instanceof Blob) {
    return URL.createObjectURL(image)
  }

  if (image instanceof ImageBitmap || image instanceof Image) {
    return image.src
  }

  if (image instanceof ImageData) {
    return image.data.toString()
  }

  return image
}

export const getFileExtension = image => image?.name?.replace(/(.*)\./, '')?.toLowerCase()

export const uploadImageToS3 = async (presignedUrlResponse, croppedImage, responseKey, options) => {
  options?.setLoading?.(true)
  try {
    await uploadImage(presignedUrlResponse, responseKey, croppedImage)
    options?.onSuccess?.()
  } catch (error) {
    console.error(error)
    options?.onError?.()
  } finally {
    options?.setLoading?.(false)
  }
}
