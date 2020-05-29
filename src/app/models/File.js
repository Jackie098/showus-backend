import Sequelize, { Model } from 'sequelize';

import fs from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

export default class File extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        size: Sequelize.BIGINT,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/files/${this.path}`;
          },
        },
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeDestroy', async (file) => {
      const fullPath = resolve(
        __dirname,
        '..',
        '..',
        '..',
        'tmp',
        'uploads',
        file.path
      );

      // if (process.env.STORAGE_TYPE === 'local') {
      return promisify(fs.unlink)(fullPath);
      // }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, { foreignKey: 'company_id', as: 'company' });
  }
}
