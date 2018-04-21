import find from 'lodash/find';

import { actionTypes } from '~/constants';
import { products } from '~/data';

const initialState = {
  totalMoney: 0,
};

const getProductValue = (productList, name) =>
  find(productList, { name }).sellPrice;

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SELL_PRODUCT:
      return {
        ...state,
        totalMoney: state.totalMoney + getProductValue(products, action.name),
      };

    default:
      return state;
  }
};
