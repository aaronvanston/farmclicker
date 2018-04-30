import React from 'react';

import config from '~/config';

import styles from './Header.css';

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title}>~/FarmClicker</h1>
    <span className={styles.version}>v{config.version}</span>
  </header>
);

export default Header;
