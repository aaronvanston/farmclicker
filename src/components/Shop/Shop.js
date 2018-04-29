import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ShopList from '~/components/ShopList/ShopList';
import producersCatalogue from '~/catalogue/producers';

import styles from './Shop.css';

const getProducerList = productType =>
  producersCatalogue.filter(producer =>
    producer.produces.name === productType);


const Shop = ({store}) => (
  <div className={styles.wrapper}>
    {store.name ? (
      <Fragment >
        <div className={styles.titleWrapper}>
          <span className={styles.sub}>STORE</span>
          <span className={styles.title}>[{store.name.toLowerCase()}]</span>
        </div>

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
      </Fragment>
    ) : (
      <div className={styles.noStore}>Select a product on the left to shop for upgrades.</div>
    )}
  </div>
);

const mapStateToProps = state => ({
  store: state.store,
});

export default connect(mapStateToProps)(Shop);

