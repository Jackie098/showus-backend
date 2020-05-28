import File from '../models/File';
import Company from '../models/Company';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path, size } = req.file;

    const file = await File.create({
      name,
      size,
      path,
    });

    return res.json(file);
  }
}

export default new FileController();
