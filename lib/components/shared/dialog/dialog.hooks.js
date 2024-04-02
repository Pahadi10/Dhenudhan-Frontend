import { useCallback, useContext } from 'react'

import { DialogContext } from './dialog.context'
const useDialogContext = () => {
  const dialogContextValue = useContext(DialogContext)

  if (!dialogContextValue) {
    throw new Error('useDialog must be used inside a DialogProvider.')
  }

  return dialogContextValue
}

export const useDialog = () => {
  const dialogContextValue = useDialogContext()

  const [{ dialogState, dialogStack }, setState, closeDialog] = dialogContextValue

  const pushDialog = useCallback(
    (newDialog, newDialogProps = {}, newDialogState = {}) => {
      setState(previousState => ({
        dialogState: { ...previousState.dialogState, ...newDialogState, open: true },
        dialogStack: [
          ...previousState.dialogStack,
          { component: newDialog, props: newDialogProps },
        ],
      }))
    },
    [setState],
  )

  const popDialog = useCallback(
    (newProps = {}, newDialogState = {}) => {
      setState(previousState => {
        const previousDialog = previousState.dialogStack[previousState.dialogStack.length - 2]
        const previousDialogWithNewProps = {
          ...previousDialog,
          props: { ...previousDialog?.props, ...newProps },
        }
        const newDialogStack = previousDialog
          ? [...previousState.dialogStack.slice(0, -2), previousDialogWithNewProps]
          : []
        return {
          dialogState: {
            ...previousState.dialogState,
            ...newDialogState,
            open: newDialogStack?.length > 0,
          },
          dialogStack: newDialogStack,
        }
      })
    },
    [setState],
  )

  const filterDialogStack = useCallback(
    (propKey, value) => {
      setState(previousState => {
        const newDialogStack = previousState.dialogStack.filter(
          dialog => !!dialog.props?.[propKey] && dialog.props[propKey] === value,
        )
        return {
          dialogState: {
            ...previousState.dialogState,
            open: newDialogStack?.length > 0,
          },
          dialogStack: newDialogStack,
        }
      })
    },
    [setState],
  )

  const setDialogState = useCallback(
    (newGlobalState = {}) => {
      setState(({ dialogState, dialogStack }) => ({
        dialogState: { ...dialogState, ...newGlobalState },
        dialogStack,
      }))
    },
    [setState],
  )

  return {
    popDialog,
    pushDialog,
    setDialogState,
    filterDialogStack,
    dialogState,
    closeDialog,
    dialogStack,
  }
}
