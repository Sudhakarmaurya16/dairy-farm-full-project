import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/AddProduct.css";

const AddProduct = () => {
  // 1. Form Data State
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "Milk",
    image: "",
  });

  // 2. Products List State (Jo niche dikhega)
  const [products, setProducts] = useState([]);

  // 3. Page load hote hi Products fetch karein
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dairy-farm-full-project-2.onrender.com/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://dairy-farm-full-project-2.onrender.com/api/products", formData);
      alert("Product Added Successfully!");
      setFormData({ name: "", price: "", category: "Milk", image: "" });

      // 4. Submit ke baad turant list refresh karein
      fetchProducts();
    } catch (error) {
      alert("Error adding product");
    }
  };

  // 5. Delete Function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`https://dairy-farm-full-project-2.onrender.com/api/products/${id}`);
        fetchProducts(); // List update karein
      } catch (error) {
        alert("Error deleting product");
      }
    }
  };

  return (
    <div className="admin-container">
      {/* --- FORM SECTION --- */}
      <div className="form-wrapper">
        <h2>Add New Product</h2>
        <form onSubmit={handleSubmit}>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: Buffalo Milk"
            required
          />

          <label>Price (₹)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Ex: 60"
            required
          />

          <label>Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Milk">Milk</option>
            <option value="Ghee">Ghee</option>
            <option value="Paneer">Paneer</option>
            <option value="Butter">Butter</option>
            <option value="Urine Products">Urine Products</option>
            <option value="Gobar Products">Gobar Products</option>
            <option value="Others">Others</option>
          </select>

          <label>Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="Paste image link here"
            required
          />

          <button type="submit" className="add-btn">
            Add Product
          </button>
        </form>
      </div>

      {/* --- NEW: PRODUCT LIST TABLE --- */}
      <div className="table-wrapper">
        <h2>📦 Product Inventory ({products.length})</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="table-img"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <span className="category-badge">{item.category}</span>
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {products.length === 0 && (
            <p className="no-data">No products added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
