import React from 'react';
import { connect } from 'react-redux';

import styles from './TotalMoney.css';

// TODO: animate number

const TotalMoney = ({ total }) => (
  <div className={styles.wrapper}>
    <span className={styles.main}>${total.toLocaleString('en')}</span>
    <span className={styles.sub}>[total]</span>
  </div>
);

const mapStateToProps = state => ({
  total: state.inventory.totalMoney,
});


export default connect(mapStateToProps)(TotalMoney);
