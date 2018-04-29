import React from 'react';
import { connect } from 'react-redux';

import styles from './ShopList.css';

const calculatePrice = (price, qty, multiplier) => (
  (qty === 0)
    ? price
    : (price * (multiplier ** qty)));

const Divider = () => <span className={styles.divider}> | </span>;

const ShopList = ({ handleClick, items, quantity }) => (
  <div className={styles.wrapper}>

    {items.map((item) => {
      const price =
        Math.ceil(calculatePrice(item.buyPrice, quantity[item.name] || 0, item.multiplier));

      const formattedPrice = price.toLocaleString('en');
      return (
        <div key={item.name} className={styles.item}>
          <span className={styles.name}>/{item.name.toLowerCase()}</span>
          <Divider />
          <span className={styles.cost}>${formattedPrice}</span>
          <Divider />
          <span className={styles.qty}>{quantity[item.name] || 0}</span>
        </div>
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  total: state.inventory.TotalMoney,
  quantity: state.producers.quantity || 0,
});

export default connect(mapStateToProps)(ShopList);
