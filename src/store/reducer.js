export const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_PRODUCTS_TO_STORE":
      return { ...state, productsData: action.payload };
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "SET_CHOSEN_CATEGORY":
      return { ...state, chosenCategory: action.payload };
    case "SET_CART_ITEMS":
      return { ...state, cartItems: [action.payload, ...state.cartItems] };
    case "SET_USERS":
      return { ...state, users: [action.user, ...state.users] };
    default:
      return state;
  }
};
