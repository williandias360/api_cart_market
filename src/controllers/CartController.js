const Cart = require("../models/Cart");
const CartItem = require("../models/Cart_Item");

module.exports = {
  async create(req, res) {
    try {
      const { total, user, cart_items } = req.body;

      const cart = await Cart.create({ total, user });

      await Promise.all(
        cart_items.map(async item => {
          const cartItem = new CartItem({ ...item, cart: cart._id });

          await cartItem.save();

          cart.cart_items.push(cartItem);
        })
      );

      await cart.save();

      return res.send({ cart });
    } catch (err) {
      console.log(err);
      return res.status(400).send(err);
    }
  },
  async findAll(req, res) {
    try {
      const carts = await Cart.find().populate(["user", "cart_items"]);
      return res.send(carts);
    } catch (err) {
      return res.status(400).send(err);
    }
  }
};
