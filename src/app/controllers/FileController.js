import File from '../models/File';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path, size } = req.file;

    const { company } = req;

    const file = await File.create({
      name,
      size,
      path,
      company_id: company.id,
    });

    return res.json(file);
  }

  async delete(req, res) {
    const file = await File.findByPk(req.params.id);

    if (!file) {
      return res.status(400).json({ error: 'File does not exists' });
    }

    await file.destroy();

    return res.send();
  }
}

export default new FileController();
