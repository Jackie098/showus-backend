import Menu from '../models/Menu';
import Company from '../models/Company';
import Product from '../models/Product';

class MenuController {
  async update(req, res) {
    const { company_id: companyId, product_id: productId } = req.body;
    const { id } = req.params;

    /**
     * Checking if the menu exists
     */
    const itemExists = await Menu.findByPk(id);

    if (!itemExists) {
      return res.status(400).json({ error: 'Item not found' });
    }

    /**
     * Checking if the company exists
     */
    const companyExists = await Company.findByPk(companyId);

    if (!companyExists) {
      return res.status(400).json({ error: 'Company not found' });
    }

    /**
     * Checking if the product exists
     */
    const productExists = await Product.findByPk(productId);

    if (!productExists) {
      return res.status(400).json({ error: 'Product not found' });
    }

    const newItem = await itemExists.update(req.body);

    return res.json(newItem);
  }

  async delete(req, res) {
    const item = await Menu.findByPk(req.params.id);

    if (!item) {
      return res.status(400).json({ error: 'Item not found' });
    }

    await item.destroy();

    return res.status(204).json();
  }
}

export default new MenuController();
