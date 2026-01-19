import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Payment.css";

const Payment = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // 1. Loading State Add kiya (Duplicate order rokne ke liye)
  const [isProcessing, setIsProcessing] = useState(false);

  const [userDetails, setUserDetails] = useState({
    customerName: "",
    phone: "",
    address: "",
  });

  // Total Calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryCharge = subtotal > 500 || subtotal === 0 ? 0 : 50;
  const totalAmount = subtotal + deliveryCharge;

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Agar process ho raha hai to dubara click na ho
    if (isProcessing) return;

    setIsProcessing(true); // Button disable kar diya

    const orderData = {
      ...userDetails,
      items: cartItems,
      totalAmount: totalAmount,
      status: "Pending",
      date: new Date(),
    };

    try {
      // Backend Port 5001 check
      const res = await axios.post(
        "http://localhost:5001/api/orders",
        orderData,
      );

      if (res.status === 201) {
        alert("🎉 Order Placed Successfully!");
        clearCart();
        navigate("/");
      }
    } catch (error) {
      console.error("Order Failed:", error);
      alert("❌ Order Failed! Server check karein.");
      setIsProcessing(false); // Error aaye to button wapis enable karein
    }
  };

  if (cartItems.length === 0)
    return <div className="empty-msg">Cart is Empty!</div>;

  return (
    <div className="payment-container">
      <div className="payment-wrapper">
        <h2>🚚 Delivery Details</h2>
        <form onSubmit={handlePlaceOrder}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="customerName"
              placeholder="Ex: Rahul Sharma"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Ex: 9876543210"
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Delivery Address</label>
            <textarea
              name="address"
              placeholder="House No, Street, City..."
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="bill-summary">
            <h3>Bill Summary</h3>
            <div className="row">
              <span>Subtotal:</span> <span>₹{subtotal}</span>
            </div>
            <div className="row">
              <span>Delivery:</span> <span>₹{deliveryCharge}</span>
            </div>
            <div className="row total">
              <span>Total to Pay:</span> <span>₹{totalAmount}</span>
            </div>
          </div>

          <div className="payment-method">
            <label>
              <input type="radio" checked readOnly />
              Cash on Delivery (COD) ✅
            </label>
          </div>

          {/* Button Update: Disable logic add kiya */}
          <button
            type="submit"
            className="confirm-btn"
            disabled={isProcessing}
            style={{
              opacity: isProcessing ? 0.7 : 1,
              cursor: isProcessing ? "not-allowed" : "pointer",
            }}
          >
            {isProcessing ? "Processing..." : "Place Order Now 🚀"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
