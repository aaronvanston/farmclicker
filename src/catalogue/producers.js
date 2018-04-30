import { producers, products } from '~/constants';

const producersCatalogue = [
  {
    name: producers.CHICKEN,
    buyPrice: 10,
    multiplier: 1.05,
    products: {
      name: products.EGGS,
      rate: 0.1,
    },
  }, {
    name: producers.CHICKEN_COOP,
    buyPrice: 100,
    multiplier: 1.07,
    products: {
      name: products.EGGS,
      rate: 1,
    },
  }, {
    name: producers.CHICKEN_BARN,
    buyPrice: 1000,
    multiplier: 1.07,
    products: {
      name: products.EGGS,
      rate: 5,
    },
  }, {
    name: producers.FIELD_OF_WILD_CHICKENS,
    buyPrice: 3000,
    multiplier: 1.07,
    products: {
      name: products.EGGS,
      rate: 10,
    },
  }, {
    name: producers.CHICKEN_RESORT,
    buyPrice: 10000,
    multiplier: 1.07,
    products: {
      name: products.EGGS,
      rate: 100,
    },
  },
];

export default producersCatalogue;

