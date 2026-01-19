const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// ==========================================
// 1. MODELS
// ==========================================

// --- Product Model ---
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  image: String,
});
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

// --- User Model ---
const userSchema = new mongoose.Schema({
  name: String,
  phone: { type: String, required: true, unique: true },
  email: String,
  password: { type: String, required: true },
  address: String,
});
const User = mongoose.models.User || mongoose.model("User", userSchema);

// --- Order Model ---
const orderSchema = new mongoose.Schema({
  customerName: String,
  phone: String,
  address: String,
  items: Array,
  totalAmount: Number,
  status: { type: String, default: "Pending" },
  date: { type: Date, default: Date.now },
});
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

// ==========================================
// 2. ROUTES
// ==========================================

// ✅ ROOT ROUTE (Home Page Error Fix)
app.get("/", (req, res) => {
  res.send("API is Running Successfully! 🚀");
});

// --- AUTH ROUTES ---

// 1. Register User
app.post("/api/register", async (req, res) => {
  try {
    const { name, phone, email, password, address } = req.body;
    const existingUser = await User.findOne({ phone });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, phone, email, password, address });
    await newUser.save();
    res.status(201).json({ message: "Registered Successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

// 2. Login User
app.post("/api/login", async (req, res) => {
  try {
    const { phone, password } = req.body;
    const user = await User.findOne({ phone });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Invalid Phone or Password" });
    }
    res.json({ message: "Login Success", user });
  } catch (error) {
    res.status(500).json({ message: "Login Error" });
  }
});

// ✅ GET ALL USERS (Ye missing tha - Ab add kar diya hai)
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});

// --- PRODUCT ROUTES ---

app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: "Error saving product" });
  }
});

// GET ALL PRODUCTS
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products" });
  }
});

// GET SINGLE PRODUCT
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching product" });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting" });
  }
});

// --- ORDER ROUTES ---

app.post("/api/orders", async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: "Order failed" });
  }
});

// Get Orders by Phone
app.get("/api/orders", async (req, res) => {
  try {
    const { phone } = req.query;
    const filter = phone ? { phone } : {};
    const orders = await Order.find(filter).sort({ date: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// Get Single Order
app.get("/api/orders/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) res.json(order);
    else res.status(404).json({ message: "Order not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching order" });
  }
});

// Admin Status Update
app.put("/api/orders/:id", async (req, res) => {
  try {
    const { status } = req.body;
    await Order.findByIdAndUpdate(req.params.id, { status });
    res.json({ message: "Status Updated" });
  } catch (error) {
    res.status(500).json({ message: "Update failed" });
  }
});

// Start Server
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/dairy-farm";
const PORT = process.env.PORT || 5001; // Render ke liye PORT variable zaroori hai

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server Running on Port ${PORT}`));
  })
  .catch((err) => console.log(err));
