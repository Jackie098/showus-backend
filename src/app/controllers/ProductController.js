import * as Yup from 'yup';

import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    return res.json();
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
