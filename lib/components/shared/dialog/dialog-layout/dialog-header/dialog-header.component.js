import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import CloseIcon from '@mui/icons-material/Close'
import { Box, SvgIcon, Typography } from '@mui/material'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

import PenIcon from '_assets/svgs/pen-small.svg'
import { AVATAR_SIZE } from '_components/shared/avatar/avatar.constants'
import SingleAvatarComponent from '_components/shared/avatar/single-avatar.component'
import Button from '_components/shared/button/button.component'
import { BUTTON_SIZE, BUTTON_VARIANTS } from '_components/shared/button/button.constants'
import { useDialog } from '_components/shared/dialog/dialog.hooks'

import { CLOSE_TYPES } from '../dialog-layout.constants'

import { PROP_TYPES } from './dialog-header.constants'
import { styles } from './dialog-header.styles'

const DialogHeader = ({
  onEdit,
  closeType,
  titleIcon,
  avatarSrc,
  title,
  hasBackLabel,
  customBackLabel,
  onCustomBackClick,
  headerStylesOverride,
  closeAction,
}) => {
  const { popDialog, closeDialog, dialogStack } = useDialog()
  const { t } = useTranslation(['common'])

  const previousModalTitle = dialogStack[dialogStack.length - 2]?.props.title || t('common:back')
  const renderClose = () => {
    switch (closeType) {
      case CLOSE_TYPES.ICON:
        return (
          <Box sx={styles.closeAndEdit}>
            {onEdit && (
              <Box sx={styles.editIcon}>
                <Button
                  size={BUTTON_SIZE.MEDIUM}
                  variant={BUTTON_VARIANTS.ICON}
                  onClick={onEdit}
                  icon={PenIcon}
                  type="button"
                />
              </Box>
            )}
            <Button
              size={BUTTON_SIZE.MEDIUM}
              variant={BUTTON_VARIANTS.ICON}
              onClick={closeAction || closeDialog}
              icon={CloseIcon}
              type="button"
            />
          </Box>
        )
      case CLOSE_TYPES.TEXT:
        return (
          <Box sx={styles.cancel}>
            <Button
              textPadding={false}
              label={t('cancel')}
              size={BUTTON_SIZE.LARGE}
              variant={BUTTON_VARIANTS.TEXT}
              onClick={closeAction || closeDialog}
              type="button"
            />
          </Box>
        )
      default:
        return null
    }
  }

  return (
    <Box sx={[styles.container, hasBackLabel && styles.containerWithIcon, headerStylesOverride]}>
      <Box sx={styles.navigation}>
        {hasBackLabel ? (
          <Box>
            <Button
              variant={BUTTON_VARIANTS.TEXT}
              onClick={customBackLabel ? onCustomBackClick : popDialog}
              startIcon={ChevronLeftIcon}
              label={customBackLabel ? customBackLabel : previousModalTitle}
              textPadding={false}
              sx={styles.backButton}
              type="button"
            />
          </Box>
        ) : (
          <>
            {titleIcon && <SvgIcon component={titleIcon} sx={styles.titleIcon} />}
            {avatarSrc && (
              <Box sx={styles.titleAvatar}>
                <SingleAvatarComponent src={avatarSrc} size={AVATAR_SIZE.SMALL} />
              </Box>
            )}
            {title && (
              <Typography typography="header3" color="gray.80">
                {title}
              </Typography>
            )}
          </>
        )}
      </Box>
      {renderClose()}
    </Box>
  )
}

DialogHeader.propTypes = PROP_TYPES

export default DialogHeader
