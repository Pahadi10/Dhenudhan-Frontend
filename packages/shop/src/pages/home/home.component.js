import { Box } from '@mui/material';

import Grocery from '_pages/Groceries/groceries.component'
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Category from '_components/category-select/catergory-select.component';

const Home = () => {
  const [category, setCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <Box>
        {/* <Category setRoute={navigate}/> */}
      <Grocery/>
    </Box>
  )
}

export default Home
