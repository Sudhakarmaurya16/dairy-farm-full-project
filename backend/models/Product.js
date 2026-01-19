const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String, // Jaise: 'Milk', 'Ghee', 'Gobar Products'
      required: true,
    },
    image: {
      type: String, // Image ka URL store karenge
      required: true,
    },
  },
  {
    timestamps: true, // Ye automatically 'createdAt' aur 'updatedAt' add kar dega
  },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
