import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/DeptDetails.css";

const PaneerDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="details-wrapper">
      <div className="details-hero paneer-bg-img">
        <div className="hero-overlay"></div>
        <div className="hero-text-3d">
          <h1>
            Soft <span>Malai Paneer</span>
          </h1>
          <p>Made fresh every morning from 100% full-cream milk.</p>
        </div>
      </div>

      <div className="details-content-container">
        <div className="details-grid">
          <div className="details-visual">
            <img
              src="https://i.pinimg.com/1200x/d4/5a/f1/d45af1673be931c3d81c045013beff94.jpg"
              alt="Paneer"
              className="details-img-3d"
            />
            <div className="purity-tag saffron-bg">No Chemicals Used</div>
          </div>
          <div className="details-text-box">
            <h2 className="tiranga-heading">
              SAMRAT <span>MALAI PANEER</span>
            </h2>
            <p className="description">
              Hum paneer ko soft banane ke liye koi artificial softening agent
              nahi dalte. Ye natural aur protein-rich hai.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h4>☁️ Extra Soft</h4>
                <p>Stays soft even after cooking.</p>
              </div>
              <div className="benefit-item">
                <h4>📦 Vacuum Packed</h4>
                <p>Ensures zero bacterial contact.</p>
              </div>
            </div>
            <button
              className="order-now-btn green-btn"
              onClick={() => navigate("/products")}
            >
              Order Paneer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaneerDetail;
