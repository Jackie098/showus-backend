
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('sorters', [
      {
        name: "Novos",
        description: "Ingressados recentemente no projeto",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Ord. alfabética",
        description: "A, B, C, D, E, etc...",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mais vizitados",
        description: "Com mais cliques e visualização",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Mais curtidos",
        description: "Pessoas que pediram numa determinada empresa e aprovaram a qualidade.",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('sorters', null, {});
  }
};
