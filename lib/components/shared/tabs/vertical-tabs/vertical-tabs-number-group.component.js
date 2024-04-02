import React, { useState } from 'react'
import PropTypes from 'prop-types'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import uuid from 'react-uuid'

import { styles } from './vertical-tabs.styles'

function TabPanel({ children, value, index, ...other }) {
  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Grid>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number,
}
function VerticalTabsNumberGroup(props) {
  const { tabs } = props
  const [open, setOpen] = useState({ 1: true })
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [activeLink, setActiveLink] = useState(1.1)
  const handleOpenMenu = id => {
    //TODO - Need to verify how this menu is supposed to behave.
    // setOpen(prevState => ({ ...prevState, [id]: !prevState[id] }))
    setOpen(prevState => ({ [id]: !prevState[id] }))
  }
  const handleActiveLink = (menuID, linkID) => {
    setSelectedIndex(menuID)
    setActiveLink(linkID)
  }
  return (
    <Grid container>
      <Grid item sx={styles.tabsContainer}>
        {tabs.map(item => (
          <React.Fragment key={uuid()}>
            <ListItemButton
              onClick={() => handleOpenMenu(item.id)}
              sx={styles.listItem}
              selected={selectedIndex === item.id}
            >
              <Box sx={styles.numberBox}>{item.id}</Box>
              <ListItemText primaryTypographyProps={styles.primary} primary={item.title} />
              {open[item.id] ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open[item.id]}>
              <List sx={styles.subMenuList} disablePadding>
                {item.subMenu.map(menu => (
                  <ListItemButton
                    key={uuid()}
                    sx={styles.subMenu}
                    onClick={() => handleActiveLink(item.id, menu.id)}
                    selected={activeLink === menu.id}
                  >
                    <Box sx={styles.numberBox}>{menu.id}</Box>
                    <ListItemText
                      primaryTypographyProps={styles.subMenuItem}
                      primary={menu.label}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </Grid>
      {tabs.map(item =>
        item.subMenu.map(content => (
          <TabPanel key={uuid()} value={activeLink} index={content.id}>
            {content.content}
          </TabPanel>
        )),
      )}
    </Grid>
  )
}

VerticalTabsNumberGroup.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          label: PropTypes.string.isRequired,
          content: PropTypes.node.isRequired,
        }),
      ),
    }),
  ),
}
export default VerticalTabsNumberGroup
