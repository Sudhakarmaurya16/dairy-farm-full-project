const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// 1. GET Route (Frontend ke liye)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// 2. POST Route (Ye MISSING hai isliye error aa raha hai)
router.post("/", async (req, res) => {
  // Console log taaki pata chale data aaya
  console.log("Data Received:", req.body);

  const { name, price, category, image } = req.body;

  if (!name || !price || !category || !image) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const product = new Product({
      name,
      price,
      category,
      image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Product creation failed" });
  }
});

// 3. DELETE Route
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      await product.deleteOne();
      res.json({ message: "Product removed" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
