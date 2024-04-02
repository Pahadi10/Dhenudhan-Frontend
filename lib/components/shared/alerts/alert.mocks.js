import { ALERT_ICON_COLOR, ALERT_TYPES } from './alert.constant'

export const MOCK_TAB_CONTENT = {
  Payment: [
    {
      label: 'General',
      value: '1',
      content: 'Payment General content',
    },
    {
      label: 'Payments',
      value: '2',
      content: 'Payment content',
    },
  ],
  'Home Location': [
    {
      label: 'General',
      value: '3',
      content: 'Home General content',
    },
    {
      label: 'Home',
      value: '4',
      content: 'Home Content',
    },
  ],
}
export const MOCK_ALERT_ICONS = [
  {
    icon: ALERT_TYPES.PAYMENT.icon,
    className: 'paymentAlert',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    title: 'Payment',
    date: 'Aug 17, 2021',
    id: 1,
    color: ALERT_ICON_COLOR.WARNING,
  },
  {
    icon: ALERT_TYPES.FORM.icon,
    className: 'formAlert',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, ',
    id: 2,
    title: 'Alert name',
    date: 'Aug 17, 2021',
    color: ALERT_ICON_COLOR.TURQUOISE,
  },
  {
    icon: ALERT_TYPES.NOTE.icon,
    className: 'noteAlert',
    content: 'sunt in culpa qui officia deserunt mollit anim id est laborum',
    title: 'Note',
    id: 3,
    color: ALERT_ICON_COLOR.SECONDARY,
  },
  {
    icon: ALERT_TYPES.HOME.icon,
    className: 'homeAlert',
    title: 'Home Location',
    content: 'My home location ',
    color: ALERT_ICON_COLOR.SECONDARY,
    id: 4,
  },
  {
    icon: ALERT_TYPES.BIRTHDAY.icon,
    className: 'birthdayAlert',
    title: 'Birthday',
    color: ALERT_ICON_COLOR.SECONDARY,
    id: 5,
  },
  {
    icon: ALERT_TYPES.PACKAGE.icon,
    className: 'packageAlert',
    color: ALERT_ICON_COLOR.INFO,
    id: 6,
  },
  {
    icon: ALERT_TYPES.FIRST_SESSION.icon,
    className: 'firstSessionAlert',
    color: ALERT_ICON_COLOR.INFO,
    id: 7,
  },
  {
    icon: ALERT_TYPES.INTRO_OFFER.icon,
    className: 'introOfferAlert',
    color: ALERT_ICON_COLOR.INFO,
    id: 8,
  },
  {
    icon: ALERT_TYPES.SUSPENDED_CLIENT.icon,
    className: 'suspendedClient',
    color: ALERT_ICON_COLOR.WARNING,
    id: 9,
  },
]
