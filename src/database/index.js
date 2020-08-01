import Sequelize from 'sequelize';

import Company from '../app/models/Company';
import File from '../app/models/File';
import ProductType from '../app/models/ProductType';
import Product from '../app/models/Product';
import Size from '../app/models/Size';
import Menu from '../app/models/Menu';
import Sorter from '../app/models/Sorter';

import databaseConfig from '../config/database';

const models = [Company, File, ProductType, Product, Size, Menu, Sorter];

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
