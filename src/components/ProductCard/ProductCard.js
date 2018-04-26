import React from 'react';
import { connect } from 'react-redux';

import { addProduct, sellProduct } from '~/actions';

import styles from './ProductCard.css';

const ProductCard = ({
 name, quantity, handleAdd, handleSell 
}) => (
  <div className={styles.card}>
    <div className={styles.body} role="button" tabIndex="-1">
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
});

export default connect(() => {}, mapDispatchToProps)(ProductCard);
