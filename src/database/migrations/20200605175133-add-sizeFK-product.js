module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'size_id', {
      type: Sequelize.INTEGER,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('products', 'size_id');
  },
};
