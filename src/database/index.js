import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import File from '../app/models/File';
import ProductType from '../app/models/ProductType';
import Product from '../app/models/Product';
import Size from '../app/models/Size';

import databaseConfig from '../config/database';

const models = [Company, File, ProductType, Product, Size];

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
