import { useEffect, useState } from 'react'

export const useIsCameraEnabled = () => {
  const [isCameraEnabled, setIsCameraEnabled] = useState(false)

  useEffect(() => {
    navigator?.mediaDevices
      ?.enumerateDevices()
      .then(devices => {
        setIsCameraEnabled(
          devices.some(device => {
            return device.kind === 'videoinput' && device.deviceId && device.label
          }),
        )
      })
      .catch(err => {
        throw new Error(err)
      })
  }, [])

  return isCameraEnabled
}
