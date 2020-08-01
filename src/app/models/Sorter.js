import Sequelize, { Model } from 'sequelize';

export default class Sorter extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
      },
      {
        sequelize,
      })

    return this;
  }
}
