import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { useDialog } from '../dialog.hooks'

import DialogFooter from './dialog-footer/dialog-footer.component'
import DialogHeader from './dialog-header/dialog-header.component'
import { CLOSE_TYPES, SIZES } from './dialog-layout.constants'

const DialogLayout = ({
  children,
  size,
  onEdit,
  closeType,
  avatarSrc,
  titleIcon,
  title,
  primaryAction,
  secondaryAction,
  tertiaryAction,
  customFooterContent,
  closeAction,
  externalURL,
  hasBackLabel,
  customBackLabel,
  onCustomBackClick,
  stylesOverride,
  headerStylesOverride,
  hasMobileBottomSheet,
}) => {
  const { setDialogState } = useDialog()

  useEffect(() => {
    setDialogState({
      size,
      stylesOverride,
      hasMobileBottomSheet,
    })
    // Disabling this line as stylesOverride is an object and is changed
    // when size changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDialogState, size, hasMobileBottomSheet])

  return (
    <>
      <DialogHeader
        onEdit={onEdit}
        onCustomBackClick={onCustomBackClick}
        closeType={closeType}
        avatarSrc={avatarSrc}
        titleIcon={titleIcon}
        title={title}
        hasBackLabel={hasBackLabel}
        customBackLabel={customBackLabel}
        headerStylesOverride={headerStylesOverride}
        closeAction={closeAction}
      />
      {children}
      {(primaryAction ||
        tertiaryAction ||
        externalURL ||
        secondaryAction ||
        customFooterContent) && (
        <DialogFooter
          primaryAction={primaryAction}
          tertiaryAction={tertiaryAction}
          externalURL={externalURL}
          secondaryAction={secondaryAction}
          customFooterContent={customFooterContent}
        />
      )}
    </>
  )
}

export default DialogLayout

DialogLayout.propTypes = {
  children: PropTypes.node,
  closeType: PropTypes.oneOf(Object.values(CLOSE_TYPES)).isRequired,
  size: PropTypes.oneOf(Object.values(SIZES)).isRequired,
  onEdit: PropTypes.func,
  primaryAction: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
    props: PropTypes.shape({}),
    containerProps: PropTypes.shape({}),
  }),
  secondaryAction: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
    props: PropTypes.shape({}),
  }),
  tertiaryAction: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
    icon: PropTypes.node,
  }),
  avatarSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  titleIcon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
    PropTypes.object,
  ]),
  title: PropTypes.string,
  externalURL: PropTypes.string,
  hasBackLabel: PropTypes.bool,
  hasMobileBottomSheet: PropTypes.bool,
  closeAction: PropTypes.func,
  customBackLabel: PropTypes.string,
  onCustomBackClick: PropTypes.func,
  customFooterContent: PropTypes.string,
  stylesOverride: PropTypes.shape({}),
  headerStylesOverride: PropTypes.shape({}),
}

DialogLayout.defaultProps = {
  children: null,
  closeType: CLOSE_TYPES.ICON,
  externalURL: '',
  hasBackLabel: false,
}
