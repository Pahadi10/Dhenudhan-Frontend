import { useState } from 'react'
import PropTypes from 'prop-types'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { useTranslation } from 'react-i18next'

import { styles } from './tabs.styles'

const Tabs = ({ tabs, defaultValue }) => {
  const [value, setValue] = useState(defaultValue)
  const { t } = useTranslation(['common'])

  const handleChange = (_, newValue) => {
    setValue(newValue)
  }

  return (
    <TabContext value={value}>
      <TabList
        onChange={handleChange}
        aria-label={t('tabs')}
        sx={styles.tabList}
        TabIndicatorProps={{ sx: styles.indicator, children: <span /> }}
      >
        {tabs &&
          tabs.map(tab => (
            <Tab sx={styles.tab} key={tab.label} label={tab.label} value={tab.value} />
          ))}
      </TabList>
      {tabs &&
        tabs.map(tab => (
          <TabPanel key={tab.label} value={tab.value} sx={styles.tabPanel}>
            {tab.content}
          </TabPanel>
        ))}
    </TabContext>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array,
  defaultValue: PropTypes.string,
}

export default Tabs
