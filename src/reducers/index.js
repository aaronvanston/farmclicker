import { combineReducers } from 'redux';

import inventory from './inventory';
import producers from './producers';
import products from './products';

export const rootReducer = combineReducers({
  inventory,
  producers,
  products,
});
