import {
  SAVE_PRODUCTS_TO_STORE,
  SET_CATEGORIES,
  SET_CHOSEN_CATEGORY,
  SET_CART_ITEMS,
  SET_USERS,
} from "./actionTypes";

export const saveProductsToStore = (products) => ({
  payload: products,
  type: SAVE_PRODUCTS_TO_STORE,
});

export const setCategories = (categories) => ({
  payload: categories,
  type: SET_CATEGORIES,
});

export const setChosenCategory = (category) => ({
  payload: category,
  type: SET_CHOSEN_CATEGORY,
});

export const setCartItems = (cartItems) => ({
  payload: cartItems,
  type: SET_CART_ITEMS,
});

export const setUsers = (user) => ({
  payload: user,
  type: SET_USERS,
});
