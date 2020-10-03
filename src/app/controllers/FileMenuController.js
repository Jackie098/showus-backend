import File from '../models/File';

class FileMenuController {
  async update(req, res) {

    //Checking if file really exists
    const fileExists = await File.findByPk(req.params.id);

    if(!fileExists) {
      return res.status(400).json({ error: 'File does not exists'});
    }

    //Checking if file isn't a wallpaper
    const wallpaper = await File.findOne({
      where: { id: fileExists.id, wallpaper: true }
    });

    if(wallpaper) {
      return res.status(400).json({
        error: 'The same file cannot be a menu and a wallpaper'
      });
    }

    //Checking if file isn't a logo
    const logo = await File.findOne({
      where: { id: fileExists.id, logo: true}
    });

    if(logo) {
      return res.status(400).json({
        error: 'The same file cannot be a menu and a logo'
      });
    }

    //Then the file can be a menu
    const fileUpdated = await fileExists.update({ menu: true })

    return res.json(fileUpdated);
  }
}

export default new FileMenuController();
