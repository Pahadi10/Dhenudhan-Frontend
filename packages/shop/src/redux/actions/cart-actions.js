import { ADD_TO_CART } from '../constants/action-types';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product
});
