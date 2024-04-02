import { useEffect, useRef, useState } from 'react'

export const useUserMedia = ({ constraints, onError }) => {
  const ref = useRef(null)
  const [isStreamEnabled, setIsStreamEnabled] = useState(false)
  const mediaStream = ref?.current?.srcObject
  const [mediaStreamState, setMediaStreamState] = useState(null)
  useEffect(() => {
    const startStream = () => {
      navigator?.mediaDevices
        ?.getUserMedia(constraints)
        .then(stream => {
          setIsStreamEnabled(true)
          ref.current.srcObject = stream
          setMediaStreamState(stream)
        })
        .catch(err => {
          onError(err)
        })
    }

    if (!mediaStream) {
      startStream()
    } else {
      return () => {
        mediaStream?.getTracks().forEach(track => {
          track.stop()
        })
      }
    }
    return () => {
      mediaStreamState?.getTracks().forEach(track => {
        track.stop()
      })
    }
  }, [constraints, mediaStream, onError, mediaStreamState])

  return { isStreamEnabled, ref }
}
