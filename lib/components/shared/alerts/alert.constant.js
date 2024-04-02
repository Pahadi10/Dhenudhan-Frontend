import PaymentIcon from '_assets/svgs/bill-small.svg'
import PackageIcon from '_assets/svgs/package-small.svg'
import BirthdayIcon from '_assets/svgs/birthday-small.svg'
import NoteIcon from '_assets/svgs/note-small.svg'
import IntroOfferIcon from '_assets/svgs/percentage-small.svg'
import HomeIcon from '_assets/svgs/map-marker-alt-small.svg'
import FormIcon from '_assets/svgs/comment-info-small.svg'
import FirstSessionIcon from '_assets/svgs/bolt-small.svg'
import SingleUser from '_assets/svgs/user-small.svg'

export const ICON_SIZE = {
  SMALL: 'small',
  LARGE: 'large',
}

export const ALERT_ICON_COLOR = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
  TURQUOISE: 'custom.turquoise',
}

export const ALERT_TYPES = {
  PAYMENT: {
    icon: PaymentIcon,
    color: ALERT_ICON_COLOR.WARNING,
  },
  FORM: {
    icon: FormIcon,
    color: ALERT_ICON_COLOR.TURQUOISE,
  },
  NOTE: {
    icon: NoteIcon,
    color: ALERT_ICON_COLOR.SECONDARY,
  },
  HOME: {
    icon: HomeIcon,
    color: ALERT_ICON_COLOR.SECONDARY,
  },
  BIRTHDAY: {
    icon: BirthdayIcon,
    color: ALERT_ICON_COLOR.SECONDARY,
  },
  PACKAGE: {
    icon: PackageIcon,
    color: ALERT_ICON_COLOR.INFO,
    types: {
      PACKAGE: 'PACKAGE',
      MEMBERSHIP: 'MEMBERSHIP',
    },
  },
  FIRST_SESSION: {
    icon: FirstSessionIcon,
    color: ALERT_ICON_COLOR.INFO,
  },
  INTRO_OFFER: {
    icon: IntroOfferIcon,
    color: ALERT_ICON_COLOR.INFO,
  },
  SUSPENDED_CLIENT: {
    icon: SingleUser,
    color: ALERT_ICON_COLOR.WARNING,
  },
}
