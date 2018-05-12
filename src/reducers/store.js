import { actionTypes } from '~/constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_STORE:
      return {
        ...state,
        name: action.name,
      };

    case actionTypes.CLOSE_STORE:
      return {
        ...state,
        name: undefined,
      };

    default:
      return state;
  }
};
