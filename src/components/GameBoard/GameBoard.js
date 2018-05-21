import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { batchActions } from 'redux-batched-actions';
import groupBy from 'lodash/groupBy';
import sumBy from 'lodash/sumBy';
import map from 'lodash/map';

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

// Create new object with grouped items based on name
// map over type
// return one object wil full amount
const mergeActions = array => (
  map(
    groupBy(array, 'name'),
    (items, name) => ({
      name,
      amount: sumBy(items, 'amount'),
    }),
  )
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

    const produced = mergeActions(refineStore(producers, producersCatalogue));
    handleAddProducts(produced);

    const sold = mergeActions(refineStore(sellers, sellersCatalogue));
    const maxSell = sold.map((item) => {
      const availableProducts = products.quantity[item.name].qty;
      const productAmount = item.amount;

      // if amount requested to sell is greater than amount owned
      // return amount owned (max sell)
      return {
        name: item.name,
        amount: (productAmount > availableProducts) ? availableProducts : productAmount,
      };
    });
    handleSellProducts(maxSell);
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
