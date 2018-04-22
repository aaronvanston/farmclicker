import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import config from '~/config';
import { addProduct } from '~/actions';
import { producersCatalogue } from '~/catalogue';

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
    const { producers, handleAddProducts } = this.props;

    const produced = [];

    producersCatalogue.forEach((item) => {
      const producerQuantity = producers.quantity[item.name];

      if (producerQuantity >= 1) {
        item.produces.forEach((producing) => {
          produced.push({
            name: producing.product,
            amount: producerQuantity * producing.rate,
          });
        });
      }
    });

    if (produced.length >= 1) {
      handleAddProducts(produced);
    }
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleAddProducts: (products) => {
    dispatch(batchActions(products.map(prod =>
      addProduct(prod.name, prod.amount))));
  },
});


const mapStateToProps = state => ({
  products: state.products,
  producers: state.producers,
  inventory: state.inventory,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
