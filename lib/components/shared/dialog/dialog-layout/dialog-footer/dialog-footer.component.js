import { Box, DialogActions, Typography } from '@mui/material'
import * as React from 'react'

import ExternalURLIcon from '_assets/svgs/external-link.svg'
import Button from '_components/shared/button/button.component'
import {
  BUTTON_SIZE,
  BUTTON_THEME,
  BUTTON_VARIANTS,
} from '_components/shared/button/button.constants'

import { PROP_TYPES } from './dialog-footer.constants'
import { styles } from './dialog-footer.styles'

const DialogFooter = ({
  externalURL,
  primaryAction,
  tertiaryAction,
  secondaryAction,
  customFooterContent,
}) => {
  return (
    <DialogActions sx={styles.container}>
      {(externalURL || tertiaryAction || customFooterContent) && (
        <Box sx={styles.externalURLAndTertiaryAction}>
          {externalURL && (
            <>
              <Box sx={styles.externalURL}>
                <Button
                  size={BUTTON_SIZE.MEDIUM}
                  variant={BUTTON_VARIANTS.ICON}
                  onClick={() => window.open(externalURL, '_blank')}
                  icon={ExternalURLIcon}
                  type="button"
                />
              </Box>

              <Box sx={styles.divider}></Box>
            </>
          )}
          {tertiaryAction && (
            <Box sx={styles.tertiaryAction}>
              <Button
                size={BUTTON_SIZE.MEDIUM}
                variant={BUTTON_VARIANTS.TEXT}
                onClick={tertiaryAction.action}
                startIcon={tertiaryAction.icon}
                label={tertiaryAction.label}
                type="button"
              />
            </Box>
          )}
          {customFooterContent && (
            <Box sx={styles.customFooterContent}>
              <Typography typography="medium" color="gray.64">
                {customFooterContent}
              </Typography>
            </Box>
          )}
        </Box>
      )}
      <Box sx={styles.actions}>
        {secondaryAction && (
          <Box sx={styles.secondaryActionContainer}>
            <Button
              label={secondaryAction.label}
              size={BUTTON_SIZE.LARGE}
              variant={BUTTON_VARIANTS.OUTLINED}
              theme={BUTTON_THEME.GRAY}
              {...(secondaryAction.icon && { startIcon: secondaryAction.icon })}
              onClick={secondaryAction.action}
              type="button"
              sx={styles.secondaryAction}
              {...secondaryAction.props}
            />
          </Box>
        )}
        {primaryAction && (
          <Box sx={[styles.primaryActionContainer]} {...primaryAction.containerProps}>
            <Button
              label={primaryAction.label}
              size={BUTTON_SIZE.LARGE}
              variant={BUTTON_VARIANTS.CONTAINED}
              theme={BUTTON_THEME.PRIMARY}
              sx={styles.primaryAction}
              {...(primaryAction.action && {
                onClick: primaryAction.action,
              })}
              {...primaryAction.props}
            />
          </Box>
        )}
      </Box>
    </DialogActions>
  )
}

DialogFooter.propTypes = PROP_TYPES

export default DialogFooter
