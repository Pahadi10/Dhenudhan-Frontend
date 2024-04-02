import { useState, useCallback } from 'react'

export const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue)

  const handleToggle = useCallback(value => {
    setToggle(prev => (typeof value === 'boolean' ? value : !prev))
  }, [])

  return [toggle, handleToggle]
}
