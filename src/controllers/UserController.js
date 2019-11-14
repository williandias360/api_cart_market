const User = require("../models/User");

module.exports = {
  async create(req, res) {
    const user = await User.create(req.body);
    user
      .then(res.status(201).json(user))
      .catch(e => res.status(400).send({ error: e.message }));
  },
  async findAll(req, res) {
    try {
      const users = await User.find().sort({ name: 1 });

      return res.send(users);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }
};
