import * as Yup from 'yup';

import Product from '../models/Product';
import ProductType from '../models/ProductType';

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
    const schema = Yup.object().shape({
      name: Yup.string(),
      type_id: Yup.number(),
      description: Yup.string(),
      size: Yup.string(),
      price: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const productExists = await Product.findByPk(req.params.id);

    if (!productExists) {
      return res.status(400).json({ error: 'Product does not exists' });
    }

    /**
     * Checking if product type exists
     */
    const typeExists = await ProductType.findOne({
      where: { id: req.body.type_id },
    });

    if (req.body.type_id && !typeExists) {
      return res.status(400).json({ error: 'Product Type does not exists' });
    }

    const product = await productExists.update(req.body);

    return res.json(product);
  }

  async delete(req, res) {
    return res.json();
  }
}

export default new ProductController();
