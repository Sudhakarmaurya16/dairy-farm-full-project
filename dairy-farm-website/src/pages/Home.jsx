// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./styles/Home.css";

// const testimonials = [
//   {
//     id: 1,
//     name: "Rahul Verma",
//     text: "The purity and freshness are unmatched. Truly premium dairy!",
//     role: "Fitness Coach",
//   },
//   {
//     id: 2,
//     name: "Priya Singh",
//     text: "My family trusts this dairy completely. Hygienic and healthy.",
//     role: "Homemaker",
//   },
//   {
//     id: 3,
//     name: "Anish Khan",
//     text: "Authentic desi ghee with real aroma. Loved it!",
//     role: "Chef",
//   },
// ];

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-wrapper">
//       {/* HERO SECTION */}
//       <section className="hero-3d">
//         <div className="hero-glass">
//           <h1>
//             Pure <span>Dairy</span> From <br /> Healthy Cows
//           </h1>
//           <p>
//             Organic • Hygienic • Sustainable <br />
//             Straight from our farm to your home
//           </p>
//           <button onClick={() => navigate("/products")} className="btn-3d">
//             Explore Products
//           </button>
//         </div>
//       </section>

//       {/* STATS */}
//       <section className="stats-section">
//         <div className="stat-box">🐄 500+ Healthy Cows</div>
//         <div className="stat-box">🧪 100% Lab Tested</div>
//         <div className="stat-box">🌱 Eco Friendly</div>
//         <div className="stat-box">🥛 Zero Adulteration</div>
//       </section>

//       {/* FARM & CLEANLINESS */}
//       <section className="facility-section">
//         <div className="facility-img">
//           <img
//             src="https://i.pinimg.com/1200x/27/2e/92/272e922510366dd2837fc1403f2a3b96.jpg"
//             alt="Dairy Farm"
//           />
//         </div>
//         <div className="facility-text">
//           <h2>Ultra-Hygienic Dairy Facility</h2>
//           <p>
//             Our cows are raised in stress-free open farms. Milk is collected
//             using automated milking systems and packed without human touch.
//           </p>
//           <ul>
//             <li>✔ Automatic Milking Machines</li>
//             <li>✔ RO Water Cleaning</li>
//             <li>✔ Temperature Controlled Storage</li>
//             <li>✔ Environment Friendly Waste Management</li>
//           </ul>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="testimonial-section">
//         <h2>Trusted by Families</h2>
//         <div className="testimonial-grid">
//           {testimonials.map((t) => (
//             <div className="testimonial-card" key={t.id}>
//               <p>“{t.text}”</p>
//               <h4>{t.name}</h4>
//               <span>{t.role}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* NEWSLETTER */}
//       <section className="newsletter-3d">
//         <div className="newsletter-glass">
//           <h2>Join Our Dairy Family</h2>
//           <p>Get farm updates, offers & healthy living tips</p>
//           <div className="newsletter-form">
//             <input type="email" placeholder="Enter email" />
//             <button>Subscribe</button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "./styles/Home.css";

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

  // --- POPUP STATE ---
  const [selectedProduct, setSelectedProduct] = useState(null); // Stores product data for popup
  const [showPopup, setShowPopup] = useState(false);

  // Fetch Products
  useEffect(() => {
    const fetchHomeProducts = async () => {
      try {
        const res = await axios.get("https://dairy-farm-full-project-2.onrender.com/api/products");
        setFeaturedProducts(res.data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchHomeProducts();
  }, []);

  // --- POPUP HANDLERS ---
  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProduct(null);
  };

  // Helper to get professional content based on name
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

      {/* 2. STATS SECTION (Mapped from Data) */}
      <section className="stats-section">
        {statsData.map((stat, index) => (
          <div className="stat-box" key={index}>
            {stat.icon} {stat.text}
          </div>
        ))}
      </section>

      {/* 3. BEST SELLERS SECTION */}
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
                    onClick={() => handleViewProduct(product)} // Open Popup
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

      {/* 4. FACILITY SECTION (Mapped from Data) */}
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

      {/* 5. TESTIMONIALS (Mapped from Data) */}
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

      {/* 6. NEWSLETTER */}
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

      {/* --- PRODUCT DETAIL POPUP (MODAL) --- */}
      {showPopup && selectedProduct && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>
              &times;
            </button>

            <div className="popup-grid">
              {/* Left: Image */}
              <div className="popup-image">
                <img src={selectedProduct.image} alt={selectedProduct.name} />
              </div>

              {/* Right: Content */}
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
