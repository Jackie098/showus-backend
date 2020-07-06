module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('sizes', [
      {
        initials: 'UNICO',
        name: 'unico',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        initials: 'P',
        name: 'pequeno',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        initials: 'M',
        name: 'médio',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        initials: 'G',
        name: 'grande',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        initials: 'F',
        name: 'família',
        description: '',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('sizes', null, {});

  }
};
