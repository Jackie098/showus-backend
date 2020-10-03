module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('files', 'menu_type', {
      type: Sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
      references: { model: 'product_types', key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('files', 'menu_type');
  }
};
