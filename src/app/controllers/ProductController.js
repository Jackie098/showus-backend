/* eslint-disable camelcase */
import * as Yup from 'yup';

import Product from '../models/Product';
import ProductType from '../models/ProductType';
import Size from '../models/Size';

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
      size_id: Yup.string(),
      price: Yup.number().required(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, type_id, size_id, description, price } = req.body;

    /**
     * Checking if size exists or inserting 'UNICO' value
     */
    const sizeExists = !size_id
      ? await Size.findOne({ where: { initials: 'UNICO' } })
      : await Size.findByPk(size_id);

    if (!sizeExists) {
      return res.status(400).json({ error: 'Size does not exists' });
    }

    /**
     * Checking if product type exists
     */
    const typeExists = await ProductType.findOne({
      where: { id: req.body.type_id },
    });

    if (!typeExists) {
      return res.status(400).json({ error: 'Product Type does not exists' });
    }

    const product = await Product.create({
      name,
      type_id,
      size_id: sizeExists.id,
      description,
      price,
    });

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
    const product = await Product.findByPk(req.params.id);

    if (!product) {
      return res.status(400).json({ error: 'Product does not exists' });
    }

    await product.destroy();

    return res.status(204).json();
  }
}

export default new ProductController();
