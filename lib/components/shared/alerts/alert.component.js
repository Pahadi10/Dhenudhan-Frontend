import React, { useState, useCallback } from 'react'
import {
  Box,
  Grid,
  Typography,
  Avatar,
  AvatarGroup,
  SvgIcon,
  Popover,
  Paper,
  Divider,
  Stack,
} from '@mui/material'
import PropTypes from 'prop-types'
import AddIcon from '@mui/icons-material/Add'
import { useTranslation } from 'react-i18next'

import { useDialog } from '../dialog//dialog.hooks'
import Dialog from '../dialog/dialog.component'
import { SIZES } from '../dialog/dialog-layout/dialog-layout.constants'
import Tabs from '../tabs/horizontal-tabs/tabs.component'
import Button from '../button/button.component'

import { ALERT_ICON_COLOR, ICON_SIZE } from './alert.constant'
import { MOCK_TAB_CONTENT } from './alert.mocks'
import {
  styles,
  applyStackStyle,
  handleStylesWithProps,
  moreAlertsHandleStyles,
} from './alert.styles'

const AlertIcon = ({ iconList, clickable, iconSize, numberOfIcons, displayAvatarGroup }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [alertData, setAlertData] = useState({})
  const { pushDialog } = useDialog()
  const open = Boolean(anchorEl)
  const { t } = useTranslation(['common'])

  const handleClick = useCallback((event, item) => {
    setAnchorEl(event.currentTarget)
    setAlertData(item)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  const listOfAlerts = iconList.map((item, index) => (
    <Avatar
      key={item.icon}
      sx={[handleStylesWithProps(item.color), styles.avatar, clickable && styles.clickable]}
      {...(clickable && {
        onClick: event => handleClick(event, item),
      })}
      {...applyStackStyle(index)}
    >
      <SvgIcon component={item.icon} />
    </Avatar>
  ))

  const openModal = useCallback(() => {
    pushDialog(Dialog, {
      title: alertData?.title,
      titleIcon: alertData?.icon,
      children: (
        <Box>
          <Divider />
          <Tabs tabs={MOCK_TAB_CONTENT[alertData?.title]} />
        </Box>
      ),
      primaryAction: {
        label: t('open'),
        action: () => {},
      },
      size: SIZES.SM,
    })
  }, [alertData?.icon, alertData?.title, t, pushDialog])

  return (
    <Grid>
      {displayAvatarGroup ? (
        <AvatarGroup
          max={numberOfIcons}
          sx={[
            styles[iconSize],
            styles.root,
            moreAlertsHandleStyles(iconList.length, numberOfIcons),
          ]}
        >
          {listOfAlerts}
        </AvatarGroup>
      ) : (
        <Stack direction="row" sx={styles[iconSize]}>
          {listOfAlerts}
        </Stack>
      )}
      {!!alertData.title && (
        <Popover
          id={alertData.id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Paper sx={styles.alertPopover}>
            <Box sx={styles.alertPopoverTitle}>
              <Avatar sx={[handleStylesWithProps(alertData.color), styles.alertIcon]}>
                <SvgIcon component={alertData.icon} />
              </Avatar>
              <Typography sx={styles.alertTitle} variant="span">
                {alertData?.title}
              </Typography>
            </Box>
            {alertData.content && (
              <Box sx={styles.alertPopoverContent}>
                <Typography variant="header4" sx={styles.sectionHeading}>
                  {alertData?.title}
                </Typography>
                <Typography variant="mediumP" sx={styles.sectionContent}>
                  {alertData.content}
                </Typography>
              </Box>
            )}
            {alertData.date && (
              <Box sx={styles.sectionDate}>
                <Typography variant="header4">{alertData.date}</Typography>
              </Box>
            )}
            <Box sx={styles.sectionMore}>
              <Typography variant="header4">
                <AddIcon />1 {t('moreAlerts')}
              </Typography>
            </Box>
            <Box sx={styles.alignButton}>
              <Button
                label={t('openAlerts')}
                theme="secondary"
                variant="outlined"
                size="small"
                {...(clickable && { onClick: openModal })}
              />
            </Box>
          </Paper>
        </Popover>
      )}
    </Grid>
  )
}
AlertIcon.propTypes = {
  iconList: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
      color: PropTypes.oneOf(Object.values(ALERT_ICON_COLOR)),
    }),
  ),
  iconSize: PropTypes.string,
  numberOfIcons: PropTypes.number,
  displayAvatarGroup: PropTypes.bool,
  clickable: PropTypes.bool,
}
AlertIcon.defaultProps = {
  children: PropTypes.any,
  iconSize: ICON_SIZE.LARGE,
  displayAvatarGroup: false,
  clickable: false,
  numberOfIcons: 8,
}
export default AlertIcon
