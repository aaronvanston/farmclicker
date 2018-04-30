import { sellers, products } from '~/constants';

const sellersCatalogue = [
  {
    name: sellers.FOR_SALE_SIGN,
    buyPrice: 10,
    multiplier: 1.05,
    products: {
      name: products.EGGS,
      rate: 0.1,
    },
  }, {
    name: sellers.NEWSPAPER_AD,
    buyPrice: 50,
    multiplier: 1.07,
    products: {
      name: products.EGGS,
      rate: 1,
    },
  }, {
    name: sellers.CRAIGSLIST_AD,
    buyPrice: 75,
    multiplier: 1.05,
    products: {
      name: products.EGGS,
      rate: 5,
    },
  }, {
    name: sellers.CHICKEN_DEALER,
    buyPrice: 100,
    multiplier: 1.07,
    products: {
      name: products.EGGS,
      rate: 7,
    },
  }, {
    name: sellers.SHOPKEEPER,
    buyPrice: 200,
    multiplier: 1.07,
    products: {
      name: products.EGGS,
      rate: 10,
    },
  },
];

export default sellersCatalogue;

