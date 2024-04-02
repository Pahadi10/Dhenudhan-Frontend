import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Card, CardActions, Box, CardContent, CardHeader, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'

import { OPTION_TYPE } from './option.constants'
import { handleStylesWithProps, styles } from './option.styles'

const Option = ({ leftIcon, label, description, content, optionType, onClick, ...props }) => {
  const stylesWithProps = handleStylesWithProps(optionType)
  const [isOpen, setIsOpen] = useState(false)

  const handleAction = event => {
    switch (optionType) {
      case OPTION_TYPE.NAVIGATION:
        onClick?.(event)
        break
      case OPTION_TYPE.EXPANDABLE:
        setIsOpen(!isOpen)
        break
      default:
        break
    }
  }

  const actionIcon = useMemo(() => {
    switch (optionType) {
      case OPTION_TYPE.NAVIGATION:
        return <KeyboardArrowRightIcon />
      case OPTION_TYPE.EXPANDABLE:
        return isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />
      default:
        break
    }
  }, [isOpen, optionType])

  return (
    <Card sx={[styles.root, isOpen && styles.highlight]}>
      <Box sx={stylesWithProps.cardRoot} onClick={handleAction} {...props}>
        <CardHeader sx={[styles.cardHeader]} avatar={leftIcon} />
        <CardContent sx={styles.cardContent}>
          <Typography sx={styles.cardTitle}>{label}</Typography>
          {description && <Typography sx={styles.cardSubTitle}>{description}</Typography>}
        </CardContent>
        <CardActions sx={styles.cardAction}>{actionIcon}</CardActions>
      </Box>
      {isOpen && optionType === OPTION_TYPE.EXPANDABLE && (
        <CardContent sx={styles.expandableContent}>
          <Box sx={styles.dropdownContent}>{content}</Box>
        </CardContent>
      )}
    </Card>
  )
}

Option.propTypes = {
  leftIcon: PropTypes.node,
  label: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  content: PropTypes.node.isRequired,
  optionType: PropTypes.string,
}

Option.defaultProps = {
  leftIcon: <FeaturedPlayListOutlinedIcon />,
  label: 'Label',
  description: '',
  content: 'content area',
  optionType: OPTION_TYPE.EXPANDABLE,
}

export default React.memo(Option)
