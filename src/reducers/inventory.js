import find from 'lodash/find';

import { actionTypes } from '~/constants';
import { productsCatalogue } from '~/catalogue';

const initialState = {
  totalMoney: 0,
};

// Find the selling price of the produce
// Multiply it by the amount being sold
const getProductValue = (productList, name, amount) =>
  find(productList, { name }).sellPrice * amount;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELL_PRODUCT:
      return {
        ...state,
        totalMoney: state.totalMoney +
          getProductValue(productsCatalogue, action.name, ((action.amount >= 0) ? action.amount : 1)),
      };

    case actionTypes.ADD_SELLER:
    case actionTypes.ADD_PRODUCER:
      return {
        ...state,
        totalMoney: state.totalMoney - action.price,
      };

    default:
      return state;
  }
};
