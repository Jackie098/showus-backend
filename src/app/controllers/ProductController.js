import * as Yup from 'yup';

import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    const { page } = req.query;

    const products = await Product.findAll({
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(products);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      type_id: Yup.number().required(),
      description: Yup.string().required(),
      size: Yup.string(),
      price: Yup.number().required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const product = await Product.create(req.body);

    return res.json(product);
  }

  async update(req, res) {
    return res.json();
  }

  async delete(req, res) {
    return res.json();
  }
}

export default new ProductController();
