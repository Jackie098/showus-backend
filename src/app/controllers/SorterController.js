import Sorter from '../models/Sorter';

class SorterController {
  async index(req, res) {
    const sorters = await Sorter.findAll({
      attributes: ['id', 'name', 'description'],
    });

    return res.json(sorters);
  }
}

export default new SorterController();
