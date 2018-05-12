import React from 'react';

import styles from './Header.css';

const Header = ({ total }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>~/Farmclicker</h1>
    <span className={styles.total}>
      ${total.toLocaleString('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })}
    </span>
  </header>
);

export default Header;
