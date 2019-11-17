const { Schema, model } = require("../database");

const CartItemSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price_unit: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("CartItem", CartItemSchema);
