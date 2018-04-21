import { actionTypes } from '~/constants';

export const initialState = {
  list: [],
  quantity: {},
};

const producersList = (state = initialState.list, action) => {
  const index = state.indexOf(action.name);
  switch (action.type) {
    case actionTypes.ADD_PRODUCER:
      if (index !== -1) {
        return state;
      }
      return [...state, action.name];

    default:
      return state;
  }
};

const producersQuantity = (state = initialState.quantity, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCER:
      return {
        ...state,
        [action.name]: (state[action.name] || 0) + 1,
      };

    default:
      return state;
  }
};

const producers = (state = initialState, action) => ({
  list: producersList(state.list, action),
  quantity: producersQuantity(state.quantity, action),
});

export default producers;
