import { useContext } from 'react'

import { ToastContext } from './toast.context'

export const useToast = () => {
  const contextValue = useContext(ToastContext)

  if (!contextValue) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  const { closeToast, openToast } = contextValue

  return { closeToast, openToast }
}
