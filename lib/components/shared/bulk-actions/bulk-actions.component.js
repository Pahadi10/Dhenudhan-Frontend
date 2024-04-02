import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { Card, CardContent, CardHeader, Icon, Box } from '@mui/material'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import ClearRoundedIcon from '@mui/icons-material/ClearRounded'

import { BUTTON_VARIANTS } from '_components/shared/button/button.constants'
import Button from '_components/shared/button/button.component'

import { styles } from './bulk-actions.styles'

const BulkActions = ({
  label,
  description,
  leftIcon,
  rightIcon,
  actionList,
  isBulkActionClose,
  handleCloseAction,
  handleBulkAction,
}) => {
  const renderAction = useMemo(
    () =>
      actionList.map(item => {
        return (
          <Button
            variant={BUTTON_VARIANTS.TEXT}
            label={item.actionLabel}
            startIcon={item.actionIcon}
            onClick={() => handleBulkAction(item)}
            sx={styles.buttons}
            key={item.id}
          />
        )
      }),
    [actionList, handleBulkAction],
  )

  return (
    !isBulkActionClose && (
      <Box sx={styles.mainBox}>
        <Card sx={styles.root}>
          <CardHeader
            sx={styles.cardHeader}
            avatar={<Icon component={leftIcon} />}
            title={label}
            titleTypographyProps={styles.label}
            subheader={description}
            subheaderTypographyProps={styles.description}
            action={
              <Button
                variant={BUTTON_VARIANTS.ICON}
                icon={rightIcon}
                stroke={false}
                onClick={handleCloseAction}
              />
            }
          />
          <CardContent sx={styles.cardContent}>
            <Box sx={styles.actionList}>{renderAction}</Box>
          </CardContent>
        </Card>
      </Box>
    )
  )
}

BulkActions.propTypes = {
  description: PropTypes.string,
  label: PropTypes.string,
  leftIcon: PropTypes.elementType,
  rightIcon: PropTypes.elementType,
  actionList: PropTypes.array,
  isBulkActionClose: PropTypes.bool,
  handleCloseAction: PropTypes.func,
  handleBulkAction: PropTypes.func,
}

BulkActions.defaultProps = {
  label: 'label',
  description: 'description',
  leftIcon: CheckRoundedIcon,
  rightIcon: ClearRoundedIcon,
  actionList: [],
}

export default BulkActions
