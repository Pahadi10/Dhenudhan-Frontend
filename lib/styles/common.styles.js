import '../utils/type-defs.util'

/** @type {Styles} */
export const commonStyles = {
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  verticallyCenteredFlexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredFlexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredColumnRow: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  spaceBetweenFlexRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  zeroPadding: {
    padding: 0,
  },
  zeroMargin: {
    margin: 0,
  },
  zeroSpacing: {
    padding: 0,
    margin: 0,
  },
  border: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.8',
    borderRadius: 1,
  },
  verticalBorder: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.8',
    borderLeft: 0,
    borderRight: 0,
  },
  horizontalBorder: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.8',
    borderTop: 0,
    borderBottom: 0,
  },
  bottomBorder: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.8',
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
  },
  topBorder: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray.8',
    borderBottom: 0,
    borderRight: 0,
    borderLeft: 0,
  },
  overWriteDefaultInputNumberStyles: {
    '& input': {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0,
      },
      '&[type=number]': {
        '-moz-appearance': 'textfield',
      },
    },
  },
  loaderStyles: {
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
}
