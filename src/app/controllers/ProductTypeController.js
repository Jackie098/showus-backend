import * as Yup from 'yup';

import ProductType from '../models/ProductType';

class ProductTypeController {
  async index(req, res) {
    const { page } = req.query;

    const productTypes = await ProductType.findAll({
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(productTypes);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name } = req.body;

    const typeExists = await ProductType.findOne({
      where: { name },
    });

    if (typeExists) {
      return res.status(400).json({ error: 'Product already exists' });
    }

    const newType = await ProductType.create(req.body);

    return res.json(newType);
  }

  async update(req, res) {
    return res.json();
  }

  async delete(req, res) {
    return res.json();
  }
}

export default new ProductTypeController();
