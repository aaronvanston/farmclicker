import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ShopList from '~/components/ShopList/ShopList';
import ShopHeader from '~/components/ShopHeader/ShopHeader';
import producersCatalogue from '~/catalogue/producers';
import sellersCatalogue from '~/catalogue/sellers';
import { addProducer, addSeller, closeStore } from '~/actions';

import styles from './Shop.css';

const getShopList = (catalogue, productType) =>
  catalogue.filter(item =>
    item.products.name === productType);

const Shop = ({ store, total, handleAddProducer, handleAddSeller, producerQuantity, sellerQuantity, handleCloseStore }) => (
  <div className={styles.wrapper}>
    {store.name ? (
      <Fragment >
        <button
          className={styles.closeBtn}
          onClick={() => handleCloseStore()}
        >
          CLOSE
        </button>

        <ShopHeader />

        <Tabs>
          <TabList>
            <Tab>Producers</Tab>
            <Tab>Sellers</Tab>
          </TabList>

          <TabPanel>
            <ShopList
              handleClick={handleAddProducer}
              total={total}
              quantity={producerQuantity}
              items={getShopList(producersCatalogue, store.name)}
            />
          </TabPanel>
          <TabPanel>
            <ShopList
              handleClick={handleAddSeller}
              total={total}
              quantity={sellerQuantity}
              items={getShopList(sellersCatalogue, store.name)}
            />
          </TabPanel>
        </Tabs>
      </Fragment>
    ) : (
      <div className={styles.noStore}>Select a product from the catalogue to shop for upgrades.</div>
    )}
  </div>
);

const mapStateToProps = state => ({
  store: state.store,
  total: state.inventory.totalMoney,
  producerQuantity: state.producers.quantity,
  sellerQuantity: state.sellers.quantity,
});

const mapDispatchToProps = dispatch => ({
  handleAddProducer: (name, price) => { dispatch(addProducer(name, price)); },
  handleAddSeller: (name, price) => { dispatch(addSeller(name, price)); },
  handleCloseStore: () => { dispatch(closeStore()); },
});


export default connect(mapStateToProps, mapDispatchToProps)(Shop);
