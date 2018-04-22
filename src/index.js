import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import reducer from '~/reducers';
import App from '~/components/App/App';
import GameBoard from '~/components/GameBoard/GameBoard';

import './styles/index.global.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  enableBatching(reducer),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const rootEl = document.getElementById('root');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <GameBoard>
        <App />
      </GameBoard>
    </Provider>
  </AppContainer>,
  rootEl,
);
