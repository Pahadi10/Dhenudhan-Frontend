import React from 'react'
import PropType from 'prop-types'
import { useCallback, useMemo, useState } from 'react'

import Toast from './toast.component'
import { ToastContext } from './toast.context'

const INITIAL_VALUES = {
  isOpen: false,
  title: '',
  severity: 'success',
}

export const ToastProvider = ({ children, ...props }) => {
  const [state, setState] = useState(INITIAL_VALUES)

  const [{ isOpen, severity, title, description, horizontal }] = useMemo(
    () => [state, setState],
    [state],
  )

  const openToast = useCallback(
    ({ severity, title, description, horizontal }) => {
      setState({ severity, title, description, horizontal, isOpen: true })
    },
    [setState],
  )

  const closeToast = useCallback(() => {
    // Setting everything when closing to avoid a intermediate state (before it closes)
    // that shows a different toast
    return setState({ severity, title, description, horizontal, isOpen: false })
  }, [severity, title, description, horizontal, setState])

  return (
    <ToastContext.Provider value={{ openToast, closeToast }}>
      {children}
      <Toast
        isOpen={isOpen}
        severity={severity}
        title={title}
        description={description}
        closeToast={closeToast}
        {...props}
      />
    </ToastContext.Provider>
  )
}

export default ToastProvider

ToastProvider.propTypes = {
  children: PropType.node,
}
