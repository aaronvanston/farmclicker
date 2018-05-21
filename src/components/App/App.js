import React from 'react';
import { connect } from 'react-redux';

import config from '~/config';
import { addProducer, addProduct, sellProduct } from '~/actions';
import * as constants from '~/constants';

import Header from '~/components/Header/Header';
import ProductCard from '~/components/ProductCard/ProductCard';
import ProductGrid from '~/components/ProductGrid/ProductGrid';
import TotalMoney from '~/components/TotalMoney/TotalMoney';
import Shop from '~/components/Shop/Shop';

import styles from './App.css';

const App = ({ products, inventory, store }) => (
  <div className={styles.wrapper}>
    <main className={styles.main}>
      <Header total={inventory.totalMoney} />

      <h2 className={styles.heading}>Catalogue</h2>
      <ProductGrid>
        {products.list.map(product => (
          <ProductCard
            key={product}
            name={product}
            quantity={products.quantity[product].qty}
          />
        ))}
      </ProductGrid>
    </main>

    <aside className={styles.aside}>
      <TotalMoney />
      <Shop />
    </aside>

    {store.name &&
      <div className={styles.mobileShop}>
        <Shop />
      </div>
    }
    <span className={styles.version}>v{config.version}</span>
  </div>
);

const mapStateToProps = state => ({
  store: state.store,
  products: state.products,
  inventory: state.inventory,
});

export default connect(mapStateToProps)(App);
