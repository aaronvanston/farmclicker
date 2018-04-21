import { actionTypes } from '~/constants';

// Producer Actions
export const addProducer = name => ({ type: actionTypes.ADD_PRODUCER, name });

// Product Actions
export const addProduct = name => ({ type: actionTypes.ADD_PRODUCT, name });
export const sellProduct = name => ({ type: actionTypes.SELL_PRODUCT, name });
