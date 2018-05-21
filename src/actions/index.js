import { actionTypes } from '~/constants';

// Product Actions
export const addProduct = (name, amount) =>
  ({ type: actionTypes.ADD_PRODUCT, name, amount });

export const sellProduct = (name, amount) =>
  ({ type: actionTypes.SELL_PRODUCT, name, amount });

// Store Actions
export const openStore = name =>
  ({ type: actionTypes.OPEN_STORE, name });

export const closeStore = () =>
  ({ type: actionTypes.CLOSE_STORE });

// Producer Actions
export const addProducer = (name, price) =>
  ({ type: actionTypes.ADD_PRODUCER, name, price });

// Seller Actions
export const addSeller = (name, price) =>
  ({ type: actionTypes.ADD_SELLER, name, price });
