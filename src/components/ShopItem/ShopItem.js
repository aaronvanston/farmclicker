import React from 'react';

import styles from './ShopItem.css';

const ShopItem = ({name, formattedPrice, price, rate, qty, product, handleClick, disabled }) => (
  <button
    className={styles.item}
    onClick={() => handleClick(name, price)}
    disabled={disabled}
  >
    <div className={styles.header}>
      <div className={styles.name}>/{name.toLowerCase()}</div>
      <div>${formattedPrice}</div>
    </div>
    <div className={styles.subSection}>
      <span>x<span className={styles.property}>{qty}</span></span>
      <span> at </span>
      <span>
        <span className={styles.property}>{rate}</span>
        <span className={styles.rate}>{` [${product}]/s`.toLowerCase()}</span>
      </span>
    </div>
  </button>
);


export default ShopItem;
