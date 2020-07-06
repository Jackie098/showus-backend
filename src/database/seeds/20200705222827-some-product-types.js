module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('product_types', [
      {
        name: 'cachorro-quente',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'quentinha',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'espetinho',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'sorvete',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('product_types', null, {});
  }
};
