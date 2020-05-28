import * as Yup from 'yup';

import Company from '../models/Company';

class CompanyController {
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
      where: { whatsapp: req.body.whatsapp },
    });

    if (companyExists) {
      return res.status(400).json({ error: 'Company already exists' });
    }

    const { id, name, whatsapp } = await Company.create(req.body);

    return res.json({ id, name, whatsapp });
  }
}

export default new CompanyController();
