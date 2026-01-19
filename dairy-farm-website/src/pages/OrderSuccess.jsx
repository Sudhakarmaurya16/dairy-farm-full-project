import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/OrderSuccess.css";

const OrderSuccess = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <div className="success-overlay">
      <div className="success-card-3d">
        <div className="checkmark-circle">
          <div className="background"></div>
          <div className="checkmark draw"></div>
        </div>

        <h2 className="tiranga-text">Order Successful!</h2>
        <p>
          Thank you for choosing <strong>The Samrat Dairy</strong>. Aapka shuddh
          doodh aur dairy products jald hi pahunch jayenge.
        </p>

        <div className="order-details-mini">
          <span>Order ID: #SAM{Math.floor(Math.random() * 10000)}</span>
          <span>Status: Preparing for Delivery</span>
        </div>

        <button
          className="back-home-btn"
          onClick={() => {
            onClose();
            navigate("/");
          }}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
