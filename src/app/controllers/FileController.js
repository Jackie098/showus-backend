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
}

export default new FileController();
