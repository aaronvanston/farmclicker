import { actionTypes } from '~/constants';

// Producer Actions
export const addProducer = name => ({ type: actionTypes.ADD_PRODUCER, name });

// Product Actions
export const addProduct = name => ({ type: actionTypes.ADD_PRODUCT, name });
