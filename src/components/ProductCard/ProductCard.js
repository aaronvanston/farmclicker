import React from 'react';

import styles from './ProductCard.css';

const ProductCard = ({ name, quantity }) => (
  <div className={styles.card}>
    <div className={styles.name}>{name}</div>
    <span className={styles.name}>{quantity}</span>
  </div>
)

export default ProductCard;
