import { combineReducers } from 'redux';

import inventory from './inventory';
import producers from './producers';
import sellers from './sellers';
import products from './products';
import store from './store';

const rootReducer = combineReducers({
  inventory,
  producers,
  sellers,
  products,
  store,
});

export default rootReducer;
