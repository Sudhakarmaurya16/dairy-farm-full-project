import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Success.css";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-card-3d">
        <div className="success-icon">✅</div>
        <h1>Order Placed!</h1>
        <p>
          Thank you for choosing <span>Dairy Fresh</span>. Your pure milk
          products are being packed with care.
        </p>
        <button className="back-home-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
