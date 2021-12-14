const Mongoose = require("mongoose");

const OrderSchema = new Mongoose.Schema(
  {
    userId: {
      type: String,
    },
    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);

module.exports = Mongoose.model("Order", OrderSchema);
