export const uploadImage = async (presignedUrlResponse, responseKey, croppedImage) => {
  if (!croppedImage || !presignedUrlResponse) {
    return
  }
  if (presignedUrlResponse?.[responseKey]) {
    try {
      await fetch(croppedImage)
        .then(response => response.blob())
        .then(async blob => {
          await fetch(presignedUrlResponse?.[responseKey], {
            method: 'PUT',
            body: blob,
          })
            .then(uploadImageResponse => {
              return uploadImageResponse
            })
            .catch(error => {
              throw error
            })
        })
        .catch(error => {
          throw error
        })
    } catch (error) {
      return error
    }
  } else {
    return
  }
}
