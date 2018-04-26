import React from 'react';
import { connect } from 'react-redux';

import styles from './ShopList.css';

const ShopList = ({ handleClick, items }) => console.log(items) || (
  <div className={styles.wrapper}>
    {items.map(item => (
      <div key={item.name}>
        <p>Name: {item.name}</p>
        <p>Price: {item.buyPrice}</p>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  total: state.inventory.TotalMoney,
});

export default connect(mapStateToProps)(ShopList);
