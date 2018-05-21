import React from 'react';

import styles from './ShopItem.css';

const ShopItem = ({name, formattedPrice, price, rate, qty, product, handleClick, disabled }) => (
  <button
    className={(qty >= 1) ? styles.purchasedItem : styles.item }
    onClick={() => handleClick(name, price)}
    disabled={disabled}
  >
    <div className={styles.header}>
      <div className={styles.name}>/{name.toLowerCase().split('_').join(' ')}</div>
      <div>${formattedPrice}</div>
    </div>
    <div className={styles.subSection}>
      <span>x<span className={styles.property}>{qty}</span></span>
      <span> at </span>
      <span>
        <span className={styles.property}>{rate}</span>
        <span>
          <span className={styles.rate}>{` [${product}]`.toLowerCase()}</span>
          /s
        </span>
      </span>
    </div>
  </button>
);


export default ShopItem;
