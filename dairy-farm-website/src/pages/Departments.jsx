// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./styles/Departments.css";
// import logo from "../assets/departments.png";

// const departments = [
//   {
//     id: 1,
//     name: "Fresh Milk",
//     image:
//       "https://i.pinimg.com/736x/79/81/eb/7981ebddff2991fd734b6390a58daeb1.jpg",
//     desc: "A2 Buffalo & Cow Milk, delivered fresh within 3 hours.",
//     path: "/details/milk",
//   },
//   {
//     id: 2,
//     name: "Desi Ghee",
//     image:
//       "https://i.pinimg.com/736x/55/39/b2/5539b21678cae3803e0039a2a6b8fb14.jpg",
//     desc: "Traditional Bilona method Ghee made from pure curd.",
//     path: "/details/ghee",
//   },
//   {
//     id: 3,
//     name: "Paneer & Tofu",
//     image:
//       "https://i.pinimg.com/1200x/d4/5a/f1/d45af1673be931c3d81c045013beff94.jpg",
//     desc: "Soft, malai paneer and healthy soya tofu made fresh daily.",
//     path: "/details/paneer",
//   },
//   {
//     id: 4,
//     name: "Butter & Cream",
//     image:
//       "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?q=80&w=500&auto=format&fit=crop",
//     desc: "Farm-fresh white butter and thick heavy cream.",
//     path: "/details/butter",
//   },
//   {
//     id: 5,
//     name: "Dairy Sweets",
//     image:
//       "https://i.pinimg.com/1200x/1a/7d/e4/1a7de47b16d20599ab38ecdcc8b84379.jpg",
//     desc: "Pure Khoya, Gulab Jamun & Rasgulla made with our own milk.",
//     path: "/details/sweets",
//   },
//   {
//     id: 6,
//     name: "Organic Curd",
//     image:
//       "https://i.pinimg.com/736x/ee/b2/e9/eeb2e971cf62a5a0d392b2ea6ea435bc.jpg",
//     desc: "Thick, probiotic-rich Dahi and refreshing Masala Chaas.",
//     path: "/details/curd",
//   },
//   {
//     id: 7,
//     name: "Cattle Feed",
//     image:
//       "https://i.pinimg.com/736x/a1/ab/6a/a1ab6afb8ee15caa86668e6f03efed84.jpg",
//     desc: "High-protein Khal, Binola & Churi for healthy livestock.",
//     path: "/details/feed",
//   },
//   {
//     id: 8,
//     name: "Farm Tour",
//     image:
//       "https://i.pinimg.com/736x/33/44/b9/3344b9866efa148f24abefb7f2ad5bf0.jpg",
//     desc: "Visit our farm, see our cattle, and experience pure life.",
//     path: "/farm-tour",
//   },
// ];

// const Departments = () => {
//   const navigate = useNavigate();
//   const [activeFaq, setActiveFaq] = useState(null);

//   const faqs = [
//     {
//       q: "Is the milk free from adulteration?",
//       a: "Absolutely! Our milk is 100% pure, free from any preservatives or chemicals, arriving directly from the farm to your doorstep.",
//     },
//     {
//       q: "What is the delivery schedule?",
//       a: "We deliver between 6:00 AM and 9:00 AM every morning to ensure you receive fresh dairy products for your breakfast.",
//     },
//     {
//       q: "Can we place bulk orders?",
//       a: "Yes, we accept bulk orders for weddings, parties, and events. Please contact us via our support page for more details.",
//     },
//   ];

//   const reviews = [
//     {
//       name: "Rahul Singh",
//       text: "Samrat Dairy's milk is exceptionally thick and delicious! Highly recommended.",
//       stars: "⭐⭐⭐⭐⭐",
//     },
//     {
//       name: "Suman Devi",
//       text: "Their paneer is so soft that it melts in your mouth. Truly premium quality!",
//       stars: "⭐⭐⭐⭐⭐",
//     },
//     {
//       name: "Vikas Khanna",
//       text: "The aroma of their Bilona Ghee takes me back to the traditional village taste.",
//       stars: "⭐⭐⭐⭐⭐",
//     },
//   ];

//   return (
//     <div className="dept-page">
//       <section className="dept-hero">
//         {/* 2. Background Image using Variable */}
//         <img
//           src={logo}
//           alt="Samrat Dairy Farm Background"
//           className="hero-parallax-img"
//         />

//         {/* 3. Dark Overlay for readability */}
//         <div className="dept-hero-overlay"></div>

//         {/* 4. Main Content */}
//         <div className="dept-hero-content">
//           <div className="hero-tag">PREMIUM DAIRY FARM</div>

