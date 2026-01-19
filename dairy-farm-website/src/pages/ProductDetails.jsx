import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import "./styles/ProductDetails.css"; // CSS niche hai

const ProductDetails = () => {
  const { id } = useParams(); // URL se ID nikali (e.g., product/123)
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // --- 1. Fetch Data from Backend ---
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`https://dairy-farm-full-project-2.onrender.com/api/products/${id}`);
        setProduct(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching details:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // --- 2. Add to Cart with Security ---
  const handleAddToCart = () => {
    if (!user) {
      alert("🔒 Please Login first to buy items!");
      navigate("/profile"); // Redirect to Login
    } else {
      addToCart(product);
      alert("✅ Item added to your basket!");
    }
  };

  if (loading)
    return <div className="loading-screen">Loading Fresh Details...</div>;
  if (!product) return <div className="error-screen">Product Not Found!</div>;

  return (
    <div className="details-page-wrapper">
      <div className="details-card-3d">
        {/* Left Side: Product Image */}
        <div className="details-img-section">
          <div className="img-container-3d">
            <img src={product.image} alt={product.name} />
            <span className="purity-badge">100% Pure</span>
          </div>
        </div>

        {/* Right Side: Info & Actions */}
        <div className="details-info-section">
          <div className="breadcrumb">
            Home &gt; Products &gt; {product.category}
          </div>

          <h1 className="prod-title">{product.name}</h1>
          <p className="prod-desc">
            Fresh from our farm to your doorstep. Rich in nutrition, zero
            preservatives, and packed with the goodness of nature.
          </p>

          <div className="price-tag-3d">
            <span className="currency">₹</span>
            <span className="amount">{product.price}</span>
            <span className="unit">/ unit</span>
          </div>

          {/* Static Benefits (Decoration) */}
          <div className="benefits-grid">
            <div className="benefit-item">🌿 Organic Feed</div>
            <div className="benefit-item">🧪 Lab Tested</div>
            <div className="benefit-item">❄️ Chilled Delivery</div>
          </div>

          <div className="action-buttons-row">
            <button className="add-cart-btn-3d" onClick={handleAddToCart}>
              🛒 Add to Cart
            </button>
            <button
              className="back-btn-3d"
              onClick={() => navigate("/products")}
            >
              🔙 Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
