import Sequelize, { Model } from 'sequelize';

export default class Size extends Model {
  static init(sequelize) {
    super.init(
      {
        initials: Sequelize.STRING,
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async (size) => {
      size.initials = size.initials.toUpperCase();
    });

    return this;
  }
}