//           <h1 className="hero-main-title">
//             Purity You Can <br />
//             <span>Taste & Trust</span>
//           </h1>

//           <p className="hero-description">
//             Experience the freshness of 100% organic milk delivered straight
//             from our green pastures to your doorstep. Nature's goodness,
//             bottled.
//           </p>

//           <div className="hero-badges">
//             <span className="badge">🌿 100% Organic</span>
//             <span className="badge">🚜 Fresh Daily</span>
//             <span className="badge">✅ ISO Certified</span>
//           </div>
//         </div>

//         {/* Optional: Milk Wave Design at Bottom */}
//         <div className="milk-wave">
//           <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//             <path
//               fill="#fdfdfb"
//               fillOpacity="1"
//               d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
//             ></path>
//           </svg>
//         </div>
//       </section>
//       {/* 1. Header Section */}
//       <div className="dept-header">
//         <h2 className="title-3d">
//           Farm <span>Departments</span>
//         </h2>
//         <p className="subtitle">
//           Pure quality from Samrat Dairy Farm to your home
//         </p>
//       </div>

//       {/* 2. Departments Grid */}
//       <div className="dept-grid">
//         {departments.map((dept) => (
//           <div className="dept-card" key={dept.id}>
//             <div className="card-inner">
//               <div className="card-front">
//                 <div className="img-container">
//                   <img src={dept.image} alt={dept.name} className="dept-img" />
//                 </div>
//                 <div className="card-content">
//                   <h3>{dept.name}</h3>
//                   <div className="explore-tag">Tap to view</div>
//                 </div>
//               </div>
//               <div className="card-back">
//                 <h3>{dept.name}</h3>
//                 <p>{dept.desc}</p>
//                 <button
//                   className="view-btn-3d"
//                   onClick={() => navigate(dept.path)}
//                 >
//                   Explore {dept.name.split(" ")[0]}
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 3. Farm Journey Section */}
//       <section className="farm-details-section">
//         <div className="details-glass-container">
//           <h2 className="details-title">
//             Pure Farm <span>To Kitchen</span> Journey
//           </h2>
//           <div className="details-features-grid">
//             <div className="detail-item-3d">
//               <div className="detail-number">01</div>
//               <h4>Hygienic Milking</h4>
//               <p>
//                 We use advanced machine milking at our farm to ensure
//                 human-touch-free, bacteria-free purity.
//               </p>
//             </div>
//             <div className="detail-item-3d">
//               <div className="detail-number">02</div>
//               <h4>Cold Chain Logistics</h4>
//               <p>
//                 Milk is chilled to 4°C immediately after milking to maintain
//                 peak freshness and nutrition.
//               </p>
//             </div>
//             <div className="detail-item-3d">
//               <div className="detail-number">03</div>
//               <h4>Traditional Purity</h4>
//               <p>
//                 Our Ghee and Paneer are still crafted using traditional Bilona
//                 and hand-pressed methods.
//               </p>
//             </div>
//             <div className="detail-item-3d">
//               <div className="detail-number">04</div>
//               <h4>Direct Delivery</h4>
//               <p>
//                 No middlemen! Delivered directly from our farm to your home
//                 within 3 hours of processing.
//               </p>
//             </div>
//           </div>
//           <div className="farm-stats-banner">
//             <div className="stat-box">
//               <strong>500+</strong> <span>Livestock</span>
//             </div>
//             <div className="stat-box">
//               <strong>100%</strong> <span>Chemical Free</span>
//             </div>
//             <div className="stat-box">
//               <strong>24/7</strong> <span>Farm Monitoring</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 4. Customer Reviews Section */}
//       <section className="reviews-section">
//         <h2 className="details-title">
//           What Our <span>Customers Say</span>
//         </h2>
//         <div
//           className="reviews-grid"
//           style={{ display: "inline-flex", gap: "30px" }}
//         >
//           {reviews.map((rev, i) => (
//             <div className="review-card" key={i}>
//               <div className="stars">{rev.stars}</div>
//               <p>"{rev.text}"</p>
//               <h4>- {rev.name}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 5. FAQ Section */}
//       <section className="faq-section">
//         <h2 className="details-title">
//           Common <span>Questions</span>
//         </h2>
//         <div className="faq-container">
//           {faqs.map((faq, index) => (
//             <div
//               className={`faq-item ${activeFaq === index ? "active" : ""}`}
//               key={index}
//               onClick={() => setActiveFaq(activeFaq === index ? null : index)}
//             >
//               <div className="faq-question">
//                 {faq.q}
//                 <span>{activeFaq === index ? "−" : "+"}</span>
//               </div>
//               {activeFaq === index && <div className="faq-answer">{faq.a}</div>}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 6. Final Call to Action */}
//       <section className="final-cta">
//         <h2>Experience the Freshness</h2>
//         <p>Order pure and hygienic dairy products for your home today.</p>
//         <button className="cta-btn-main" onClick={() => navigate("/products")}>
//           Browse Products
//         </button>
//       </section>
//     </div>
//   );
// };

