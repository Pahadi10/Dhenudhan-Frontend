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

  // const handleAddToCart = () => {
    
  //   addToCart({
  //     name,
  //     price,
  //     quantity: 1
  //   });
  // };

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
              <strike>₹{(price*83.30).toFixed(0)}</strike>&nbsp; &nbsp; ₹{(salePrice*83.30).toFixed(0)}
            </Typography>
          ) : (
            <Typography>₹{(price*83.30).toFixed(0)}</Typography>
          )}
          <Button size="small" color="primary">
            <CartIcon style={styles.cartIcon} />
            Cart
          </Button>
        </CardActions>
      </Card>

      {openModal && (
        <ProductModal
          openModal={openModal}
          handleCloseModal={handleCloseModal}
          productName={name}
          productThumbnail={productThumbnail}
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