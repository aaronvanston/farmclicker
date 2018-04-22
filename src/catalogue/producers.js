import { producers, products } from '~/constants';

const producersCatalogue = [
  {
    name: producers.CHICKEN,
    buyPrice: 10000,
    multiplier: 4,
    produces: [
      {
        product: products.EGG,
        rate: 0.1,
      },
    ],
  }, {
    name: producers.COW,
    buyPrice: 10000,
    multiplier: 4,
    produces: [
      {
        product: products.MILK,
        rate: 0.2,
      },
    ],
  },
];

export default producersCatalogue;

