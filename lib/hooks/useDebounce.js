import { useEffect, useState } from 'react'

export const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    // }
    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      if (handler) {
        clearTimeout(handler)
      }
    }
  }, [value, delay])

  return debouncedValue
}
