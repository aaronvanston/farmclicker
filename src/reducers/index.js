import { combineReducers } from 'redux';

import inventory from './inventory';
import producers from './producers';
import products from './products';

const rootReducer = combineReducers({
  inventory,
  producers,
  products,
});

export default rootReducer;