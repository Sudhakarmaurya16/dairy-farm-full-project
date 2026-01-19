import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext"; // 1. Import Auth
import { useNavigate } from "react-router-dom"; // 2. Import Navigate
import "./styles/Products.css";
import Milk from "../assets/milk.png";

const Products = () => {
  const { addToCart, cartItems } = useContext(CartContext);  const { user } = useContext(AuthContext); // 3. Get User
  const navigate = useNavigate();

  const [dbProducts, setDbProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/products");
        setDbProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching products:", err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // --- 4. SECURE ADD TO CART FUNCTION ---
  const handleAddToCart = (product) => {
    if (!user) {
      // If not logged in, alert and redirect
      alert("🔒 Please Login first to buy products!");
      navigate("/profile");
    } else {
      // If logged in, proceed
      addToCart(product);
    }
  };

  const categories = ["All", ...new Set(dbProducts.map((p) => p.category))];

  const filteredProducts =
    activeCategory === "All"
      ? dbProducts
      : dbProducts.filter((p) => p.category === activeCategory);

  if (loading)
    return <div className="loading-screen">Loading Fresh Products...</div>;

  return (
    <div className="products-container">
      {/* Hero Section (Same as before) */}
      <section className="prod-hero-3d">
        <div className="prod-content-wrapper">
          <div className="prod-text-col">
            <div className="hero-tag-3d">✨ FRESH ARRIVAL</div>
            <h1 className="prod-title">
              Golden Cow <br />{" "}
              <span className="highlight-text">A2 Organic Milk</span>
            </h1>
            <p className="prod-desc">
              Direct from our happy cows to your glass.
            </p>
          </div>
          <div className="prod-image-col">
            <img src={Milk} alt="Hero Product" className="main-product-img" />
          </div>
        </div>
        {/* Wave SVG */}
        <div className="milk-wave">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      <div className="products-grid-section">
        <h2 className="section-title">
          Fresh From <span>Our Farm</span>
        </h2>
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? "active-tab" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => {
            const cartItem = cartItems.find((item) => item._id === product._id);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div className="product-card-3d" key={product._id}>
                <div className="product-image-box">
                  <img src={product.image} alt={product.name} />
                  {quantity > 0 && <div className="qty-badge">{quantity}</div>}
                  <div className="stock-tag">Live Stock</div>
                </div>

                <div className="product-info">
                  <span className="category-pill">{product.category}</span>
                  <h3>{product.name}</h3>
                  <div className="price-row">
                    <span className="price">₹{product.price}</span>

                    {/* ✅ UPDATED BUTTON with Security Check */}
                    <button
                      className={`add-btn ${quantity > 0 ? "added" : ""}`}
                      onClick={() => handleAddToCart(product)}
                    >
                      {quantity > 0 ? "Added" : "Add +"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;

