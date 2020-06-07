import File from '../models/File';

class FileWallpaperController {
  async update(req, res) {
    const fileExists = await File.findByPk(req.params.id);

    if (!fileExists) {
      return res.status(400).json({ error: 'File doest not exists' });
    }

    const wallpaper = await File.findOne({
      where: { company_id: fileExists.company_id, wallpaper: true },
    });

    if (wallpaper) {
      await wallpaper.update({ wallpaper: false });
    }

    const fileUpdated = await fileExists.update({ wallpaper: true });

    return res.json(fileUpdated);
  }
}

export default new FileWallpaperController();
