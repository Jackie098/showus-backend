import File from '../models/File';

class FileLogoController {
  async update(req, res) {
    const fileExists = await File.findByPk(req.params.id);

    if (!fileExists) {
      return res.status(400).json({ error: 'File doest not exists' });
    }

    const logo = await File.findOne({
      where: { company_id: fileExists.company_id, logo: true },
    });

    if (logo) {
      await logo.update({ logo: false });
    }

    const wallpaper = await File.findOne({
      where: { id: fileExists.id, wallpaper: true }
    })

    if(wallpaper) {
      return res.status(400).json(
        { error: 'The same file cannot be a logo and a wallpaper'});
    }

    const fileUpdated = await fileExists.update({ logo: true });

    return res.json(fileUpdated);
  }
}

export default new FileLogoController();
