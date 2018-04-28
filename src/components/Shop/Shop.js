import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import find from 'lodash/find';

import ShopList from '~/components/ShopList/ShopList';
import producersCatalogue from '~/catalogue/producers';

import './Shop.css';

// const getProducerList = productType =>
//   producersCatalogue.filter(producer =>
//     producer.produces.some(produce =>
//       produce.product === productType));

const getProducerList = productType =>
  producersCatalogue.filter(producer =>
    producer.produces.name === productType);

console.log(getProducerList('EGGS'));


const Shop = () => (
  <Tabs>
    <TabList>
      <Tab>Producers</Tab>
      <Tab>Sellers</Tab>
    </TabList>

    <TabPanel>
      <ShopList handleClick={i => console.log(i)} items={getProducerList('EGGS')} />
    </TabPanel>
    <TabPanel>
      <ShopList handleClick={i => console.log(i)} items={getProducerList('EGGS')} />
    </TabPanel>
  </Tabs>
);

export default Shop;

