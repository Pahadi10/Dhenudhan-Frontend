import uuid from 'react-uuid'

import { minifyString } from './string.util'

export const parseCss = css => {
  const parsedCss = new Set(css.map(minifyString))
  return Array.from(parsedCss)
}

export const getParsedCssContent = css =>
  parseCss(css).map(parsedCss => ({
    id: uuid(),
    content: parsedCss,
  }))
