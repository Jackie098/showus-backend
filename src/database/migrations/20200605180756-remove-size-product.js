module.exports = {
  up: (queryInterface) => {
    return queryInterface.removeColumn('products', 'size');
  },

  down: () => {},
};
