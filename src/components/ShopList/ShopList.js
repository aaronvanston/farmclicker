import React from 'react';

import ShopItem from '~/components/ShopItem/ShopItem';

const calculatePrice = (price, qty, multiplier) => (
  (qty === 0)
    ? price
    : (price * (multiplier ** qty)));

const ShopList = ({ handleClick, items, quantity, total }) => (
  <div>
    {items.map((item) => {
      const price = Math.ceil(calculatePrice(
        item.buyPrice,
        quantity[item.name] || 0,
        item.multiplier,
      ));

      const isDisabled = (totalIncome, itemPrice) => (!(itemPrice >= totalIncome));
      const formattedPrice = price.toLocaleString('en');

      return (
        <ShopItem
          handleClick={handleClick}
          key={item.name}
          name={item.name}
          formattedPrice={formattedPrice}
          price={price}
          rate={item.products.rate}
          qty={quantity[item.name] || 0}
          product={item.products.name}
          disabled={isDisabled(price, total)}
        />
      );
    })}
  </div>
);

export default ShopList;
