import DotDivider from '@mui/icons-material/FiberManualRecord'
import { Alert, Box, CircularProgress, Grid, Typography, useMediaQuery } from '@mui/material'
import { PropTypes } from 'prop-types'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'

import Button from '_components/shared/button/button.component'
import { BUTTON_VARIANTS } from '_components/shared/button/button.constants'

import Skeleton from '../skeleton/skeleton.component'
import { SKELETON_VARIANTS } from '../skeleton/skeleton.constants'

import {
  FAILED_PAYMENT_REASONS,
  FAILED_REASONS_INCLUDED,
  ICONS,
  SEVERITY,
  SIZE,
} from './banner-alert.constants'
import { handleStylesWithProps, styles } from './banner-alert.styles'

const BannerAlert = ({
  severity,
  primaryAction,
  message,
  description,
  extraInfo,
  size,
  hasBackground,
  themedMessage,
  rounded,
  failReason,
  hasFailReasonDivider,
  isLoading,
  descriptionHasDotDivider,
  isMessageBold,
  colorScheme,
  messageContainerStyles,
  sx,
  additionalMessage,
}) => {
  const theme = useTheme()
  const { t } = useTranslation(['common'])
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isSmall = size === SIZE.SMALL
  const stylesWithProps = useMemo(() => handleStylesWithProps({ hasBackground }), [hasBackground])

  const isFailReasonIncluded = FAILED_REASONS_INCLUDED.includes(failReason)
  const isInfo = severity === SEVERITY.INFO

  return (
    <Alert
      severity={severity}
      component={Grid}
      wrap={isSmall ? 'nowrap' : 'wrap'}
      container
      direction="row"
      sx={[
        !isLoading && styles.alert,
        hasBackground && styles[`${severity}Background${colorScheme}`],
        !isLoading && hasBackground && styles[`${size}BannerAlert`],
        rounded && styles.rounded,
        styles[`${severity}Color${colorScheme}`],
        isLoading && styles.loading,
        hasBackground && isLoading && styles.loadingBackground,
        sx,
      ]}
      icon={false}
      action={
        primaryAction && (
          <Button
            label={primaryAction.label || t('common:dismiss')}
            onClick={primaryAction.action}
            variant={BUTTON_VARIANTS.TEXT}
            textPadding={false}
          />
        )
      }
    >
      <Box sx={[styles.message, stylesWithProps.message]}>
        <Box sx={[styles.messageSubContainer, messageContainerStyles]}>
          {isLoading ? (
            <Box sx={styles.flexRowCentered}>
              <CircularProgress size={16} sx={styles.circularProgress} thickness={6} />
              <Skeleton
                sx={styles.rectangularSkeleton}
                variant={SKELETON_VARIANTS.rectangular}
                isRounded
              />
            </Box>
          ) : (
            ICONS[`${severity}${colorScheme}`][size]
          )}
          {!isLoading ? (
            <Typography
              sx={[
                styles.mainMessage,
                styles[`${size}Typography`],
                isMessageBold && styles.weightBold,
                isInfo && styles.infoMessage,
                themedMessage && styles[`${severity}Color${colorScheme}`],
              ]}
            >
              {message}
            </Typography>
          ) : null}
          {description && !isLoading ? (
            <>
              {descriptionHasDotDivider && (
                <DotDivider
                  sx={[
                    styles.dotDivider,
                    themedMessage && styles[`${severity}Color${colorScheme}`],
                  ]}
                />
              )}
              <Typography
                sx={[
                  styles.description,
                  styles[`${size}Typography`],
                  themedMessage && styles[`${severity}Color${colorScheme}`],
                  isSmall && styles.weightBold,
                ]}
              >
                {description}
              </Typography>
            </>
          ) : null}
          {failReason && isFailReasonIncluded ? (
            <>
              {(hasFailReasonDivider || !isMobile) && (
                <DotDivider
                  sx={[
                    styles.dotDivider,
                    themedMessage && styles[`${severity}Color${colorScheme}`],
                  ]}
                />
              )}
              <Typography
                sx={[
                  styles[`${size}Typography`],
                  themedMessage && styles[`${severity}Color${colorScheme}`],
                ]}
              >
                {t(`checkIn:${FAILED_PAYMENT_REASONS[failReason].i18Key}`)}
              </Typography>
            </>
          ) : null}
        </Box>
        {extraInfo && !isLoading ? (
          <Box sx={styles.extraInfoContainer}>
            {(!isMobile || hasBackground) && (
              <DotDivider
                sx={[
                  styles.dotDivider,
                  styles.standardCircle,
                  themedMessage && hasBackground && styles[`${severity}Color${colorScheme}`],
                ]}
              />
            )}
            <Typography
              sx={[
                styles.extraInfoText,
                stylesWithProps.extraInfoText,
                styles[`${size}Typography`],
                hasBackground && themedMessage && styles[`${severity}Color${colorScheme}`],
              ]}
            >
              {extraInfo}
            </Typography>
          </Box>
        ) : null}
      </Box>
      {additionalMessage && !isLoading ? (
        <Box ml={5} mt={3}>
          <Typography sx={styles[`${severity}AdditionalMessage`]}>{additionalMessage}</Typography>
        </Box>
      ) : null}
    </Alert>
  )
}

BannerAlert.propTypes = {
  severity: PropTypes.oneOf(Object.values(SEVERITY)),
  primaryAction: PropTypes.shape({
    label: PropTypes.string,
    action: PropTypes.func,
  }),
  message: PropTypes.string.isRequired,
  description: PropTypes.string,
  extraInfo: PropTypes.string,
  hasBackground: PropTypes.bool,
  themedMessage: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZE)),
  failReason: PropTypes.string,
  hasFailReasonDivider: PropTypes.bool,
  isLoading: PropTypes.bool,
  descriptionHasDotDivider: PropTypes.bool,
  isMessageBold: PropTypes.bool,
  colorScheme: PropTypes.string,
  messageContainerStyles: PropTypes.oneOf([PropTypes.object, PropTypes.array]),
  sx: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  additionalMessage: PropTypes.string,
}
BannerAlert.defaultProps = {
  severity: SEVERITY.SUCCESS,
  description: '',
  extraInfo: '',
  failReason: '',
  hasBackground: false,
  themedMessage: false,
  rounded: false,
  size: SIZE.MEDIUM,
  hasFailReasonDivider: false,
  isLoading: false,
  descriptionHasDotDivider: true,
  isMessageBold: true,
  colorScheme: '',
}
export default BannerAlert
