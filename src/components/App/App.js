import React from 'react';
import { connect } from 'react-redux';

import { addProducer, addProduct, sellProduct } from '~/actions';
import * as constants from '~/constants';

import Header from '~/components/Header/Header';
import ProductCard from '~/components/ProductCard/ProductCard';
import ProductGrid from '~/components/ProductGrid/ProductGrid';

const App = ({
  products, producers, inventory, handleAddProducer, handleAddProduct, handleSellProduct,
}) => (
  <div>
    <Header total={inventory.totalMoney} />
    <ProductGrid>
      <ProductCard name="Eggs" quantity={1} />
      <ProductCard name="Eggs" quantity={1} />
      <ProductCard name="Eggs" quantity={1} />
    </ProductGrid>


    <div>
      Products:
      <button onClick={() => handleAddProduct(constants.products.EGGS)}>Add Eggs</button>
      <button onClick={() => handleAddProduct(constants.products.EGGS, 0.5)}>Add Egg 0.5</button>
      <button
        onClick={() => handleSellProduct(constants.products.EGGS)}
        disabled={!(products.quantity[constants.products.EGGS] >= 1)}
      >
        Sell Eggs
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