// export default Departments;

// import React, { useState, useEffect } from "react";
// import { departmentsData } from "../data/departmentsData";
// import "./styles/Departments.css";

// const Departments = () => {
//   const [selectedDept, setSelectedDept] = useState(null);

//   const openPopup = (dept) => {
//     setSelectedDept(dept);
//     document.body.style.overflow = "hidden";
//   };

//   const closePopup = () => {
//     setSelectedDept(null);
//     document.body.style.overflow = "auto";
//   };

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") closePopup();
//     };
//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, []);

//   return (
//     <div className="departments-page">
//       {/* HERO */}
//       <section className="dept-hero">
//         <div className="dept-hero-content">
//           <h1>
//             Our Dairy Farm <span className="highlight">Departments</span>
//           </h1>
//           <p>
//             Well-organized dairy farm departments ensuring hygiene, animal
//             health, quality milk production, and sustainability.
//           </p>
//         </div>
//       </section>

//       {/* GRID */}
//       <section className="dept-grid-section">
//         <div className="dept-grid-container">
//           {departmentsData.map((dept) => (
//             <div
//               className="dept-card"
//               key={dept.id}
//               onClick={() => openPopup(dept)}
//             >
//               <div className="dept-img-box">
//                 <img src={dept.image} alt={dept.title} />
//                 <span className="view-badge">View Details</span>
//               </div>

//               <div className="dept-info">
//                 <h3>{dept.title}</h3>
//                 <p>{dept.shortDesc}</p>
//                 <button className="learn-more-btn">Learn More →</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* POPUP */}
//       {selectedDept && (
//         <div className="popup-overlay" onClick={closePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-popup-btn" onClick={closePopup}>
//               ×
//             </button>

//             <div className="popup-header-img">
//               <img src={selectedDept.detailImage} alt={selectedDept.title} />
//               <div className="popup-title-overlay">
//                 <h2>{selectedDept.title}</h2>
//               </div>
//             </div>

//             <div className="popup-body">
//               <h3>Department Responsibilities</h3>
//               <ul className="dept-details-list">
//                 {selectedDept.details.map((point, index) => (
//                   <li key={index}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Departments;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { departmentsData } from "../data/departmentsData"; // Data Import
import "./styles/Departments.css";
import logo from "../assets/departments.png"; // Image Import

