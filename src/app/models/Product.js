import Sequelize, { Model } from 'sequelize';

export default class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        price: Sequelize.DECIMAL,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.ProductType, { foreignKey: 'type_id', as: 'type' });
    this.belongsTo(models.Size, { foreignKey: 'size_id', as: 'size' });
  }
}
