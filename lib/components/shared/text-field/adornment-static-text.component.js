import React from 'react'
import { Typography } from '@mui/material'
import PropTypes from 'prop-types'

const StaticText = ({ children }) => (
  <Typography overflow="initial" textOverflow="initial" noWrap>
    {children}
  </Typography>
)

StaticText.propTypes = {
  children: PropTypes.node,
}

export default StaticText
