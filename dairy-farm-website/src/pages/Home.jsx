
import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "./styles/Home.css";

// ✅ VIDEO IMPORTS (STEP 2 ADDED)
import CowVideo from "../assets/videos/cow.mp4";
import ProcessingVideo from "../assets/videos/processing.mp4";
import DeliveryVideo from "../assets/videos/delivery.mp4";
import OrganicVideo from "../assets/videos/organic.mp4";

// Import Data from separate file
import {
  statsData,
  facilityData,
  testimonialsData,
  productPopupDetails,
} from "../data/homeData";

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const res = await axios.get(
          "https://dairy-farm-full-project-2.onrender.com/api/products",
        );
        setFeaturedProducts(res.data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchHomeProducts();
  }, []);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  const getProductContent = (name) => {
    return productPopupDetails[name] || productPopupDetails["default"];
  };

  return (
    <div className="home-wrapper">
      {/* 1. HERO SECTION */}
      <section className="hero-3d">
        <div className="hero-glass">
          <h1>
            Pure <span>Dairy</span> From <br /> Healthy Cows
          </h1>
          <p>
            Organic • Hygienic • Sustainable <br /> Straight from our farm to
            your home
          </p>
          <button onClick={() => navigate("/products")} className="btn-3d">
            Explore Products
          </button>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="stats-section">
        {statsData.map((stat, index) => (
          <div className="stat-box" key={index}>
            {stat.icon} {stat.text}
          </div>
        ))}
      </section>

      {/* 3. BEST SELLERS */}
      <section className="featured-section">
        <h2 className="section-heading">
          Our <span>Best Sellers</span>
        </h2>

        {loading ? (
          <p className="loading-text">Fetching fresh items...</p>
        ) : (
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <div className="product-card-home" key={product._id}>
                <div className="home-img-box">
                  <img src={product.image} alt={product.name} />
                  <span className="badge-hot">HOT</span>
                </div>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>

                <div className="home-actions">
                  <button
                    className="view-btn-small"
                    onClick={() => handleViewProduct(product)}
                  >
                    View
                  </button>
                  <button
                    className="add-btn-small"
                    onClick={() => addToCart(product)}
                  >
                    Add +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. FACILITY SECTION */}
      <section className="facility-section">
        <div className="facility-img">
          <img src={facilityData.image} alt="Farm" />
        </div>
        <div className="facility-text">
          <h2>{facilityData.title}</h2>
          <p>{facilityData.description}</p>
          <ul>
            {facilityData.features.map((feature, index) => (
              <li key={index}>✔ {feature}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ✅ 5. NEW VIDEO SECTION (STEP 3 ADDED) */}
      <section className="video-section">
        <h2 className="section-heading">
          Inside <span>Our Dairy Farm</span>
        </h2>

        <div className="video-grid">
          <div className="video-card">
            <video src={CowVideo} autoPlay loop muted playsInline />
            <div className="video-overlay">
              <h3>Healthy Cow Care</h3>
            </div>
          </div>

          <div className="video-card">
            <video src={ProcessingVideo} autoPlay loop muted playsInline />
            <div className="video-overlay">
              <h3>Milk Processing</h3>
            </div>
          </div>

          <div className="video-card">
            <video src={DeliveryVideo} autoPlay loop muted playsInline />
            <div className="video-overlay">
              <h3>Fresh Delivery</h3>
            </div>
          </div>

          <div className="video-card">
            <video src={OrganicVideo} autoPlay loop muted playsInline />
            <div className="video-overlay">
              <h3>Organic Farming</h3>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="testimonial-section">
        <h2 className="section-heading">
          Trusted by <span>Families</span>
        </h2>
        <div className="testimonial-grid">
          {testimonialsData.map((t) => (
            <div className="testimonial-card" key={t.id}>
              <p>“{t.text}”</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. NEWSLETTER */}
      <section className="newsletter-3d">
        <div className="newsletter-glass">
          <h2>Join Our Dairy Family</h2>
          <p>Get farm updates, offers & healthy living tips</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter email" />
            <button>Subscribe</button>
          </div>
        </div>
      </section>

      {/* PRODUCT POPUP */}
      {showPopup && selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>

            <div className="popup-grid">
              <div className="popup-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>

              <div className="popup-details">
                <span className="popup-badge">Best Seller</span>
                <h2>{getProductContent(selectedProduct.name).heading}</h2>
                <p className="popup-desc">
                  {getProductContent(selectedProduct.name).description}
                </p>

                <ul className="popup-benefits">
                  {getProductContent(selectedProduct.name).benefits.map(
                    (benefit, idx) => (
                      <li key={idx}>✨ {benefit}</li>
                    ),
                  )}
                </ul>

                <div className="popup-price-row">
                  <span className="final-price">₹{selectedProduct.price}</span>
                  <button
                    className="popup-add-btn"
                    onClick={() => {
                      addToCart(selectedProduct);
                      closePopup();
                    }}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
