import Company from '../models/Company';

export default async (req, res, next) => {
  const companyId = req.params.id;

  const companyExists = await Company.findByPk(companyId);

  if (!companyExists) {
    return res.status(400).json({ error: 'Company does not exists' });
  }

  req.company = companyExists;

  return next();
};
