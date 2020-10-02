module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('files', 'menu', {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('files', 'menu');
  }
};
