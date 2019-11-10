const Product = require('../models/Product');

module.exports = {
    async create(req, res) {
        try {
            const { name, price, quantity } = req.body;

            const product = await Product.create({
                name,
                price,
                quantity
            });

            return res.status(201).json(product);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    },
    async update(req, res) {
        try {
            const { name, price, quantity } = req.body;
            const { id } = req.params;

            var product = await Product.findById(id);
            if (!product) {
                return res.status(400).send({ error: 'Product not find' });
            }

            product = await Product.findByIdAndUpdate(id, {
                name,
                price,
                quantity
            }, { new: true });



            return res.json(product);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params;
            await Product.findByIdAndRemove(id);

            return res.send();
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    },
    async findAll(req, res) {
        try {
            const products = await Product.find().sort({ name: 1 });
            return res.json(products);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    },
    async findById(req, res) {
        try {
            const { id } = req.params;

            const product = await Product.findById(id);
            return res.json(product);
        } catch (e) {
            res.status(400).send({ error: e.message });
        }
    }
}