import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/DeptDetails.css";

const FreshMilkDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="details-wrapper">
      <div className="details-hero milk-bg-img">
        <div className="hero-overlay"></div>
        <div className="hero-text-3d">
          <h1>
            Samrat <span>Fresh Milk</span>
          </h1>
          <p>Directly from Farm to your Home within 3-4 hours.</p>
        </div>
      </div>

      <div className="details-content-container">
        <div className="details-grid">
          <div className="details-visual">
            <img
              src="https://i.pinimg.com/736x/79/81/eb/7981ebddff2991fd734b6390a58daeb1.jpg"
              alt="Milking"
              className="details-img-3d"
            />
            <div className="purity-tag saffron-bg">A2 Grade Certified</div>
          </div>
          <div className="details-text-box">
            <h2 className="tiranga-heading">
              OUR <span>PURE MILK</span> PROCESS
            </h2>
            <p className="description">
              Humara doodh bina kisi human touch ke computerized machines se
              nikala jata hai aur turant 4°C par chill kiya jata hai.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h4>🚫 Zero Adulteration</h4>
                <p>No water, no milk powder added.</p>
              </div>
              <div className="benefit-item">
                <h4>🥛 Glass Bottles</h4>
                <p>Delivered in eco-friendly glass bottles.</p>
              </div>
            </div>
            <button
              className="order-now-btn green-btn"
              onClick={() => navigate("/products")}
            >
              Order Fresh Milk
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FreshMilkDetail;
