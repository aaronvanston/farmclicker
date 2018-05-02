import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';

import config from '~/config';
import { addProduct, sellProduct } from '~/actions';
import { producersCatalogue, sellersCatalogue } from '~/catalogue';

const refineStore = (store, catalogue) => (
  catalogue.filter(item => (
    (store.quantity[item.name] >= 1)
  )).map(item => ({
    name: item.products.name,
    amount: item.products.rate * store.quantity[item.name],
  }))
);

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
    const {
      producers,
      handleAddProducts,
      handleSell,
      products,
      sellers,
      handleSellProducts,
    } = this.props;

    const produced = refineStore(producers, producersCatalogue);
    handleAddProducts(produced);

    const sold = refineStore(sellers, sellersCatalogue);
    handleSellProducts(sold);
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
  handleSellProducts: (products) => {
    dispatch(batchActions(products.map(prod =>
      sellProduct(prod.name, prod.amount))));
  },
});


const mapStateToProps = state => ({
  products: state.products,
  producers: state.producers,
  sellers: state.sellers,
  inventory: state.inventory,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
