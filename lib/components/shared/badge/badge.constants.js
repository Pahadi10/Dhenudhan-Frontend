export const BADGE_ANCHOR_ORIGIN = {
  TOP_LEFT: 'top-left',
  TOP_RIGHT: 'top-right',
  BOTTOM_LEFT: 'bottom-left',
  BOTTOM_RIGHT: 'bottom-right',
  TOP_CENTER: 'top-center',
  BOTTOM_CENTER: 'bottom-center',
  LEFT_CENTER: 'left-center',
  RIGHT_CENTER: 'right-center',
}

const MUI_BADGE_ANCHOR_ORIGIN = {
  [BADGE_ANCHOR_ORIGIN.TOP_LEFT]: { vertical: 'top', horizontal: 'left' },
  [BADGE_ANCHOR_ORIGIN.TOP_RIGHT]: { vertical: 'top', horizontal: 'right' },
  [BADGE_ANCHOR_ORIGIN.BOTTOM_LEFT]: { vertical: 'bottom', horizontal: 'left' },
  [BADGE_ANCHOR_ORIGIN.BOTTOM_RIGHT]: { vertical: 'bottom', horizontal: 'right' },
}

export const ANCHOR_ORIGIN = {
  [BADGE_ANCHOR_ORIGIN.TOP_CENTER]: MUI_BADGE_ANCHOR_ORIGIN[BADGE_ANCHOR_ORIGIN.TOP_RIGHT],
  [BADGE_ANCHOR_ORIGIN.BOTTOM_CENTER]: MUI_BADGE_ANCHOR_ORIGIN[BADGE_ANCHOR_ORIGIN.BOTTOM_LEFT],
  [BADGE_ANCHOR_ORIGIN.RIGHT_CENTER]: MUI_BADGE_ANCHOR_ORIGIN[BADGE_ANCHOR_ORIGIN.BOTTOM_RIGHT],
  [BADGE_ANCHOR_ORIGIN.LEFT_CENTER]: MUI_BADGE_ANCHOR_ORIGIN[BADGE_ANCHOR_ORIGIN.TOP_LEFT],
  ...MUI_BADGE_ANCHOR_ORIGIN,
}

export const BADGE_OVERLAP = {
  CIRCULAR: 'circular',
  RECTANGULAR: 'rectangular',
}

export const BADGE_COLORS = {
  error: 'error',
}
