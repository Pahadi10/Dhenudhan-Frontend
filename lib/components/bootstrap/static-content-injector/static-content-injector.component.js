import * as React from 'react'
import * as PropTypes from 'prop-types'

import { getParsedCssContent } from '_utils/css.util'
import fontsCss from '_styles/fonts.css'
import '_i18n'

import ThemeProvider from '../theme-provider/theme-provider.component'

// This also allows us to pass fonts, scripts and so on to be injected in the shadow root
const StaticContentInjector = ({ css, disableTheme, children, theme }) => {
  const parsedCssContent = React.useMemo(() => getParsedCssContent(css), [css])

  const ThemeProviderComponent = disableTheme ? React.Fragment : ThemeProvider

  // @font-faces are not supported in shadow DOM
  // https://github.com/mdn/interactive-examples/issues/887
  React.useEffect(() => {
    const id = 'embeddable-fonts'
    if (!document.getElementById(id)) {
      const style = Object.assign(document.createElement('style'), {
        id,
        innerHTML: fontsCss,
      })
      document.head.appendChild(style)
    }
  }, [])

  return (
    <>
      {parsedCssContent.map(style => (
        <style key={style.id}>{style.content}</style>
      ))}
      <ThemeProviderComponent theme={theme}>{children}</ThemeProviderComponent>
    </>
  )
}

export const staticContentPropTypes = {
  css: PropTypes.arrayOf(PropTypes.string),
}

StaticContentInjector.propTypes = {
  ...staticContentPropTypes,
  disableTheme: PropTypes.bool,
  children: PropTypes.node,
  theme: PropTypes.object,
}

StaticContentInjector.defaultProps = {
  css: [],
}

export default StaticContentInjector
