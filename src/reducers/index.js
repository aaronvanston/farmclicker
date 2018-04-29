import { combineReducers } from 'redux';

import inventory from './inventory';
import producers from './producers';
import products from './products';
import store from './store';

const rootReducer = combineReducers({
  inventory,
  producers,
  products,
  store,
});

export default rootReducer;
