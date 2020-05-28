import Sequelize, { Model } from 'sequelize';

export default class Company extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.TEXT,
        whatsapp: Sequelize.STRING,
        instagram: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

// export default Company;
