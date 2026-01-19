import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/DeptDetails.css";

const DesiGheeDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="details-wrapper">
      <div className="details-hero ghee-bg-img">
        <div className="hero-overlay"></div>
        <div className="hero-text-3d">
          <h1>
            Traditional <span>Desi Ghee</span>
          </h1>
          <p>Hand-churned using the Vedic Bilona Method.</p>
        </div>
      </div>

      <div className="details-content-container">
        <div className="details-grid">
          <div className="details-visual">
            <img
              src="https://i.pinimg.com/736x/55/39/b2/5539b21678cae3803e0039a2a6b8fb14.jpg"
              alt="Ghee"
              className="details-img-3d"
            />
            <div className="purity-tag saffron-bg">100% Vedic Process</div>
          </div>
          <div className="details-text-box">
            <h2 className="tiranga-heading">
              SAMRAT <span>BILONA GHEE</span>
            </h2>
            <p className="description">
              Humara ghee makkhan se nahi, dahi ko matth kar banaya jata hai, jo
              ise medicinal properties se bharpoor banata hai.
            </p>
            <div className="benefits-grid">
              <div className="benefit-item">
                <h4>🍯 Granular Texture</h4>
                <p>Naturally grainy and rich aroma.</p>
              </div>
              <div className="benefit-item">
                <h4>💪 Immunity Booster</h4>
                <p>High in Vitamin K2 and Butyric acid.</p>
              </div>
            </div>
            <button
              className="order-now-btn green-btn"
              onClick={() => navigate("/products")}
            >
              Order Desi Ghee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesiGheeDetail;
