const User = require("../models/User");
const jwt = require('jsonwebtoken');
const authConfig = require("../config/auth");


function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  });
}

module.exports = {
  async create(req, res) {
    try {
      const { email } = req.body;
      if (await User.findOne({ email })) {
        return res.status(400).send({ error: "E-mail já existente" });
      }

      const user = await User.create(req.body);
      user.password = undefined;
      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      return res.status(400).send(err);
    }

  },
  async findAll(req, res) {
    try {

      const users = await User.find().sort({ name: 1 });

      return res.send(users);
    } catch (err) {
      return res.status(400).send({ error: err });
    }
  }, async findById(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);

      return res.send(user);
    }
    catch (err) {
      return res.status(400).send({ error: err });
    }
  },
  async update(req, res) {

  },
  async authenticate(req, res) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email, password }).select("+password");

      if (!user) {
        res.status(400).send({ error: 'Usuário não encontrado' });
      }

      user.password = undefined;

      return res.send({ user, token: generateToken({ id: user.id }) });
    } catch (err) {
      return res.status(400).send(err.message);
    }

  }
};
