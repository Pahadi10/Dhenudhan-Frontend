import { act, render, screen } from '@lib/utils/jest-wrapper.util'
import { ROLES } from '@lib/constants/tests.constants'

import Search from './search.component'

test('should render properly', async () => {
  await act(async () => {
    render(<Search />)
  })
  expect(screen.getByRole(ROLES.TEXTBOX)).toBeInTheDocument()
})
