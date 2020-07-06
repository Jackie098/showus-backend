module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('menus', [
      {
        company_id: 29,
        product_id: 15,
      },
      {
        company_id: 29,
        product_id: 16,
      },
      {
        company_id: 29,
        product_id: 17,
      },
      {
        company_id: 29,
        product_id: 18,
      },
      {
        company_id: 32,
        product_id: 19,
      },
      {
        company_id: 32,
        product_id: 20,
      },
      {
        company_id: 31,
        product_id: 21,
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('menus', null, {});
  }
};
