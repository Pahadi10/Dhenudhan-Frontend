import { useState, useCallback, useLayoutEffect } from 'react'

export const useResizeObserver = (ref, { onResize }) => {
  const [size, setSize] = useState([0, 0])
  const handleResize = useCallback(
    entries => {
      if (!Array.isArray(entries)) {
        return
      }
      const [entry] = entries
      setSize([entry.contentRect.width, entry.contentRect.height])
      onResize?.()
    },
    [onResize],
  )

  useLayoutEffect(() => {
    if (!ref.current) {
      return
    }

    const resizeObserver = new ResizeObserver(entries => handleResize(entries))
    resizeObserver.observe(ref.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [handleResize, ref])

  return { size }
}
