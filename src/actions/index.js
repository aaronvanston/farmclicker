import { actionTypes } from '~/constants';

// Product Actions
export const addProduct = (name, amount = 1) =>
  ({ type: actionTypes.ADD_PRODUCT, name, amount });

export const sellProduct = name =>
  ({ type: actionTypes.SELL_PRODUCT, name });

export const openStore = name =>
  ({ type: actionTypes.OPEN_STORE, name });

// Producer Actions
export const addProducer = name =>
  ({ type: actionTypes.ADD_PRODUCER, name });
