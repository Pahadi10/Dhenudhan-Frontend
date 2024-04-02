import * as React from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'
import PropTypes from 'prop-types'
import { StyleSheetManager } from 'styled-components'

import { theme } from '_styles/material-ui/theme'

const ThemeProvider = ({ children, theme: customTheme }) => {
  const [hasRenderedInjectionPoint, setHasRenderedInjectionPoint] = React.useState(false)
  const stylesheetsInjectionPointRef = React.useRef(null)

  const handleStylesheetsInjection = React.useCallback(ref => {
    stylesheetsInjectionPointRef.current = ref
    setHasRenderedInjectionPoint(true)
  }, [])

  return (
    <>
      <div className="material-ui-injection-point" ref={handleStylesheetsInjection} />
      {hasRenderedInjectionPoint && (
        <StyleSheetManager target={stylesheetsInjectionPointRef.current}>
          <MuiThemeProvider theme={customTheme || theme}>
            <CssBaseline />
            {children}
          </MuiThemeProvider>
        </StyleSheetManager>
      )}
    </>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
}

export default ThemeProvider
