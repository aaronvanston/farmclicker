import { actionTypes } from '~/constants';

export const initialState = {
  products: [],
  quantity: {},
};

const productsList = (state = initialState.products, action) => {
  const index = state.indexOf(action.name);
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      if (index !== -1) {
        return state;
      }
      return [...state, action.name];

    default:
      return state;
  }
};

const productsQuantity = (state = initialState.quantity, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        [action.name]: (state[action.name] || 0) + 1,
      };

    default:
      return state;
  }
};

const products = (state = initialState, action) => ({
  products: productsList(state.products, action),
  quantity: productsQuantity(state.quantity, action),
});

export default products;
