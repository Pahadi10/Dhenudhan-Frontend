import { Menu, SvgIcon } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import AngleRightIcon from '_assets/svgs/angle-right.svg'
import IconFileGraph from '_assets/svgs/file-graph.svg'
import PlusIcon from '_assets/svgs/plus-small.svg'
import Button from '_components/shared/button/button.component'
import { BUTTON_VARIANTS } from '_components/shared/button/button.constants'

import { styles } from './custom-navigation-item.styles'

const MENU_ID = 'positioned-menu'

const CustomNavigationItem = ({ isOpen, items, addNewLinkAction, shouldShowAddshopLink }) => {
  const { t } = useTranslation(['common'])

  const [anchorEl, setAnchorEl] = React.useState(null)
  const newLinkButtonRef = useRef()
  const isAnchorOpen = Boolean(anchorEl)
  const handleClickCustomItem = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseCustomItem = () => {
    setAnchorEl(null)
  }

  const handleClickOnLink = item => {
    // Noopener is an option to prevent security issues
    // https://mathiasbynens.github.io/rel-noopener/
    item.onClick || window.open(item.url, '_blank', 'noopener')
  }

  const handleAddNewLink = () => {
    newLinkButtonRef.current.blur()
    addNewLinkAction()
  }

  return (
    <>
      <ListItemButton
        sx={[styles.customItemButton, isOpen && styles.openedCustomItemButton]}
        id={`${MENU_ID}`}
        aria-controls={isAnchorOpen ? MENU_ID : undefined}
        aria-haspopup="true"
        aria-expanded={isAnchorOpen ? 'true' : undefined}
        onClick={handleClickCustomItem}
      >
        <ListItemIcon sx={styles.itemIcon}>
          <SvgIcon sx={styles.menuIcon} component={IconFileGraph} />
        </ListItemIcon>
        {!isOpen && (
          <ListItemIcon sx={styles.itemIcon}>
            <SvgIcon sx={styles.angleRightIcon} component={AngleRightIcon} />
          </ListItemIcon>
        )}
      </ListItemButton>
      <Menu
        id={MENU_ID}
        aria-labelledby={MENU_ID}
        anchorEl={anchorEl}
        open={isAnchorOpen}
        onClose={handleCloseCustomItem}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={styles.menu}
      >
        <Box sx={styles.menuItemContainer}>
          <Box sx={styles.customPageLabelContainer}>
            <Typography sx={styles.customPageLabel}>
              {t('common:navigationLinks.customPage', { count: 2 })}
            </Typography>
          </Box>
          {items?.map(item => (
            <ListItemButton
              key={item.id}
              sx={[styles.itemButton]}
              onClick={() => handleClickOnLink(item)}
            >
              <ListItemIcon sx={styles.itemIcon}>
                <SvgIcon sx={styles.menuIcon} component={item.icon} />
              </ListItemIcon>
              <ListItemText primary={item.label} sx={styles.itemLabel} />
            </ListItemButton>
          ))}
        </Box>
        {shouldShowAddshopLink && <Divider sx={styles.divider} />}
        <Box sx={styles.buttonContainer}>
          {shouldShowAddshopLink && (
            <Button
              variant={BUTTON_VARIANTS.TEXT}
              startIcon={PlusIcon}
              label={t('common:navigationLinks.addNewLink')}
              onClick={handleAddNewLink}
              ref={newLinkButtonRef}
            />
          )}
        </Box>
      </Menu>
    </>
  )
}

CustomNavigationItem.propTypes = {
  isOpen: PropTypes.bool,
  items: PropTypes.array,
  addNewLinkAction: PropTypes.func,
  shouldShowAddshopLink: PropTypes.bool,
}

export default CustomNavigationItem
