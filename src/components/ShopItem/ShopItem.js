import React from 'react';

import styles from './ShopItem.css';

const ShopItem = ({name, price, rate, qty, product}) => (
  <div className={styles.item}>
    <div className={styles.header}>
      <div className={styles.name}>/{name.toLowerCase()}</div>
      <div>${price}</div>
    </div>
    <div className={styles.subSection}>
      <span>x<span className={styles.property}>{qty}</span></span>
      <span> at </span>
      <span>
        <span className={styles.property}>{rate}</span>
        <span className={styles.rate}>{` [${product.toLowerCase()}]/s`}</span>
      </span>
    </div>
  </div>
);


export default ShopItem;
