import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import File from '../app/models/File';
import ProductType from '../app/models/ProductType';

import databaseConfig from '../config/database';

const models = [Company, File, ProductType];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
