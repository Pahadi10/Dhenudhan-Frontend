import userEvent from '@testing-library/user-event'
import { t } from 'i18next'

import { ROLES } from '@lib/constants/tests.constants'
import { render, screen } from '@lib/utils/jest-wrapper.util'

import { DATA_TEST_ID } from './change-password.constants'
import ChangePassword from './change-password.component'

const mockSubmit = jest.fn((currentPassword, newPassword) => {
  return Promise.resolve({ currentPassword, newPassword })
})

const EDIT_PASSWORD_MOCK = {
  currentPassword: 'Yoyoyo!23',
  newPassword: 'Secret!23',
}

const EDIT_PASSWORD_VALIDATION = {
  MIN_CHAR: /Minimum of 8 characters/i,
  MAX_CHAR: /Maximum of 14 characters/i,
  UPPERCASE: /Upper case character/i,
  SPECIALCASE: /Special characters/i,
  SUCCESS: '#4DC57B',
}

test('should render properly', () => {
  render(<ChangePassword />)
  expect(screen.getByRole(DATA_TEST_ID.CURRENT_PASSWORD)).toBeInTheDocument()
  expect(screen.getByRole(DATA_TEST_ID.NEW_PASSWORD)).toBeInTheDocument()
})

test('button should not be enabled while both the fields are not filled and validated', async () => {
  render(<ChangePassword />)

  const currentPasswordField = screen.getByTestId(DATA_TEST_ID.CURRENT_PASSWORD)
  const newPasswordField = screen.getByTestId(DATA_TEST_ID.NEW_PASSWORD)

  await userEvent.type(currentPasswordField, EDIT_PASSWORD_MOCK.currentPassword)
  await userEvent.type(newPasswordField, '')

  const button = screen.getByRole(ROLES.BUTTON, {
    name: t('shop:modals.changePassword.primaryLabel'),
  })

  expect(button).toBeDisabled()
})

test('button should be enabled if both the fields are filled and validated', async () => {
  render(<ChangePassword />)

  const currentPasswordField = screen.getByTestId(DATA_TEST_ID.CURRENT_PASSWORD)
  const newPasswordField = screen.getByTestId(DATA_TEST_ID.NEW_PASSWORD)

  await userEvent.type(currentPasswordField, EDIT_PASSWORD_MOCK.currentPassword)
  await userEvent.type(newPasswordField, EDIT_PASSWORD_MOCK.newPassword)

  const button = screen.getByRole(ROLES.BUTTON, {
    name: t('shop:modals.changePassword.primaryLabel'),
  })

  expect(button).toBeEnabled()
})

test('minimum characters validation for current password field error should display', async () => {
  render(<ChangePassword />)

  const currentPasswordField = screen.getByTestId(DATA_TEST_ID.CURRENT_PASSWORD)
  await userEvent.type(currentPasswordField, '12abc')
  expect(screen.getAllByText(EDIT_PASSWORD_VALIDATION.MIN_CHAR)[0]).toBeInTheDocument()
})

test('maximum characters validation for current password field error should display', async () => {
  render(<ChangePassword />)

  const currentPasswordField = screen.getByTestId(DATA_TEST_ID.CURRENT_PASSWORD)
  await userEvent.type(currentPasswordField, '!23abcmynewpassword!')
  expect(screen.getAllByText(EDIT_PASSWORD_VALIDATION.MAX_CHAR)[0]).toBeInTheDocument()
})

test('maximum characters validation for new password field should turn green', () => {
  render(<ChangePassword />)

  const newPasswordField = screen.getByTestId(DATA_TEST_ID.NEW_PASSWORD)
  userEvent.type(newPasswordField, 'saurabh')
  expect(screen.getAllByText(EDIT_PASSWORD_VALIDATION.MAX_CHAR)[1]).toHaveStyle({
    color: EDIT_PASSWORD_VALIDATION.SUCCESS,
  })
})

test('minimum and maximum characters validation for new password field should turn green', () => {
  render(<ChangePassword />)

  const newPasswordField = screen.getByTestId(DATA_TEST_ID.NEW_PASSWORD)
  userEvent.type(newPasswordField, 'saurabhrawat')
  expect(screen.getAllByText(EDIT_PASSWORD_VALIDATION.MIN_CHAR)[1]).toHaveStyle({
    color: EDIT_PASSWORD_VALIDATION.SUCCESS,
  })
  expect(screen.getAllByText(EDIT_PASSWORD_VALIDATION.MAX_CHAR)[1]).toHaveStyle({
    color: EDIT_PASSWORD_VALIDATION.SUCCESS,
  })
})

test('min, max, special and uppercase characters validation for new password field should turn green', () => {
  render(<ChangePassword />)

  const newPasswordField = screen.getByTestId(DATA_TEST_ID.NEW_PASSWORD)
  userEvent.type(newPasswordField, 'Secret!23')

  expect(screen.getAllByText(EDIT_PASSWORD_VALIDATION.MIN_CHAR)[1]).toHaveStyle({
    color: EDIT_PASSWORD_VALIDATION.SUCCESS,
  })
  expect(screen.getAllByText(EDIT_PASSWORD_VALIDATION.MAX_CHAR)[1]).toHaveStyle({
    color: EDIT_PASSWORD_VALIDATION.SUCCESS,
  })

  expect(screen.getByText(EDIT_PASSWORD_VALIDATION.UPPERCASE)).toHaveStyle({
    color: EDIT_PASSWORD_VALIDATION.SUCCESS,
  })
  expect(screen.getByText(EDIT_PASSWORD_VALIDATION.SPECIALCASE)).toHaveStyle({
    color: EDIT_PASSWORD_VALIDATION.SUCCESS,
  })
})

test('submit should have been called with correct data', async () => {
  render(<ChangePassword onSubmit={mockSubmit} />)

  const currentPasswordField = screen.getByTestId(DATA_TEST_ID.CURRENT_PASSWORD)
  const newPasswordField = screen.getByTestId(DATA_TEST_ID.NEW_PASSWORD)

  await userEvent.type(currentPasswordField, EDIT_PASSWORD_MOCK.currentPassword)
  await userEvent.type(newPasswordField, EDIT_PASSWORD_MOCK.newPassword)

  const button = screen.getByRole(ROLES.BUTTON, {
    name: t('shop:modals.changePassword.primaryLabel'),
  })

  await userEvent.click(button)

  expect(mockSubmit).toHaveBeenCalledTimes(1)
  expect(mockSubmit).toHaveBeenCalledWith(EDIT_PASSWORD_MOCK)
})
