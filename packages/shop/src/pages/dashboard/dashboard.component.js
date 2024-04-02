import { Box, Typography } from '@mui/material'

import { LOGIN_MOCK_RESPONSE } from '_mocks/dashnoard.mock'
import { styles } from './dashboard.style';


const Dashboard = () => {
  const isLoggedIn = sessionStorage.getItem('loggedIn') === "1"
  const data = LOGIN_MOCK_RESPONSE.data

  return (
  <>
  { isLoggedIn ? 
    (<Box sx={styles.menuRoot}>
      <Typography typography="header1" color="gray.64">
        Dashboard
      </Typography>
      <Typography typography="medium" color="gray.56">
        Welcome, {data?.firstName}
      </Typography>
    </Box>)
    :
    (<div>Login to view your profile</div>)
  }
  </>
    
  )
}

export default Dashboard
