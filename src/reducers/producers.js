import producers from '~/data/producers';

export default (state = producers || [], action) => {
  switch (action.type) {
    default:
      return state;
  }
}