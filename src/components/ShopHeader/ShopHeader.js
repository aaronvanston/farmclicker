import React from 'react';
import { connect } from 'react-redux';
import find from 'lodash/find';

import productsCatalogue from '~/catalogue/products';

import styles from './ShopHeader.css';

const getSellingCost = (name, catalogue) => find(catalogue, { name }).sellPrice;

const formatRate = amount => `${amount.toLocaleString('en', {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
})}sec`;

const ShopHeader = ({ store, products }) => (
  <div className={styles.wrapper}>
    <span className={styles.sub}>STORE</span>
    <span className={styles.title}>[{store.name.toLowerCase()}]</span>
    <div className={styles.detailsWrapper}>
      <div className={styles.detailsItem}>
        Sell price: ${getSellingCost(store.name, productsCatalogue).toLocaleString('en', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className={styles.detailsItem}>
        Quantity: {Math.floor(products.quantity[store.name].qty)}
      </div>
      <div className={styles.detailsItem}>
        Producing rate: {formatRate(products.quantity[store.name].producingAmount || 0)}
      </div>
      <div className={styles.detailsItem}>
        Selling rate: {formatRate(products.quantity[store.name].sellingAmount || 0)}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  store: state.store,
  products: state.products,
});

export default connect(mapStateToProps)(ShopHeader);

