import { useCallback, useEffect, useRef, useState } from 'react'

export const useCounterInterval = (delay, initialCounter, endCounter) => {
  const [counter, setCounter] = useState(initialCounter)
  const [hasStarted, setHasStarted] = useState(false)

  const hasFinished = counter > endCounter
  const isCounting = hasStarted && !hasFinished

  const start = useCallback(() => {
    setHasStarted(true)
  }, [])

  const callback = useCallback(() => {
    if (hasStarted) {
      setCounter(prev => {
        return prev + 1
      })
    }
  }, [hasStarted])

  useInterval(callback, delay)

  return {
    counter,
    setCounter,
    hasStarted,
    hasFinished,
    isCounting,
    start,
  }
}
export const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}
