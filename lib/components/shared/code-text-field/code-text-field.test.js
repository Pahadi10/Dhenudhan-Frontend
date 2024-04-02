import { t } from 'i18next'
import { render, screen, fireEvent } from '@testing-library/react'

import CodeTextField from './code-text-field.component'

const TEST_STRING = 'Good Day'
const TEST_NUMBER = 7

test('it should be present in the document', () => {
  render(<CodeTextField />)

  const input = screen.getByLabelText(t('shop:codeFieldLabelText'))
  expect(input).toBeInTheDocument()
})

test('it should not allow letters to be inputted', () => {
  render(<CodeTextField />)

  const input = screen.getByLabelText(t('shop:codeFieldLabelText'))

  expect(input.value).toBe('')

  fireEvent.change(input, { target: { value: TEST_STRING } })

  expect(input.value).toBe('')
})

test('it should allow numbers to be inputted', () => {
  render(<CodeTextField />)

  const input = screen.getByLabelText(t('shop:codeFieldLabelText'))

  expect(input.value).toBe('')

  fireEvent.change(input, { target: { value: TEST_NUMBER } })

  expect(input.value).toBe(TEST_NUMBER)
})
