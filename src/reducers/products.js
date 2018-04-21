import { actionTypes } from '~/constants';

export const initialState = {
  list: [],
  quantity: {},
};

const productsList = (state = initialState.list, action) => {
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
    case actionTypes.SELL_PRODUCT:
      return {
        ...state,
        ...(state[action.name]) && { [action.name]: (state[action.name]) - 1 },
      };

    default:
      return state;
  }
};

const products = (state = initialState, action) => ({
  list: productsList(state.list, action),
  quantity: productsQuantity(state.quantity, action),
});

export default products;
