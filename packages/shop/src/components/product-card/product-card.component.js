import React, { useState } from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import CartIcon from '@lib/assets/svgs/shopping-cart-small.svg';
import ProductModal from '_components/product-modal/modal.component';
import { styles } from './product-card.styles';

const ProductCard = (props) => {
  const {
    productThumbnail,
    name,
    weight,
    price,
    salePrice,
    desc,
    quantity,
    inStock,
    gallery,
    ratings
  } = props;

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Card>
        <CardActionArea onClick={handleOpenModal}>
          <CardMedia
            component="img"
            style={styles.cardMedia}
            image={productThumbnail}
            alt={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {weight}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={styles.cardAction}>
          {salePrice ? (
            <Typography style={styles.priceContainer}>
              <strike>${price}</strike>&nbsp; &nbsp; ${salePrice}
            </Typography>
          ) : (
            <Typography>${price}</Typography>
          )}
          <Button size="small" color="primary">
            <CartIcon style={{ fill: 'green' }} />
            Cart
          </Button>
        </CardActions>
      </Card>

      {openModal && (
        <ProductModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          productName={name}
          weightOrPiece={weight}
          productPrice={price}
          productSalePrice={salePrice}
          productDescription={desc}
          productAvailableQuantity={quantity}
          productInStock={inStock}
          productGallery={gallery}
          productRatings={ratings}
        />
      )}
    </>
  );
};

export default ProductCard;
