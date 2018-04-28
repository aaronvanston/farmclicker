import React from 'react';
import { connect } from 'react-redux';

import styles from './ShopList.css';

const calculatePrice = (price, qty, multiplier) => (
  (qty === 0)
    ? price
    : (price * (multiplier ** qty)));

const ShopList = ({ handleClick, items, quantity }) => (
  <div className={styles.wrapper}>
    {items.map((item) => {
      const price = calculatePrice(item.buyPrice, quantity[item.name] || 0, item.multiplier);
      const formattedPrice = price.toLocaleString('en', { maximumFractionDigits: 2 });
      return (
        <div key={item.name}>
          <p>Name: {item.name}</p>
          <p>Price: ${formattedPrice}</p>
          <p>Quantity: {quantity[item.name] || 0}</p>
          <hr />
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
