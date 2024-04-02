import { Player } from '@lottiefiles/react-lottie-player'
import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'

import loadingLottie from '../../../assets/lotties/loading.json'

import { styles } from './loading.styles'

const Loading = ({ label }) => {
  return (
    <Box sx={styles.container} data-testid="loading">
      <Player controls={false} autoplay loop src={loadingLottie} style={styles.animation} />
      {label ? (
        <Typography typography="medium" color="gray.56" sx={styles.label}>
          {label}
        </Typography>
      ) : null}
    </Box>
  )
}

Loading.propTypes = {
  label: PropTypes.string,
}

export default Loading
