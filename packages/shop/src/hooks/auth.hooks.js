import { useLocation, useNavigate } from 'react-router-dom'

import { useToast } from '@lib/components/shared/toast/toast.hooks'
import { TOAST_PROPS_OPTIONS } from '@lib/components/shared/toast/toast.constants'
import { ENDPOINTS, METHODS, USER } from '_constants/constants'

import { useAxios } from './axios.hooks'

import { ROUTES } from '~src/app.constants'

export const useAuth = () => {
  const { fetchData, data, error, loaded } = useAxios()
  const { openToast } = useToast()
  const navigate = useNavigate()
  const location = useLocation()

  const onFailure = errorMessage => {
    openToast({
      title: errorMessage,
      severity: TOAST_PROPS_OPTIONS.SEVERITY.ERROR,
      horizontal: TOAST_PROPS_OPTIONS.HORIZONTAL.CENTER,
    })
  }

  const onSuccess = response => {
    if (response?.token?.accessToken) {
      sessionStorage.setItem(USER, JSON.stringify(response))
      // navigate(ROUTES.dashboard.path, { replace: true, state: { from: location } })
    }
  }

  const sendRequest = async payload => {
    await fetchData(ENDPOINTS.LOGIN, METHODS.POST, payload, onSuccess, onFailure)
  }

  return { sendRequest, data, error, loaded }
}
