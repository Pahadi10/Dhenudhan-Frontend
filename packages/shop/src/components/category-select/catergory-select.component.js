import React, { useEffect, useState } from 'react'
import catData from '~src/jsons/banner.json'
import CustomCard from '@lib/components/shared/card-category-select/card.component'
import { Box } from '@mui/material'
import { IMG_HEIGHT, IMG_WIDTH, CARD_HEIGHT, CARD_WIDTH, CARD_TOP_MARGIN } from './category-select.constants'
import {styles} from './category-select.styles'


const Category = ({ setRoute }) => { 

  const [categoryData, setCategoryData] = useState([])

  useEffect(() => {
    setCategoryData(catData.data);
  }, [])

  return (
    <Box sx={styles.menuRoot}>
      {categoryData.map(item => (
        <CustomCard
          key={item.id}
          image={item.banners[0]?.image.thumbnail}
          title={item.name}
          url={item.route}
          imgHeight={IMG_HEIGHT}
          imgWidth={IMG_WIDTH}
          // cardHeight={CARD_HEIGHT}
          // cardWidth={CARD_WIDTH}
          // cardMarginTop= {CARD_TOP_MARGIN}
          cardShadow={"none"}
          setRoute={setRoute}
        />
      ))}
    </Box>
  )
}

export default Category
