import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ShopList from '~/components/ShopList/ShopList';
import producersCatalogue from '~/catalogue/producers';
import { addProducer } from '~/actions';

import styles from './Shop.css';

const getProducerList = productType =>
  producersCatalogue.filter(producer =>
    producer.produces.name === productType);


const Shop = ({ store, handleAddProducer }) => (
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
            <ShopList handleClick={handleAddProducer} items={getProducerList('EGGS')} />
          </TabPanel>
          <TabPanel>
            <ShopList handleClick={() => console.log('seller')} items={getProducerList('EGGS')} />
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

const mapDispatchToProps = dispatch => ({
  handleAddProducer: (name, price) => { dispatch(addProducer(name, price)); },
});


export default connect(mapStateToProps, mapDispatchToProps)(Shop);

