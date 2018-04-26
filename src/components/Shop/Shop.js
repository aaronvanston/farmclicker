import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ShopList from '~/components/ShopList/ShopList';
import producersCatalogue from '~/catalogue/producers';

import './Shop.css';

const getProducerList = productType =>
  producersCatalogue.filter(producer =>
    producer.produces.some(produce =>
      produce.product === productType));

console.log(getProducerList('EGGS'));


const Shop = () => (
  <Tabs>
    <TabList>
      <Tab>Producers</Tab>
      <Tab>Sellers</Tab>
    </TabList>

    <TabPanel>
      <ShopList handlePurchase={i => console.log(i)} items={getProducerList('EGGS')} />
    </TabPanel>
    <TabPanel>
      <ShopList handlePurchase={i => console.log(i)} items={getProducerList('EGGS')} />
    </TabPanel>
  </Tabs>
);

export default Shop;

