import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
// Ensure OrderSuccess file exists or comment this out
import OrderSuccess from "./OrderSuccess";
import "./styles/Cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  // Calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryCharge = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const total = subtotal + deliveryCharge;

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      navigate("/payment");
    }
  };

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container">
        <header className="cart-header">
          <h2 className="tiranga-heading">
            My <span>Dairy</span> Basket
          </h2>
          <p>{cartItems.length} items in your cart</p>
        </header>

        {cartItems.length === 0 && !showSuccess ? (
          <div className="empty-cart-container-3d">
            <div className="floating-cart-icon">🛒</div>
            <h3>Basket is Empty!</h3>
            <p>Don't miss out on fresh farm products.</p>
            <button
              className="shop-now-btn-3d"
              style={{ padding: "20px", marginTop: "20px" }}
              onClick={() => navigate("/products")}
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="cart-main-grid">
            {/* Left Side: Items List */}
            <div className="cart-items-section">
              {cartItems.map((item) => (
                // FIX: Use _id or fallback to id (Safety for mixed data)
                <div className="cart-item-card-3d" key={item._id || item.id}>
                  <div className="item-img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-info-box">
                    <h4>{item.name}</h4>
                    <p className="unit-price">₹{item.price} / unit</p>
                  </div>
                  <div className="item-actions-box">
                    <div className="qty-selector-3d">
                      {/* ✅ FIX: Pass the correct ID to remove */}
                      <button
                        onClick={() => removeFromCart(item._id || item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => addToCart(item)}>+</button>
                    </div>
                    <p className="sub-total">₹{item.price * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side: Bill Summary */}
            <div className="bill-summary-card-3d">
              <h3>Invoice Details</h3>
              <div className="bill-details">
                <div className="bill-line">
                  <span>Items Total</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="bill-line">
                  <span>Delivery Fee</span>
                  <span className={deliveryCharge === 0 ? "free-text" : ""}>
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </div>
                {deliveryCharge > 0 && (
                  <p className="promo-text">
                    Add ₹{500 - subtotal} more for FREE delivery!
                  </p>
                )}
                <div className="bill-divider"></div>
                <div className="bill-line grand-total">
                  <span>Grand Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
              <button className="checkout-btn-3d" onClick={handlePlaceOrder}>
                Confirm Order <i className="fas fa-arrow-right"></i>
              </button>
              <p className="cod-label" style={{ marginTop: "30px" }}>
                ✅ Cash on Delivery Available
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Success Modal (Optional) */}
      {showSuccess && (
        <OrderSuccess
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </div>
  );
};

export default Cart;
