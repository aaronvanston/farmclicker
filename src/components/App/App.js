import React from 'react';
import { connect } from 'react-redux';

const App = ({ products, producers, inventory }) => (
  <div>
    <div>
      Products:
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </div>

    <div>
      Products:
      <pre>{JSON.stringify(producers, null, 2)}</pre>
    </div>

    <div>
      Products:
      <pre>{JSON.stringify(inventory, null, 2)}</pre>
    </div>
  </div>
);

const mapStateToProps = state => ({
  products: state.products,
  producers: state.producers,
  inventory: state.inventory,
});

export default connect(mapStateToProps)(App);
