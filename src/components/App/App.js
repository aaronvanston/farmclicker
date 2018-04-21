import React from 'react';
import { connect } from 'react-redux';

import { addProducer, addProduct } from '~/actions';
import * as constants from '~/constants';

const App = ({ products, producers, inventory, handleAddProducer, handleAddProduct }) => (
  <div>
    <div>
      Products:
      <button onClick={() => handleAddProduct(constants.products.EGG)}>Add Egg</button>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>

    <div>
      Products:
      <button onClick={() => handleAddProducer(constants.producers.CHICKEN)}>Add Chicken</button>
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
  handleAddProduct: (name) => { dispatch(addProduct(name)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
