import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import axios from 'axios'

import { AxiosContext } from '_contexts/axios.context'
import { USER } from '_constants/constants'

export const useAxios = isCorporateRequest => {
  const [data, setData] = useState(null)
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')
  const [loaded, setLoaded] = useState(false)
  const contextInstance = useContext(AxiosContext)

  const instance = useMemo(() => {
    const config = contextInstance ? { ...contextInstance.defaults } : {}
    if (isCorporateRequest) {
      config.baseURL = process.env.CORPORATE_API_URL
    }
    return axios.create(config)
  }, [contextInstance, isCorporateRequest])

  const controllerRef = useRef(new AbortController())
  const cancel = () => {
    controllerRef.current.abort()
  }

  const fetchData = async (url, method, payload, onSuccess, onFailure) => {
    try {
      const response = await instance.request({
        signal: controllerRef.current.signal,
        data: payload,
        method,
        url,
        headers: {
          Authorization: `Bearer ${JSON.parse(sessionStorage.getItem(USER))?.token?.accessToken}`,
        },
      })
      setData(response.data)
      setStatus(response.status)
      setError('')
      onSuccess(response.data, response)
    } catch (error) {
      setData(null)
      setError(error?.response?.data?.message || 'Something went wrong!')
      onFailure(error?.response?.data?.message || 'Something went wrong!')
    } finally {
      setLoaded(true)
    }
  }

  useEffect(() => {
    return () => {
      cancel()
    }
  }, [])

  return { fetchData, cancel, data, error, loaded, status }
}
