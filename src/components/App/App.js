import React from 'react';
import { connect } from 'react-redux';

import { addProducer, addProduct, sellProduct } from '~/actions';
import * as constants from '~/constants';

const App = ({
  products, producers, inventory, handleAddProducer, handleAddProduct, handleSellProduct,
}) => (
  <div>
    <div>
      Products:
      <button onClick={() => handleAddProduct(constants.products.EGG)}>Add Egg</button>
      <button onClick={() => handleAddProduct(constants.products.EGG, 0.5)}>Add Egg 0.5</button>
      <button
        onClick={() => handleSellProduct(constants.products.EGG)}
        disabled={!(products.quantity[constants.products.EGG] >= 1)}
      >
        Sell Egg
      </button>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>

    <div>
      Producer:
      <button onClick={() => handleAddProducer(constants.producers.CHICKEN)}>Add Chicken</button>
      <button onClick={() => handleAddProducer(constants.producers.COW)}>Add Cow</button>
      <pre>{JSON.stringify(producers, null, 2)}</pre>
    </div>

    <div>
      Inventory:
      <pre>{JSON.stringify(inventory, null, 2)}</pre>
    </div>
  </div>
);

const mapStateToProps = state => ({
  products: state.products,
  producers: state.producers,
  inventory: state.inventory,
});

const mapDispatchToProps = dispatch => ({
  handleAddProducer: (name) => { dispatch(addProducer(name)); },
  handleAddProduct: (name, amount) => { dispatch(addProduct(name, amount)); },
  handleSellProduct: (name) => { dispatch(sellProduct(name)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
