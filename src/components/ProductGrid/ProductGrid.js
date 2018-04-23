import React from 'react';

import styles from './ProductGrid.css';

const ProductGrid = ({ children }) => (
  <div className={styles.grid}>
    {children}
  </div>
);

export default ProductGrid;
