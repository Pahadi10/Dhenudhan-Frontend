import '@lib/utils/type-defs.util';
import { palette } from '@lib/styles/material-ui/palette';

/** @type {Styles} */

export const styles = {
  root: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '85%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    overflow: 'hidden',
    height: '90%',
    display: 'flex',
  },

  thumbnailImagesContainer: {
    textAlign: 'center',
  },

  thumbnailImage: {
    width: '80%',
    cursor: 'pointer',
    border: '2px solid transparent', // Add default border
  },

  rightPartContainer: {
    padding: '0 5%',
    marginTop: '5%',
  },

  rightPartTypography1: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  likeButton: {
    display: 'flex',
    borderRadius: '50%',
  },

  rightPartTypography2: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  ratingContainer: {
    background: palette.primary.main,
    padding: '5px 20px',
    color: 'white',
    borderRadius: '5px',
  },

  ratingStar: {
    height: '0.8em',
    width: '0.8em',
  },

  rightPartTypography3: {
    marginTop: '2%',
  },

  rightPartTypography4: {
    marginTop: '10%',
    marginBottom: '10%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '30px',
  },
  
  thumbnailImageSelected: {
    border: '2px solid yellow',
  },
};
