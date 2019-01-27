import {
  FETCH_ITEMS_SUCCESS,
  ADD_TO_FAVORITES_SUCCESS,
  REMOVE_FROM_FAVORITES_SUCCESS,
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART_SUCCESS
} from '../../actions/actionTypes';

const initialState = {
  items: [],
  favorites: [],
  cart: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload
      };
    case ADD_TO_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: [...state.favorites].concat(action.item)
      };
    case REMOVE_FROM_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: action.favorites
      };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart].concat(action.item)
      };
    case REMOVE_FROM_CART_SUCCESS:
      return {
        ...state,
        cart: action.cart
      };
    default:
      return state;
  }
};