const Departments = () => {
  const navigate = useNavigate();

  // --- 1. POPUP STATE & LOGIC ---
  const [selectedDept, setSelectedDept] = useState(null);

  const openPopup = (dept) => {
    setSelectedDept(dept);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setSelectedDept(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // --- 2. FAQ STATE & DATA ---
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "Is the milk free from adulteration?",
      a: "Absolutely! Our milk is 100% pure, free from any preservatives or chemicals, arriving directly from the farm to your doorstep.",
    },
    {
      q: "What is the delivery schedule?",
      a: "We deliver between 6:00 AM and 9:00 AM every morning to ensure you receive fresh dairy products for your breakfast.",
    },
    {
      q: "Can we place bulk orders?",
      a: "Yes, we accept bulk orders for weddings, parties, and events. Please contact us via our support page for more details.",
    },
  ];

  const reviews = [
    {
      name: "Rahul Singh",
      text: "Samrat Dairy's milk is exceptionally thick and delicious! Highly recommended.",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Suman Devi",
      text: "Their paneer is so soft that it melts in your mouth. Truly premium quality!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      name: "Vikas Khanna",
      text: "The aroma of their Bilona Ghee takes me back to the traditional village taste.",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div className="departments-page">
      {/* --- HERO SECTION (Rich Design) --- */}
      <section className="dept-hero">
        <img
          src={logo}
          alt="Samrat Dairy Farm Background"
          className="hero-parallax-img"
        />
        <div className="dept-hero-overlay"></div>
        <div className="dept-hero-content">
          <div className="hero-tag">PREMIUM DAIRY FARM</div>

          <h1 className="hero-main-title">
            Purity You Can <br />
            <span>Taste & Trust</span>
          </h1>

          <p className="hero-description">
            Experience the freshness of 100% organic milk delivered straight
            from our green pastures to your doorstep. Nature's goodness,
            bottled.
          </p>

          <div className="hero-badges">
            <span className="badge">🌿 100% Organic</span>
            <span className="badge">🚜 Fresh Daily</span>
            <span className="badge">✅ ISO Certified</span>
          </div>
        </div>

        {/* Milk Wave Design */}
        <div className="milk-wave">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f3f4f6" /* Matched BG Color */
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* --- DEPARTMENTS GRID (Logic + Popup) --- */}
      <section className="dept-grid-section">
        <div className="dept-header">
          <h2 className="title-3d">
            Farm <span>Departments</span>
          </h2>
          <p className="subtitle">
            Well-organized units ensuring hygiene, health, and sustainability.
          </p>
        </div>

        <div className="dept-grid-container">
          {departmentsData.map((dept) => (
            <div
              className="dept-card"
              key={dept.id}
              onClick={() => openPopup(dept)}
            >
              <div className="dept-img-box">
                <img src={dept.image} alt={dept.title} />
                <span className="view-badge">View Details</span>
              </div>

              <div className="dept-info">
                <h3>{dept.title}</h3>
                <p>{dept.shortDesc}</p>
                <button className="learn-more-btn">Learn More →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FARM JOURNEY SECTION (Added) --- */}
      <section className="farm-details-section">
        <div className="details-glass-container">
          <h2 className="details-title">
            Pure Farm <span>To Kitchen</span> Journey
          </h2>
          <div className="details-features-grid">
            <div className="detail-item-3d">
              <div className="detail-number">01</div>
              <h4>Hygienic Milking</h4>
              <p>
                We use advanced machine milking at our farm to ensure
                human-touch-free, bacteria-free purity.
              </p>
            </div>
            <div className="detail-item-3d">
              <div className="detail-number">02</div>
              <h4>Cold Chain Logistics</h4>
              <p>
                Milk is chilled to 4°C immediately after milking to maintain
                peak freshness and nutrition.
              </p>
            </div>
            <div className="detail-item-3d">
              <div className="detail-number">03</div>
              <h4>Traditional Purity</h4>
              <p>
                Our Ghee and Paneer are still crafted using traditional Bilona
                and hand-pressed methods.
              </p>
            </div>
            <div className="detail-item-3d">
              <div className="detail-number">04</div>
              <h4>Direct Delivery</h4>
              <p>
                No middlemen! Delivered directly from our farm to your home
                within 3 hours of processing.
              </p>
            </div>
          </div>
          <div className="farm-stats-banner">
            <div className="stat-box">
              <strong>500+</strong> <span>Livestock</span>
            </div>
            <div className="stat-box">
              <strong>100%</strong> <span>Chemical Free</span>
            </div>
            <div className="stat-box">
              <strong>24/7</strong> <span>Farm Monitoring</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- REVIEWS SECTION (Added) --- */}
      <section className="reviews-section">
        <h2 className="details-title">
          What Our <span>Customers Say</span>
        </h2>
        <div
          className="reviews-grid"
          style={{
            display: "inline-flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {reviews.map((rev, i) => (
            <div className="review-card" key={i}>
              <div className="stars">{rev.stars}</div>
              <p>"{rev.text}"</p>
              <h4>- {rev.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* --- FAQ SECTION (Added) --- */}
      <section className="faq-section">
        <h2 className="details-title">
          Common <span>Questions</span>
        </h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeFaq === index ? "active" : ""}`}
              key={index}
              onClick={() => setActiveFaq(activeFaq === index ? null : index)}
            >
              <div className="faq-question">
                {faq.q}
                <span>{activeFaq === index ? "−" : "+"}</span>
              </div>
              {activeFaq === index && <div className="faq-answer">{faq.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION (Added) --- */}
      <section className="final-cta">
        <h2>Experience the Freshness</h2>
        <p>Order pure and hygienic dairy products for your home today.</p>
        <button className="cta-btn-main" onClick={() => navigate("/products")}>
          Browse Products
        </button>
      </section>

      {/* --- POPUP MODAL (Logic from Top File) --- */}
      {selectedDept && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup-btn" onClick={closePopup}>
              ×
            </button>

            <div className="popup-header-img">
              <img src={selectedDept.detailImage} alt={selectedDept.title} />
              <div className="popup-title-overlay">
                <h2>{selectedDept.title}</h2>
              </div>
            </div>

            <div className="popup-body">
              <h3>Department Responsibilities</h3>
              <ul className="dept-details-list">
                {selectedDept.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Departments;
