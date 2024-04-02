import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded'
import { ListItem, SvgIcon } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import MuiDrawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import Avatar from '_components/shared/avatar/single-avatar.component'
import Button from '_components/shared/button/button.component'
import {
  BUTTON_SIZE,
  BUTTON_THEME,
  BUTTON_VARIANTS,
} from '_components/shared/button/button.constants'
import { NAVIGATION_LABEL } from '_components/shared/navigation/navigation.constant'
import PlusIcon from '_assets/svgs/plus-small.svg'

import CustomNavigationItem from '../custom-navigation-item/custom-navigation-item.component'
import { AVATAR_SIZE, AVATAR_TYPES, AVATAR_VARIANT } from '../avatar/avatar.constants'

import { handleStylesWithProps, styles } from './navigation.styles'

const Navigation = ({
  isLocation,
  setRoute,
  image,
  navItems,
  isOpen,
  onOpen,
  hasRouteIntegration,
  pathname,
  addNewLinkAction,
  shouldShowAddshopLink,
}) => { 
  const [open, setOpen] = useState(isOpen || false)
  const stylesWithProps = handleStylesWithProps({ open })
  const [selected, setSelected] = useState(hasRouteIntegration ? {} : { home: true })
  const { t } = useTranslation(['common', 'lib'])
  const handleDrawerOpen = () => {
    onOpen?.(true) || setOpen(true)
  }

  const handleDrawerClose = () => {
    onOpen?.(false) || setOpen(false)
  }
  const goTo = item => {
    if (hasRouteIntegration && item.href) {
      return setRoute?.(item.href)
    } else if (item.url) {
      /* Noopener is an option to prevent security issues */
      window.open(item.url, '_blank', 'noopener')
    } else {
      return
    }
    setSelected({ [item.id]: true })
  }

  const newSaleOnOpen = useCallback(
    item => ({
      variant: BUTTON_VARIANTS.OUTLINED,
      label: item.label,
      startIcon: item.icon,
    }),
    [],
  )

  const newSaleOnClose = useCallback(
    item => ({
      variant: BUTTON_VARIANTS.ICON,
      icon: item.icon,
    }),
    [],
  )

  const navItem = isLocation ? navItems?.withLocation : navItems?.withoutLocation

  const isUserProfileSelected = pathname?.includes('/profile')

  return (
    <Box sx={styles.menuRoot}>
      <MuiDrawer sx={stylesWithProps.muiDrawer} variant="permanent">
        <Box sx={stylesWithProps.drawerHeading}>
          <>
            <Box
              sx={[styles.logoContainer, stylesWithProps.logoContainer]}
              onClick={image?.onClick}
            >
              {open ? (
                <>
                  <img alt={image?.alt} src={image?.openedSrc} style={styles.openedImage} />
                  <Typography typography="large" color="gray.80" ml={3}>
                    {t('lib:logoTitle')}
                  </Typography>
                </>
              ) : (
                <img alt={image?.alt} src={image?.closedSrc} style={styles.closedImage} />
              )}
            </Box>
            {navItems?.loc?.map(item => {
              return (
                <Box
                  key={item.id}
                  sx={[
                    styles.drawerHeaderBlocks,
                    styles.locationItemButton,
                    isLocation && styles.selectedLocation,
                  ]}
                >
                  <Box sx={styles.brand}>
                    <SvgIcon sx={styles.menuIcon} component={item.icon} />
                    {open && (
                      <ListItemText
                        primary={isLocation ? t('common:navigationLinks.locationName') : item.label}
                        sx={styles.itemLabel}
                      />
                    )}
                  </Box>
                  <IconButton
                    onClick={open ? handleDrawerClose : handleDrawerOpen}
                    sx={styles.IconButton}
                  >
                    <SvgIcon sx={styles.menuIcon} component={ChevronRightIcon} />
                  </IconButton>
                </Box>
              )
            })}
          </>
        </Box>
        <List sx={styles.menuList}>
          <ListItem sx={styles.menuListTop}>
            {navItem?.main?.map(item => {
              const isRoot = item.href === '/'

              const isActive =
                hasRouteIntegration &&
                ((pathname?.includes(item.href) && !isRoot) || (isRoot && pathname === '/'))
              return (
                <ListItemButton
                  key={item.id}
                  sx={[styles.itemButton, (isActive || selected[item.id]) && styles.selected]}
                  onClick={() => goTo(item)}
                >
                  <ListItemIcon sx={styles.itemIcon}>
                    <SvgIcon sx={styles.menuIcon} component={item.icon} />
                  </ListItemIcon>
                  {open && <ListItemText primary={item.label} sx={styles.itemLabel} />}
                </ListItemButton>
              )
            })}

            {open && <Divider sx={[styles.divider, styles.customDivider]} />}

            {!isLocation && open && (
              <ListItemText sx={styles.customHeading}>
                <Typography typography="small">
                  {t('common:navigationLinks.customPage', { count: 2 })}
                </Typography>
              </ListItemText>
            )}
            {open ? (
              <>
                {navItem?.custom?.map(item => {
                  const isRoot = item.href === '/'

                  const isActive =
                    hasRouteIntegration &&
                    ((pathname?.includes(item.href) && !isRoot) || (isRoot && pathname === '/'))

                  return item.label === NAVIGATION_LABEL?.NEW_SALE ? (
                    <ListItemText key={item.id} sx={[styles.itemButton, styles.newSale]}>
                      <Button
                        size={BUTTON_SIZE.MEDIUM}
                        stroke={true}
                        theme={BUTTON_THEME.GRAY}
                        {...(open ? newSaleOnOpen(item) : newSaleOnClose(item))}
                      />
                    </ListItemText>
                  ) : (
                    <>
                      <ListItemButton
                        key={item.id}
                        sx={[styles.itemButton, (isActive || selected[item.id]) && styles.selected]}
                        onClick={() => goTo(item)}
                      >
                        <ListItemIcon sx={styles.itemIcon}>
                          <SvgIcon sx={styles.menuIcon} component={item.icon} />
                        </ListItemIcon>
                        {open && <ListItemText primary={item.label} sx={styles.itemLabel} />}
                      </ListItemButton>
                    </>
                  )
                })}
                <Divider sx={[styles.divider, styles.customDivider]} />
                <ListItemText sx={styles.newLinkContainer}>
                  {shouldShowAddshopLink && (
                    <Button
                      variant={BUTTON_VARIANTS.TEXT}
                      startIcon={PlusIcon}
                      label={t('common:navigationLinks.addNewLink')}
                      sx={styles.newLinkButton}
                    />
                  )}
                </ListItemText>
              </>
            ) : (
              <CustomNavigationItem
                items={navItem?.custom}
                isOpen={open}
                addNewLinkAction={addNewLinkAction}
                shouldShowAddshopLink={shouldShowAddshopLink}
              />
            )}
          </ListItem>

          <ListItem sx={[styles.menuListFooter, open && styles.row]}>
            {navItems.bottomDefault?.map(item => {
              const isRoot = item.href === '/'

              const isActive =
                hasRouteIntegration &&
                ((pathname?.includes(item.href) && !isRoot) || (isRoot && pathname === '/'))
              return (
                <ListItemButton
                  key={item.id}
                  sx={[
                    styles.itemButtonFooter,
                    open && styles.itemButtonFooterRow,
                    (isActive || selected[item.id]) && styles.selectedLocation,
                  ]}
                >
                  <ListItemIcon
                    sx={styles.itemIconFooter}
                    onClick={item.href ? () => setRoute(item.href) : () => null}
                  >
                    <SvgIcon sx={styles.menuIcon} component={item.icon} />
                  </ListItemIcon>
                </ListItemButton>
              )
            })}

            <ListItemButton
              sx={[
                styles.itemButtonFooter,
                styles.itemButtonUser,
                open && styles.itemButtonFooterRow,
              ]}
            >
              <ListItemIcon
                sx={[styles.itemIconFooter, isUserProfileSelected && styles.selectedAvatar]}
                onClick={() => setRoute(navItems.userProfile.route)}
              >
                <Avat ar
                  variant={AVATAR_VARIANT.CIRCULAR}
                  avatarType={AVATAR_TYPES.SINGLE_AVATAR}
                  size={AVATAR_SIZE.MEDIUM}
                  src={navItems.userProfile?.src}
                  alt={navItems.userProfile?.alt}
                />
              </ListItemIcon>
            </ListItemButton>
            {!open && <Divider sx={[styles.divider, styles.footerDivider]} />}
            {open && <Divider sx={styles.verticalDivider} flexItem orientation="vertical" />}
            <ListItemButton
              sx={[styles.itemButtonFooter]}
              onClick={open ? handleDrawerClose : handleDrawerOpen}
            >
              <ListItemIcon sx={styles.itemIconFooter}>
                {open ? (
                  <SvgIcon
                    sx={styles.openMenuIcon}
                    component={KeyboardDoubleArrowLeftRoundedIcon}
                  />
                ) : (
                  <SvgIcon
                    sx={styles.openMenuIcon}
                    component={KeyboardDoubleArrowRightRoundedIcon}
                  />
                )}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </MuiDrawer>
    </Box>
  )
}

Navigation.propTypes = {
  isLocation: PropTypes.bool,
  setRoute: PropTypes.func,
  navItems: PropTypes.shape({
    loc: PropTypes.array,
    withLocation: PropTypes.object,
    withoutLocation: PropTypes.object,
    bottomDefault: PropTypes.array,
    userProfile: PropTypes.shape({
      route: PropTypes.string,
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
  image: PropTypes.shape({
    openedSrc: PropTypes.string,
    closedSrc: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func,
  }),
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  pathname: PropTypes.string,
  hasRouteIntegration: PropTypes.bool,
  addNewLinkAction: PropTypes.func,
  shouldShowAddshopLink: PropTypes.bool,
}

Navigation.defaultProps = {
  isLocation: false,
  isOpen: false,
  onClick: () => null,
}

export default memo(Navigation)
