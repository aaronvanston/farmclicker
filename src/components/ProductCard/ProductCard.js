import React from 'react';
import { connect } from 'react-redux';

import { addProduct, sellProduct, openStore } from '~/actions';

import styles from './ProductCard.css';

const ProductCard = ({
  name, quantity, handleAdd, handleSell, handleOpenStore,
}) => (
  <div className={styles.card}>
    <button
      className={styles.headerBtn}
      onClick={() => handleOpenStore(name)}
    >
      Store
    </button>
    <div className={styles.body} >
      <div className={styles.name}>[{name.toLowerCase()}]</div>
      <span className={styles.quantity}>{Math.floor(quantity)}</span>
    </div>
    <div className={styles.actionBar}>
      <button className={styles.actionBtn} onClick={() => handleAdd(name)}>Collect</button>
      <button
        className={styles.actionBtn}
        onClick={() => handleSell(name)}
        disabled={!(quantity >= 1)}
      >
        Sell
      </button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  handleAdd: (name) => { dispatch(addProduct(name)); },
  handleSell: (name) => { dispatch(sellProduct(name)); },
  handleOpenStore: (name) => { dispatch(openStore(name)); },
});

export default connect(() => ({}), mapDispatchToProps)(ProductCard);
