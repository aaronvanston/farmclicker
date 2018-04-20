import products from '~/data/products';

export default (state = products || [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}