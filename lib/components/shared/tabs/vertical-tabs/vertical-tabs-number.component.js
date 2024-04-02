import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Divider, Grid, Stack, SvgIcon, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { FormProvider, useForm } from 'react-hook-form'

import { SELECT_VARIANTS, SELECT_POPOVER_PROPS } from '_components/shared/select/select.constants'
import Select from '_components/shared/select/select.component'

import { handleStylesWithProps, styles } from './vertical-tabs.styles'

const SELECT_FIELD_NAME = 'linkID'

// TODO: refactor to use one component per file, or memoize this inside the VerticalTabsNumber, if it's only used here.
function TabPanel({ children, value, index, ...other }) {
  return (
    <Grid
      item
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

const VerticalTabsNumber = ({ tabs, header }) => {
  const [activeLink, setActiveLink] = useState(1)
  const theme = useTheme()
  const formMethods = useForm({ mode: 'onChange' })

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const matches1440 = useMediaQuery('(min-width:1440px)')

  const mobileTabs = tabs.map(tab => ({
    label: (
      <Stack direction="row">
        <Box sx={[styles.numberBox, tab.id === activeLink && styles.numberBoxSelected]}>
          <Typography typography="header5">{tab.id}</Typography>
        </Box>
        {tab.label}
      </Stack>
    ),
    value: `${tab.id}`,
  }))

  const handleActiveLink = linkID => {
    setActiveLink(linkID)
    formMethods.setValue('linkID', `${linkID}`)
  }

  useEffect(() => {
    const subscription = formMethods.watch(({ linkID }) => setActiveLink(Number(linkID)))
    return () => subscription.unsubscribe()
  }, [formMethods])

  const stylesWithProps = handleStylesWithProps({ matches1440 })

  return (
    <Box sx={{ flexWrap: 'nowrap', display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      <Box sx={[styles.mainContainer, stylesWithProps.mainContainer]}>
        <Box sx={styles.listContainer}>
          <Box sx={styles.header}>{header}</Box>
          {isDesktop ? (
            <List sx={styles.numberList}>
              {tabs.map(tab => (
                <ListItemButton
                  key={tab.id}
                  sx={[styles.numberListItem, tab.icon && styles.numberListItemIcon]}
                  onClick={() => handleActiveLink(tab.id)}
                  selected={activeLink === tab.id}
                  disabled={tab.isDisabled}
                >
                  {tab.icon ? (
                    <Box sx={[styles.iconBox]}>
                      <SvgIcon component={tab.icon} sx={styles.icon} />
                    </Box>
                  ) : (
                    <Box sx={[styles.numberBox, tab.icon && styles.iconBox]}>
                      <Typography
                        typography="header5"
                        color={activeLink === tab.id ? 'gray.0' : 'gray.80'}
                      >
                        {tab.id}
                      </Typography>
                    </Box>
                  )}
                  <ListItemText primaryTypographyProps={styles.subMenuItem} primary={tab.label} />
                </ListItemButton>
              ))}
            </List>
          ) : (
            <Box sx={styles.selectWrapper}>
              <FormProvider {...formMethods}>
                <form>
                  <Select
                    name={SELECT_FIELD_NAME}
                    MenuProps={{ SELECT_POPOVER_PROPS }}
                    selectStyles={styles.selectSize}
                    options={mobileTabs}
                    defaultValue={`${activeLink}`}
                    variant={SELECT_VARIANTS.GHOST}
                  />
                </form>
              </FormProvider>
            </Box>
          )}
        </Box>
      </Box>
      {isMobile && <Divider sx={styles.divider} />}
      <Grid width="100%">
        {tabs.map(tab => (
          <TabPanel sx={styles.tabPanelContainer} key={tab.id} value={activeLink} index={tab.id}>
            {tab.content}
          </TabPanel>
        ))}
      </Grid>
    </Box>
  )
}

VerticalTabsNumber.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.object.isRequired,
      id: PropTypes.number.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
  ),
  header: PropTypes.any,
}
export default memo(VerticalTabsNumber)
