import { Model } from 'sequelize';

export default class Menu extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
    this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  }
}
