import File from '../models/File';

/**
 * To check the maximum number of images per company
 */
export default async (req, res, next) => {
  const totalImages = await File.findAndCountAll({
    where: {
      company_id: req.company.id,
    },
  });

  if (totalImages.count > 2) {
    return res
      .status(400)
      .json({ error: 'This company cannot have more files' });
  }

  return next();
};
