const { Schema, model } = require("../database");

const CartSchema = new Schema(
  {
    total: {
      type: Number,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    cart_items: [
      {
        type: Schema.Types.ObjectId,
        ref: "CartItem"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Cart", CartSchema);
