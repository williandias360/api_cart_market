const User = require('../models/User');

module.exports = {
    async create(req, res) {
        const user = await User.create(req.body);
        user
            .then(res.status(201).json(user))
            .catch(e => res.status(400).send({ error: e.message }));
    },
    async findAll(req, res) {
        const users = await User.find().sort({ name: 1 });
        users
            .then(res.json(users))
            .catch(e => res.status(400).send({ error: e.message }));
    }
}