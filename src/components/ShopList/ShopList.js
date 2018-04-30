import React from 'react';
import { connect } from 'react-redux';

import ShopItem from '~/components/ShopItem/ShopItem';

const calculatePrice = (price, qty, multiplier) => (
  (qty === 0)
    ? price
    : (price * (multiplier ** qty)));


const ShopList = ({ handleClick, items, quantity }) => (
  <div>
    {items.map((item) => {
      const price =
        Math.ceil(calculatePrice(item.buyPrice, quantity[item.name] || 0, item.multiplier));

      const formattedPrice = price.toLocaleString('en');
      return (
        <ShopItem
          handleClick={handleClick}
          key={item.name}
          name={item.name}
          price={formattedPrice}
          rate={item.produces.rate}
          qty={quantity[item.name] || 0}
          product={item.produces.name}
        />
      );
    })}
  </div>
);

const mapStateToProps = state => ({
  total: state.inventory.TotalMoney,
  quantity: state.producers.quantity || 0,
});

export default connect(mapStateToProps)(ShopList);
