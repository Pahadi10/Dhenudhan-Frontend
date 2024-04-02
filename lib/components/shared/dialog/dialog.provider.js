import React from 'react'
import { Dialog } from '@mui/material'
import PropTypes from 'prop-types'
import { useCallback, useMemo, useState, isValidElement } from 'react'

import { styles, handleStylesWithProps } from './dialog-layout/dialog-layout.styles'
import { DialogContext } from './dialog.context'

const INITIAL_STATE = {
  dialogState: {},
  dialogStack: [],
}

export const DialogProvider = ({ children, component, open, ...props }) => {
  const [state, setState] = useState(INITIAL_STATE)

  const { dialogState, dialogStack } = state

  const dialogToBeRendered = dialogStack?.[dialogStack?.length - 1]

  const dialogProps = {
    ...dialogToBeRendered?.props,
    ...props,
  }

  const DialogComponent = dialogToBeRendered?.component || component

  const renderDialogComponent = () => {
    if (DialogComponent) {
      return isValidElement(DialogComponent) ? (
        DialogComponent
      ) : (
        <DialogComponent {...dialogProps} />
      )
    }
    return null
  }

  const stylesWithProps = handleStylesWithProps({
    size: dialogState?.size,
    hasMobileBottomSheet: dialogState?.hasMobileBottomSheet,
  })

  const closeDialog = useCallback(() => {
    setState({
      dialogState: { open: false },
      dialogStack: [],
    })
  }, [setState])

  const value = useMemo(() => {
    return [state, setState, closeDialog]
  }, [state, closeDialog, setState])

  return (
    <DialogContext.Provider value={value}>
      {children}
      <Dialog
        // The disableRestoreFocus prop might cause accessibility issues and
        // should be reviewed in the future
        disableRestoreFocus={true}
        open={dialogState?.open || open}
        onClose={dialogState?.closeDialog || closeDialog}
        PaperProps={{
          sx: {
            ...styles.paper,
            ...stylesWithProps.paper,
            ...dialogState?.stylesOverride,
          },
        }}
      >
        {renderDialogComponent()}
      </Dialog>
    </DialogContext.Provider>
  )
}

DialogProvider.propTypes = {
  children: PropTypes.node,
  component: PropTypes.node,
  open: PropTypes.bool,
}
DialogProvider.defaultProps = {
  open: false,
}
