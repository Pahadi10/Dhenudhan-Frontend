import React from 'react'
import ReactDOM from 'react-dom'

import Embeddable from '_components/bootstrap/embeddable/embeddable.component'
import StaticContentInjector from '_components/bootstrap/static-content-injector/static-content-injector.component'
import { DialogProvider } from '_components/shared/dialog/dialog.provider'
import ToastProvider from '_components/shared/toast/toast.provider'

// TODO: Check requirement of having SiteSettingsForm to provide
// a way to check other siteIds in runtime
// import SiteSettingsForm from '_components/bootstrap/site-settings-form-temp/site-settings-form-temp.component'
import { registerWebComponent } from './web-components.util'

export const renderReactComponent = (App, containerTagName, staticContent, options) => {
  registerWebComponent(containerTagName)

  const containers = [...document.getElementsByTagName(containerTagName)]
  if (!containers.length) {
    throw new Error(`Could not find any element ${containerTagName}`)
  }

  const CustomWrapper = options?.customWrapper
  const isStandaloneApp = options?.isStandaloneApp
  const theme = options?.theme

  if (isStandaloneApp) {
    return ReactDOM.render(
      <React.StrictMode>
        <StaticContentInjector {...staticContent} theme={theme}>
          {CustomWrapper ? (
            <CustomWrapper>
              <App {...containers[0].dataset} />
            </CustomWrapper>
          ) : (
            <ToastProvider>
              <DialogProvider>
                <App {...containers[0].dataset} />
              </DialogProvider>
            </ToastProvider>
          )}
        </StaticContentInjector>
      </React.StrictMode>,
      containers[0],
    )
  }

  containers.forEach(container => {
    ReactDOM.render(
      <React.StrictMode>
        {CustomWrapper ? (
          <CustomWrapper>
            <Embeddable staticContent={staticContent}>
              <ToastProvider>
                <DialogProvider>
                  <App {...container.dataset} />
                </DialogProvider>
              </ToastProvider>
            </Embeddable>
          </CustomWrapper>
        ) : (
          <Embeddable staticContent={staticContent}>
            <ToastProvider>
              <DialogProvider>
                <App {...container.dataset} />
              </DialogProvider>
            </ToastProvider>
          </Embeddable>
        )}
      </React.StrictMode>,
      container,
    )
  })
}
