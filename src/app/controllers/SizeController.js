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

    const size = await Size.create(req.body);

    return res.json(size);
  }

  async delete(req, res) {
    const size = await Size.findByPk(req.params.id);

    await size.destroy();

    return res.status(240).json();
  }
}

export default new SizeController();
