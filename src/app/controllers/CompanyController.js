import * as Yup from 'yup';

import { Op } from 'sequelize';

import Company from '../models/Company';

class CompanyController {
  async index(req, res) {
    const { page } = req.query;

    const companies = await Company.findAll({
      limit: 6,
      offset: (page - 1) * 6,
      attributes: [
        'id',
        'name',
        'description',
        'whatsapp',
        'instagram',
        'email',
        'createdAt',
        'updatedAt',
      ],
    });

    return res.json(companies);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      description: Yup.string(),
      whatsapp: Yup.string(13).required(),
      instagram: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const companyExists = await Company.findOne({
      where: {
        [Op.or]: [
          { whatsapp: req.body.whatsapp },
          { instagram: req.body.instagram },
          { email: req.body.email },
        ],
      },
    });

    if (companyExists) {
      return res.status(400).json({ error: 'Company already exists' });
    }

    const { id, name, whatsapp } = await Company.create(req.body);

    return res.json({ id, name, whatsapp });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      description: Yup.string(),
      whatsapp: Yup.string(),
      instagram: Yup.string(),
      email: Yup.string().email(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const company = await Company.findByPk(req.params.id);

    if (!company) {
      return res.status(400).json({ error: 'Company does not exists' });
    }

    /**
     * case whatsapp already exists
     */
    if (req.body.whatsapp) {
      const whatsappExists = await Company.findOne({
        where: { whatsapp: req.body.whatsapp },
      });

      if (whatsappExists) {
        return res.status(400).json({ error: 'Whatsapp already registered' });
      }
    }

    /**
     * case instagram already exists
     */
    if (req.body.instagram) {
      const instagramExists = await Company.findOne({
        where: { instagram: req.body.instagram },
      });

      if (instagramExists) {
        return res.status(400).json({ error: 'Instagram already registered' });
      }
    }

    /**
     * case email already exists
     */
    if (req.body.email) {
      const emailExists = await Company.findOne({
        where: { email: req.body.email },
      });

      if (emailExists) {
        return res.status(400).json({ error: 'Email already registered' });
      }
    }

    /**
     * otherwise, normal flow
     */

    const { id, name, whatsapp, instagram, email } = await company.update(
      req.body
    );

    return res.json({
      id,
      name,
      whatsapp,
      instagram,
      email,
    });
  }

  async delete(req, res) {
    const company = await Company.findByPk(req.params.id);

    if (!company) {
      return res.status(400).json({ error: 'Company does not exists' });
    }

    await company.destroy();

    return res.json({
      message: `Successful operation, ${company.name} deleted`,
    });
  }
}

export default new CompanyController();
