import File from '../models/File';
import ProductType from '../models/ProductType';

/**
 * Validate an image to know if it is a menu and
 * then define the type of product the menu will
 * be related
 */
class FileMenuTypeController {
  async update(req, res){

    //Checking if product type exists
    const typeExists = await ProductType.findByPk(req.params.productTypeId);

    if(!typeExists) {
      return res.status(400).json({ error: 'Product Type does not exists'});
    }

    //Checking if file exists and it is a menu
    const fileExists = await File.findOne({
      where: { id: req.params.id, menu: true },
    });

    if(!fileExists) {
      return res.status(400).json(
        { error: 'File does not exists or it does not an menu'})
    }

    //Then the file (that is a menu) will receive a type
    const fileUpdated = await fileExists.update({ menu_type: typeExists.id});

    return res.json(fileUpdated);
  }
}

export default new FileMenuTypeController();
