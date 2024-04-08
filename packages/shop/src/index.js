import { renderReactComponent } from '@lib/utils/react.util'
import ToastProvider from '@lib/components/shared/toast/toast.provider'
import '@lib/styles/fonts.css'
import '@lib/styles/reset.css'
import { AxiosInstanceProvider } from '_providers/axios.provider'
import { theme } from '@lib/styles/material-ui/theme'
// import { Provider } from 'react-redux'
// import store from './redux/store'

import App from './app.component'
import { staticContent } from './static'

const options = {
  isStandaloneApp: true,
  theme,
  customWrapper: ({ children }) => {
    return (
      // <Provider store={store} >
        
      <AxiosInstanceProvider config={{ baseURL: process.env.API_URL }}>
        <ToastProvider>{children}</ToastProvider>
      </AxiosInstanceProvider>
      // </Provider>
    )
  },
}

renderReactComponent(App, 'shop-page', staticContent, options)
