export const addDisablePortal = overwrite => ({
  ...overwrite,
  disablePortal: true,
})

export const withDisablePortal = overwrite => ({
  ...overwrite,
  defaultProps: addDisablePortal(overwrite?.defaultProps),
})
