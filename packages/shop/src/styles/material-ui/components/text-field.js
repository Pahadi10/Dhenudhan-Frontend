export const MuiOutlinedInput = {
  styleOverrides: {
    // The following code is a workaround for a current bug in the autofill
    // browser's functionality, which does not allow to be turned off
    // completely.
    input: {
      '&:-webkit-autofill, -webkit-autofill:focus': {
        transition: 'background-color 600000s 0s, color 600000s 0s',
      },
      '&[data-autocompleted]': {
        backgroundColor: 'transparent !important',
      },
    },
  },
}
