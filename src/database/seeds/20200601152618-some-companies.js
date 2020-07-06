module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('companies', [
      {
        name: 'Crazy Dog',
        description: 'Hot dogs gurmet',
        whatsapp: '89994138240',
        instagram: 'crazydog.flo',
        email: 'crazy.dog.gourmet@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Crazy Pizza',
        description: 'A melhor pizza da cidade',
        whatsapp: '89994825466',
        instagram: 'crazypizza.oficial',
        email: 'chaylonleal@hotmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Batata quente',
        description: 'Para massas no geral, estamos aqui',
        whatsapp: '89999135510',
        instagram: 'batatinha.flo',
        email: 'batata_quenteOficial@hotmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Rei do Bambaguera',
        description: 'Hamburgueres e tudo o que há de bom',
        whatsapp: '89999772450',
        instagram: 'theKing',
        email: 'kingdomTMJ@gmail.com',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('companies', null, {});
  },
};
