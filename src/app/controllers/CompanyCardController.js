import Company from '../models/Company';
import File from '../models/File';

import {Op} from 'sequelize';

class CompanyCardController {
  async index(req, res) {
    const { search, order } = req.query;

    console.log("++++++" +search);
    // console.log("++++++" +order);

    // if(search)
      const companies = await Company.findAll({
        where: {
          name: { [Op.iLike]: `%${search}%` },
        }
      })
    // else
      // const companies = await Company.findAll();
    // }else
    // if(search || order){
    //   if(search){
    //     const companies = await Company.findAll({
    //       where: {
    //         name: {
    //           [Op.like]: `%${String(search)}%`,
    //         },
    //       },
    //     });
    //   } else {
    //     const companies = await Company.findAll({
    //       where: {
    //       },
    //     });
    //   }
    // }
    //   const companies = await Company.findAll();
    // }

    // if (!companies) {
    //   return res.status(200).json();
    // }

    const filesWallpaper = await File.findAll({
      where: { wallpaper: true },
      attributes: ['url', 'name', 'path', 'size', 'wallpaper', 'company_id'],
    });

    const filesLogo = await File.findAll({
      where: { logo: true },
      attributes: ['url', 'name', 'path', 'size', 'logo', 'company_id'],
    });

    const cards = companies.map((company) => {
      const fileWallpaper = filesWallpaper.find((file) => file.company_id === company.id);
      const fileLogo = filesLogo.find((file) => file.company_id === company.id);

      return {
        company,
        fileWallpaper,
        fileLogo
      };
    });

    return res.json(cards);
  }
}

export default new CompanyCardController();
