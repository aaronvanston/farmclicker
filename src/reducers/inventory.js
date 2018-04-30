import find from 'lodash/find';

import { actionTypes } from '~/constants';
import { productsCatalogue } from '~/catalogue';

const initialState = {
  totalMoney: 100,
};

const getProductValue = (productList, name) =>
  find(productList, { name }).sellPrice;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELL_PRODUCT:
      return {
        ...state,
        totalMoney: state.totalMoney + getProductValue(productsCatalogue, action.name),
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
