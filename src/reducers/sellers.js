import { actionTypes } from '~/constants';

export const initialState = {
  list: [],
  quantity: {},
};

const sellersList = (state = initialState.list, action) => {
  const index = state.indexOf(action.name);
  switch (action.type) {
    case actionTypes.ADD_SELLER:
      if (index !== -1) {
        return state;
      }
      return [...state, action.name];

    default:
      return state;
  }
};

const sellersQuantity = (state = initialState.quantity, action) => {
  switch (action.type) {
    case actionTypes.ADD_SELLER:
      return {
        ...state,
        [action.name]: (state[action.name] || 0) + 1,
      };

    default:
      return state;
  }
};

const producers = (state = initialState, action) => ({
  list: sellersList(state.list, action),
  quantity: sellersQuantity(state.quantity, action),
});

export default producers;
