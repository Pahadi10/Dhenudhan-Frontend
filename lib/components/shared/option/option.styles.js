import '_utils/type-defs.util'
import { alpha } from '@mui/material/styles'
/** @type {Styles} */

import { OPTION_TYPE } from './option.constants'

export const handleStylesWithProps = optionType => {
  const getTextAlign = () => {
    const defaultAlign = 'flex-start'
    const alignmentAdjust = {
      [OPTION_TYPE.NAVIGATION]: 'center',
      [OPTION_TYPE.EXPANDABLE]: 'center',
    }
    return {
      alignItems: alignmentAdjust[optionType] || defaultAlign,
    }
  }

  return {
    cardRoot: {
      minHeight: 56,
      display: 'flex',
      width: '100%',
      borderRadius: 1,
      cursor: 'pointer',
      ...getTextAlign(),
    },
  }
}

export const styles = {
  root: {
    border: 1,
    borderColor: 'gray.12',
    boxShadow: 'none',
  },
  hoverStyle: {
    '&:hover': {
      backgroundColor: 'gray.3',
    },
  },
  highlight: {
    background: 'gray.3',
  },
  cardContent: {
    padding: 0,
    marginRight: 'auto',
  },
  cardTitle: {
    fontSize: 14,
    lineHeight: 1.25,
    color: 'gray.64',
    fontWeight: 600,
    wordWrap: 'break-word',
  },
  cardHeader: {
    color: 'gray.56',
    margin: 2,
    padding: 0,
    '.MuiCardHeader-avatar': {
      marginRight: 0,
      '.MuiSvgIcon-root': {
        color: 'gray.56',
        fontSize: 20,
      },
    },
  },

  cardAction: {
    margin: 2,
    color: 'gray.56',
    padding: 0,
    '.MuiSvgIcon-root': {
      color: 'gray.56',
      fontSize: 20,
    },
  },
  cardSubTitle: {
    fontSize: 14,
    lineHeight: 1.43,
    color: 'gray.64',
    fontWeight: 400,
    marginBottom: 0,
    wordWrap: 'break-word',
  },

  expandableContent: theme => ({
    margin: 2,
    textAlign: 'center',
    background: alpha(theme.palette.content.grey, 0.08),
    borderRadius: 2,
  }),
  dropdownContent: theme => ({
    color: theme.palette.content.grey,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 1.34,
  }),
}
