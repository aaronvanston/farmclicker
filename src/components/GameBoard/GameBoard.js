import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import config from '~/config';
import { produceProducts, addProduct } from '~/actions';
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
    const { producers, handleProduceProducts, handleAddProduct } = this.props;

    const produced = [];

    producersCatalogue.forEach((item) => {
      const producerQuantity = producers.quantity[item.name];

      if (producerQuantity >= 1) {
        item.produces.forEach((producing) => {
          produced.push({
            name: producing.product,
            qtyToAdd: producerQuantity * producing.rate,
          });
        });
      }
    });

    if (produced.length >= 1) {
      // TODO refactor to dispatch with array rather than individually.
      // Maybe use https://github.com/manaflair/redux-batch
      // https://github.com/tshelburne/redux-batched-actions
      // handleProduceProducts(produced);
      produced.forEach(produce => handleAddProduct(produce.name, produce.qtyToAdd));
    }
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

const mapDispatchToProps = dispatch => ({
  handleProduceProducts: (produced) => { dispatch(produceProducts(produced)); },
  handleAddProduct: (name, amount) => { dispatch(addProduct(name, amount)); },
});


const mapStateToProps = state => ({
  products: state.products,
  producers: state.producers,
  inventory: state.inventory,
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
