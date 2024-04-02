import { SvgIcon } from '@mui/material'

import CheckCircleSmall from '_assets/svgs/check-circle-small.svg'
import ExclamationTriangleSmall from '_assets/svgs/exclamation-triangle-small.svg'
import ExclamationCircleSmall from '_assets/svgs/exclamation-circle-small.svg'

import { styles } from './banner-alert.styles'

export const SEVERITY = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS_SECONDARY: 'successSecondary',
  ERROR_SECONDARY: 'errorSecondary',
  WARNING_SECONDARY: 'warningSecondary',
}

export const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
}

export const ICONS = {
  [SEVERITY.SUCCESS]: {
    [SIZE.MEDIUM]: (
      <SvgIcon
        component={CheckCircleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.SUCCESS], ...styles.svgIconSize[SIZE.MEDIUM] }}
      />
    ),
    [SIZE.SMALL]: (
      <SvgIcon
        component={CheckCircleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.SUCCESS], ...styles.svgIconSize[SIZE.SMALL] }}
      />
    ),
  },
  [SEVERITY.SUCCESS_SECONDARY]: {
    [SIZE.MEDIUM]: (
      <SvgIcon
        component={CheckCircleSmall}
        sx={{
          ...styles.svgIconColor[SEVERITY.SUCCESS_SECONDARY],
          ...styles.svgIconSize[SIZE.MEDIUM],
        }}
      />
    ),
    [SIZE.SMALL]: (
      <SvgIcon
        component={CheckCircleSmall}
        sx={{
          ...styles.svgIconColor[SEVERITY.SUCCESS_SECONDARY],
          ...styles.svgIconSize[SIZE.SMALL],
        }}
      />
    ),
  },
  [SEVERITY.WARNING]: {
    [SIZE.MEDIUM]: (
      <SvgIcon
        component={ExclamationTriangleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.WARNING], ...styles.svgIconSize[SIZE.MEDIUM] }}
      />
    ),
    [SIZE.SMALL]: (
      <SvgIcon
        component={ExclamationTriangleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.WARNING], ...styles.svgIconSize[SIZE.SMALL] }}
      />
    ),
  },
  [SEVERITY.WARNING_SECONDARY]: {
    [SIZE.MEDIUM]: (
      <SvgIcon
        component={ExclamationTriangleSmall}
        sx={{
          ...styles.svgIconColor[SEVERITY.WARNING_SECONDARY],
          ...styles.svgIconSize[SIZE.MEDIUM],
        }}
      />
    ),
    [SIZE.SMALL]: (
      <SvgIcon
        component={ExclamationTriangleSmall}
        sx={{
          ...styles.svgIconColor[SEVERITY.WARNING_SECONDARY],
          ...styles.svgIconSize[SIZE.SMALL],
        }}
      />
    ),
  },
  [SEVERITY.ERROR]: {
    [SIZE.MEDIUM]: (
      <SvgIcon
        component={ExclamationCircleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.ERROR], ...styles.svgIconSize[SIZE.MEDIUM] }}
      />
    ),
    [SIZE.SMALL]: (
      <SvgIcon
        component={ExclamationCircleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.ERROR], ...styles.svgIconSize[SIZE.SMALL] }}
      />
    ),
  },
  [SEVERITY.ERROR_SECONDARY]: {
    [SIZE.MEDIUM]: (
      <SvgIcon
        component={ExclamationCircleSmall}
        sx={{
          ...styles.svgIconColor[SEVERITY.ERROR_SECONDARY],
          ...styles.svgIconSize[SIZE.MEDIUM],
        }}
      />
    ),
    [SIZE.SMALL]: (
      <SvgIcon
        component={ExclamationCircleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.ERROR_SECONDARY], ...styles.svgIconSize[SIZE.SMALL] }}
      />
    ),
  },
  [SEVERITY.INFO]: {
    [SIZE.MEDIUM]: (
      <SvgIcon
        component={ExclamationCircleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.INFO], ...styles.svgIconSize[SIZE.MEDIUM] }}
      />
    ),
    [SIZE.SMALL]: (
      <SvgIcon
        component={ExclamationCircleSmall}
        sx={{ ...styles.svgIconColor[SEVERITY.INFO], ...styles.svgIconSize[SIZE.SMALL] }}
      />
    ),
  },
}

export const FAILED_PAYMENT_REASONS = {
  FAILED_PAYMENTS: {
    key: 'FAILED_PAYMENTS',
    i18Key: 'failedPayment',
  },
  OUTSTANDING_PAYMENTS: {
    key: 'OUTSTANDING_PAYMENTS',
    i18Key: 'outstandingPayment',
  },
  NO_VALID_MEMBERSHIP_OR_BOOKING: {
    key: 'NO_VALID_MEMBERSHIP_OR_BOOKING',
    i18Key: 'noValidMembershipOrBooking',
  },
  NO_VALID_MEMBERSHIP_OR_BOOKING_AND_NO_CLIENT_RECORD: {
    key: 'NO_VALID_MEMBERSHIP_OR_BOOKING_AND_NO_CLIENT_RECORD',
    i18Key: 'noValidMembershipOrBooking',
  },
  SUSPENDED: {
    key: 'SUSPENDED',
    i18Key: 'suspendedMembership',
  },
  // NO_ACTIVE_PACKAGE has the same message as NO_VALID_MEMBERSHIP_OR_BOOKING
  NO_ACTIVE_PACKAGE: {
    key: 'NO_ACTIVE_PACKAGE',
    i18Key: 'noValidMembershipOrBooking',
  },
  MEMBERSHIP_ON_HOLD: {
    key: 'MEMBERSHIP_ON_HOLD',
    i18Key: 'membershipOnHold',
  },
}

export const FAILED_REASONS_INCLUDED = [
  FAILED_PAYMENT_REASONS.NO_VALID_MEMBERSHIP_OR_BOOKING.key,
  FAILED_PAYMENT_REASONS.NO_VALID_MEMBERSHIP_OR_BOOKING_AND_NO_CLIENT_RECORD.key,
  FAILED_PAYMENT_REASONS.SUSPENDED.key,
  FAILED_PAYMENT_REASONS.NO_ACTIVE_PACKAGE.key,
  FAILED_PAYMENT_REASONS.MEMBERSHIP_ON_HOLD.key,
]
