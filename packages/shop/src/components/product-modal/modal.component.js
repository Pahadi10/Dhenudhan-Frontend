import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';
import { styles } from './modal.styles';
import ProductImageSlider from '_components/product-image-slider/imageSlider.component';
import HeartIconBlank from '@lib/assets/svgs/heart-blank.svg';
import HeartIconFilled from '@lib/assets/svgs/heart-filled.svg';
import StarIcon from '@lib/assets/svgs/star.svg';

const ProductModal = ({
  openModal,
  handleCloseModal,
  productName,
  weightOrPiece,
  productPrice,
  productSalePrice,
  productDescription,
  productAvailableQuantity,
  productInStock,
  productGallery,
  productRatings,
  productThumbnail
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [fullDescription, setFullDescription] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleReadmore = () => {
    setFullDescription(!fullDescription);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...styles.root, overflow: 'auto' }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              {productGallery ? (
                <ProductImageSlider
                  images={productGallery}
                  currentImageIndex={currentImageIndex}
                  setCurrentImageIndex={setCurrentImageIndex}
                />
              ) : (
                <img src={productThumbnail} alt="Product Thumbnail" style={styles.productThumbnail} />
              )}
              {productGallery && (
                <Grid container style={styles.thumbnailImagesContainer}>
                  {productGallery?.map((product, index) => (
                    <Grid item key={index} xs={6} md={3} sm={6}>
                      <img
                        src={product.original}
                        style={{ ...styles.thumbnailImage, ...(index === currentImageIndex && styles.thumbnailImageSelected) }}
                        alt={`Img${index}`}
                        onClick={() => handleThumbnailClick(index)}
                      />
                    </Grid>
                  ))}
                </Grid>
              )}
            </Grid>

            <Grid item xs={12} md={6} style={styles.rightPartContainer}>
              <Typography variant="h6" component="h1" style={styles.rightPartTypography1}>
                {productName}
                <Button onClick={handleLike} style={styles.likeButton}>
                  {!liked ? <HeartIconBlank /> : <HeartIconFilled />}
                </Button>
              </Typography>
              <Typography style={styles.rightPartTypography2}>
                {weightOrPiece}
                <Box style={styles.ratingContainer}>
                  {productRatings}
                  <StarIcon style={styles.ratingStar} />
                </Box>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {fullDescription ? productDescription : `${productDescription?.substring(0, 100)}...`}
                <Button onClick={handleReadmore}>{fullDescription ? 'Read Less' : 'Read More'}</Button>
              </Typography>
              <Typography style={styles.rightPartTypography3}>
                {productSalePrice ? `$${productSalePrice}` : `$${productPrice}`}
              </Typography>
              <Typography style={styles.rightPartTypography4}>
                <Button variant="contained">Add To Shopping Cart</Button>
                <Typography>{productAvailableQuantity} pieces available</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default ProductModal;
