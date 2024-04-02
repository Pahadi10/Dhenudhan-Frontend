import React from 'react'
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { useMediaQuery } from '@mui/material'

import { breakpoints } from '_styles/material-ui/breakpoints'

import { styles } from './raw-dialog.styles'

const RawDialog = ({ onClose, children, isOpen }) => {
  const matchesMobile = useMediaQuery(`(max-width: ${breakpoints.values.sm}px)`)

  function closeModal() {
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={{
        content: matchesMobile ? styles.mobileContent : styles.content,
        overlay: styles.overlay,
      }}
    >
      {children}
    </Modal>
  )
}

RawDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

export default RawDialog
