'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('products', [
      {
        type_id: 17,
        size_id: 21,
        name: 'Big Chicken',
        description: 'frango em cubos',
        price: '11',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 17,
        size_id: 21,
        name: 'Dog Calabresa',
        description: 'calabresa em cubos',
        price: '12',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 17,
        size_id: 21,
        name: 'Majestoso',
        description: 'carne moída',
        price: '12',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 17,
        size_id: 21,
        name: 'Big Chicken',
        description: 'frango em cubos',
        price: '11',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 19,
        size_id: 21,
        name: 'Carne',
        description: 'carne bovina',
        price: '12',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 19,
        size_id: 21,
        name: 'Filé',
        description: 'filé bovino',
        price: '14',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        type_id: 20,
        size_id: 21,
        name: 'chocolate',
        description: 'sorvete sabor creme com recheio de chocolate',
        price: '8',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('products', null, {});

  }
};
