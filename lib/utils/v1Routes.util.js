export const V1_ROUTES = {
  PROFILE: 'dashboard/clients/assessment',
  NEW_SALE: 'payments/payments/addnew',
  PAYMENTS: 'payments/payments',
}

export const V1_ANCHORS = {
  payments: 'payments',
}

const IS_V1_STAGING = window.location.href.includes('stagingcore')

export const V1_BASE_URLS = {
  dev: '',
  qa: '',
  staging: IS_V1_STAGING ? '' : '',
  production: IS_V1_STAGING ? '' : '',
}

export const getV1Routes = (route, params = {}, anchor = '') => {
  const paramRoute = !!route && { route }
  const joinParams = { ...paramRoute, ...params }
  const url = new URL(V1_BASE_URLS[process.env.ENVIRONMENT || 'dev'])
  const urlParams = new URLSearchParams({
    ...joinParams,
    ...(joinParams.cid && {
      cid: window.btoa(String(joinParams.cid)),
    }),
  })
  url.search = urlParams
  url.hash = anchor
  return url.href
}
