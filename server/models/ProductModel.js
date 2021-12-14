const Mongoose = require("mongoose");

const ProductSchema = new Mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
    },
    color: { type: Array },
    price: {
      type: Number,
      required: true,
    },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = Mongoose.model("Product", ProductSchema);
