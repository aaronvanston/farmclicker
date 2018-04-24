import React from 'react';

import styles from './ProductCard.css';

const ProductCard = ({ name, quantity }) => (
  <div className={styles.card} role="button">
    <div className={styles.body}>
      <div className={styles.name}>[{name}]</div>
      <span className={styles.quantity}>{quantity}</span>
    </div>
    <div className={styles.actionBar}>
      <button className={styles.actionBtn}>Collect</button>
      <button className={styles.actionBtn}>Sell</button>
    </div>
  </div>
)

export default ProductCard;
