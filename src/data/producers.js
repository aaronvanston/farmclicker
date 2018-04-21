import { producers, products } from '~/constants';

const producersData = [
  {
    name: producers.CHICKEN,
    buyPrice: 10000,
    multiplier: 4,
    produces: [
      { [products.EGG]: { rate: 0.1 } },
    ],
  },
];

export default producersData;

