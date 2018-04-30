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

const App = ({products, inventory}) => (
  <div className={styles.wrapper}>
    <main className={styles.main}>
      <Header total={inventory.totalMoney} />

      <ProductGrid>
        {products.list.map(product => (
          <ProductCard
            key={product}
            name={product}
            quantity={products.quantity[product]}
          />
        ))}
      </ProductGrid>
    </main>

    <aside className={styles.aside}>
      <TotalMoney />
      <Shop />
    </aside>
  </div>
);

const mapStateToProps = state => ({
  products: state.products,
  inventory: state.inventory,
});

export default connect(mapStateToProps)(App);
