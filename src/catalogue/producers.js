import { producers, products } from '~/constants';

const producersCatalogue = [
  {
    name: producers.CHICKEN,
    buyPrice: 10,
    multiplier: 1.05,
    produces: {
      name: products.EGGS,
      rate: 0.1,
    },
  }, {
    name: producers.COW,
    buyPrice: 10,
    multiplier: 1.10,
    produces: {
      name: products.EGGS,
      rate: 1,
    },
  }, {
    name: producers.COW,
    buyPrice: 10,
    multiplier: 1.10,
    produces: {
      name: products.MILK,
      rate: 0.2,
    },
  },
];

export default producersCatalogue;

