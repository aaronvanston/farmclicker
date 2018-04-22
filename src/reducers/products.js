import { actionTypes } from '~/constants';

export const initialState = {
  list: [],
  quantity: {},
};

const productsList = (state = initialState.list, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      if (state.indexOf(action.name) !== -1) {
        return state;
      }
      return [...state, action.name];

    case actionTypes.PRODUCE_PRODUCTS:
      return state;

    default:
      return state;
  }
};

const productsQuantity = (state = initialState.quantity, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        [action.name]: (state[action.name] || 0) + action.amount,
      };

    case actionTypes.SELL_PRODUCT:
      return {
        ...state,
        ...(state[action.name]) && { [action.name]: (state[action.name]) - 1 },
      };
  
    case actionTypes.PRODUCE_PRODUCTS:
      return state;

    default:
      return state;
  }
};

const products = (state = initialState, action) => ({
  list: productsList(state.list, action),
  quantity: productsQuantity(state.quantity, action),
});

export default products;
