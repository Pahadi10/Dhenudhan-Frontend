import { useRef, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const { AxiosContext } = require('_contexts/axios.context')

export const AxiosInstanceProvider = ({
  config = {},
  requestInterceptors = [],
  responseInterceptors = [],
  children,
}) => {
  const instanceRef = useRef(axios.create(config))

  useEffect(() => {
    requestInterceptors.forEach(interceptor => {
      instanceRef.current.interceptors.request.use(interceptor)
    })
    responseInterceptors.forEach(interceptor => {
      instanceRef.current.interceptors.response.use(interceptor)
    })
  }, [requestInterceptors, responseInterceptors])

  return <AxiosContext.Provider value={instanceRef.current}>{children}</AxiosContext.Provider>
}

AxiosInstanceProvider.propTypes = {
  config: PropTypes.shape({}),
  requestInterceptors: PropTypes.shape({}),
  responseInterceptors: PropTypes.shape({}),
  children: PropTypes.shape({}),
}
