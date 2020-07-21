import Company from '../models/Company';
import File from '../models/File';
import Menu from '../models/Menu';
import Product from '../models/Product';
import ProductType from '../models/ProductType';
import Size from '../models/Size';

class CompanyDetailsController {
  async index(req, res) {
    const company = await Company.findByPk(req.params.id, {
      attributes: [
        'id',
        'name',
        'description',
        'whatsapp',
        'instagram',
        'email',
      ],
    });

    if (!company) {
      return res.status(500).json({ error: 'Company does not found' });
    }

    const files = await File.findAll();

    const filesCompany = files.filter((file) => file.company_id === company.id);

    const allTypes = await ProductType.findAll();

    const menu = await Menu.findAll({
      where: { company_id: company.id },
      attributes: [],
      include: [
        {
          model: Product,
          as: 'product',
          attributes: ['name', 'description', 'price'],
          include: [
            {
              model: ProductType,
              as: 'type',
              attributes: ['name'],
            },
            {
              model: Size,
              as: 'size',
              attributes: ['initials', 'name', 'description'],
            },
          ],
        },
      ],
    });


    var typesInMenu = [''];
    var found;

    typesInMenu = allTypes.filter(type => {
      found = menu.find(itemMenu => itemMenu.product.type.name === type.name);

      if(!found){
        return false;
      }

      return true;
    })

    // menu.forEach(item => console.log(item.type));

    const details = { company, filesCompany, menu, typesInMenu };

    return res.json(details);
  }
}

export default new CompanyDetailsController();
