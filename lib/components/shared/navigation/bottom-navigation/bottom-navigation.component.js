import React, { useState } from 'react'
import MuiBottomNavigation from '@mui/material/BottomNavigation'
import { BottomNavigationAction, Paper } from '@mui/material'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { NAVIGATION_STEPS, bottomNavigationItems } from './bottom-navigation.mock'
import { styles } from './bottom-navigation.styles'

const BottomNavigation = ({ isLocation }) => {
  const [value, setValue] = useState(0)
  const { t } = useTranslation(['common'])

  const navBottomItem = isLocation ? NAVIGATION_STEPS.LOCATION : NAVIGATION_STEPS.HOME

  return (
    <Paper sx={styles.root} elevation={3}>
      <MuiBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        sx={styles.bottomNavigation}
      >
        {bottomNavigationItems
          .filter(item => item.visibleAt.includes(navBottomItem))
          ?.map(item => (
            <BottomNavigationAction
              sx={styles.items}
              key={item.id}
              label={t(item.id)}
              icon={item.icon}
            />
          ))}
      </MuiBottomNavigation>
    </Paper>
  )
}

BottomNavigation.propTypes = {
  isLocation: PropTypes.bool,
}

BottomNavigation.defaultProps = {
  isLocation: false,
}

export default BottomNavigation
