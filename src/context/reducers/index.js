import { appActions } from '../actions';

export const initialState = {
  cart: [],
  products: [],
  isLoading: false,
  errorMessage: '',
};

export const appReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case appActions.LOAD_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case appActions.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        errorMessage: '',
      };
    case appActions.LOAD_PRODUCTS_ERROR:
      return {
        ...state,
        isLoading: false,
        errorMessage: payload,
      };

    case appActions.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case appActions.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(items => items.id !== payload.id),
      };
    default:
      return state;
  }
};

export default appReducer;
