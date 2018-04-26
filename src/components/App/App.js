import React from 'react';
import { connect } from 'react-redux';


import { addProducer, addProduct, sellProduct } from '~/actions';
import * as constants from '~/constants';

import Header from '~/components/Header/Header';
import ProductCard from '~/components/ProductCard/ProductCard';
import ProductGrid from '~/components/ProductGrid/ProductGrid';
import TotalMoney from '~/components/TotalMoney/TotalMoney';
import Shop from '~/components/Shop/Shop';

import styles from './App.css';

const App = ({
  products, producers, inventory, handleAddProducer, handleAddProduct, handleSellProduct,
}) => (
  <div className={styles.wrapper}>
    <main className={styles.main}>
      <Header total={inventory.totalMoney} />
      <ProductGrid>
        {products.list.map(product => (
          <ProductCard name={product} quantity={products.quantity[product]} />
        ))}
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
      </div>
      <div>
        Producer:
        <button onClick={() => handleAddProducer(constants.producers.CHICKEN)}>Add Chicken</button>
        <button onClick={() => handleAddProducer(constants.producers.COW)}>Add Cow</button>
        <pre>{JSON.stringify(producers, null, 2)}</pre>
      </div>
    </main>

    <aside className={styles.aside}>
      <TotalMoney />
      <Shop />
    </aside>
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
