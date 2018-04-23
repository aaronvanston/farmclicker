import React from 'react';

import styles from './Header.css';

// TODO: Format number with commas
// TODO: animate number

const Header = ({ total }) => (
  <header className={styles.header}>
    <h1 className={styles.title}>~/Farmclicker</h1>
    <div className={styles.total}>${total || 0}</div>
  </header>
);

export default Header;
