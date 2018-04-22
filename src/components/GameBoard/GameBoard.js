import React, { Component, Fragment } from 'react';

import config from '~/config';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.updateGameBoard = this.updateGameBoard.bind(this);
  }

  componentDidMount() {
    // TODO move to use request animation frame
    this.interval = setInterval(
      () => this.updateGameBoard(),
      config.tickRate || 1000,
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateGameBoard() {
    console.log('tick');
    // Dispatch produce action
    // dispatch sell action
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

export default GameBoard;
