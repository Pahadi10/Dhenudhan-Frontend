import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from '@reach/router';

const CustomCard = ({image, title, url, setRoute, imgHeight, imgWidth, cardHeight, cardWidth, cardMarginTop, cardShadow}) =>{


    
    const handleRouting = (url) =>{
        setRoute(url)
    }

  return (
    <Card sx={{ maxWidth: {cardWidth}, maxHeight: {cardHeight}, marginTop:3, boxShadow: `${cardShadow}` }}>
      <CardActionArea onClick={() =>handleRouting(url)}>
        <CardMedia
          component="img"
          height="70"
          width= "50"
          image={image}
          alt = {title}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CustomCard
