import { useState } from 'react'
import PropTypes from 'prop-types'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Box } from '@mui/system'
import { Tab } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { styles } from './vertical-tabs.styles'

const VerticalTabsIcons = ({ tabs }) => {
  const [value, setValue] = useState('1')
  const { t } = useTranslation(['common'])
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={styles.container}>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          orientation="vertical"
          aria-label={t('tabs')}
          TabIndicatorProps={{ sx: styles.verticalTabsIndicator }}
          textColor="primary"
          sx={styles.tabsContainer}
        >
          {tabs.map(tab => (
            <Tab
              sx={styles.verticalTabs}
              key={tab.label}
              label={tab.label}
              icon={tab.icon}
              iconPosition="start"
              value={tab.value}
            />
          ))}
        </TabList>
        {tabs.map(tab => (
          <TabPanel sx={styles.contentPanel} key={tab.label} value={tab.value}>
            {tab.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  )
}

VerticalTabsIcons.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired,
      value: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
}

export default VerticalTabsIcons
