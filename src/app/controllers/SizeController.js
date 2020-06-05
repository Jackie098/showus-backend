import * as Yup from 'yup';

import Size from '../models/Size';

class SizeController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      initials: Yup.string().required(),
      description: Yup.string(),
    });

    if (!schema.isValid(req.body)) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const nameExists = await Size.findOne({ where: { name: req.body.name } });

    if (nameExists) {
      return res.status(400).json({ error: 'Name already exists' });
    }

    const initialsExists = await Size.findOne({
      where: { initials: req.body.initials.toUpperCase() },
    });

    if (initialsExists) {
      return res.status(400).json({ error: 'Initials already exists' });
    }

    const size = await Size.create(req.body);

    return res.json(size);
  }

  async delete(req, res) {
    const size = await Size.findByPk(req.params.id);

    if (!size) {
      return res.status(400).json({ error: 'Size does not found' });
    }

    await size.destroy();

    return res.status(204).json();
  }
}

export default new SizeController();
