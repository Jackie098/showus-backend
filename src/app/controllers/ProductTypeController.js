import * as Yup from 'yup';

import ProductType from '../models/ProductType';
import Product from '../models/Product';

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
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const productType = await ProductType.findByPk(req.params.id);

    if (!productType) {
      return res.status(400).json({ error: 'ProductType doesn not exists' });
    }

    const nameExists = await ProductType.findOne({
      where: { name: req.body.name },
    });

    if (nameExists) {
      return res.status(400).json({ error: 'Product already registered' });
    }

    const { id, name } = await productType.update(req.body);

    return res.json({ id, name });
  }

  async delete(req, res) {
    const productType = await ProductType.findByPk(req.params.id);

    if (!productType) {
      return res.status(400).json({ error: 'ProductType does not exists' });
    }

    const product = await Product.findOne({
      where: { type_id: productType.id },
    });

    if (product) {
      return res
        .status(400)
        .json({ error: 'There are products with this type yet' });
    }

    await productType.destroy();

    return res.status(204).json();
  }
}

export default new ProductTypeController();
