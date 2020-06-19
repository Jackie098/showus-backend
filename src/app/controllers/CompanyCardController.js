import Company from '../models/Company';
import File from '../models/File';

class CompanyCardController {
  async index(req, res) {
    const companies = await Company.findAll();

    if (!companies) {
      return res.status(200).json();
    }

    const files = await File.findAll({
      where: { wallpaper: true },
      attributes: ['url', 'name', 'path', 'size', 'wallpaper', 'company_id'],
    });

    const cards = companies.map((company) => {
      const filesCompany = files.find((file) => file.company_id === company.id);

      return {
        company,
        filesCompany,
      };
    });

    return res.json(cards);
  }
}

export default new CompanyCardController();
