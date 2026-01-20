// import React, { useContext, useState } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";
// // Ensure OrderSuccess file exists or comment this out
// import OrderSuccess from "./OrderSuccess";
// import "./styles/Cart.css";

// const Cart = () => {
//   const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const navigate = useNavigate();

//   // Calculation
//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0,
//   );
//   const deliveryCharge = subtotal > 500 || subtotal === 0 ? 0 : 20;
//   const total = subtotal + deliveryCharge;

//   const handlePlaceOrder = () => {
//     if (cartItems.length > 0) {
//       navigate("/payment");
//     }
//   };

//   return (
//     <div className="cart-page-wrapper">
//       <div className="cart-container">
//         <header className="cart-header">
//           <h2 className="tiranga-heading">
//             My <span>Dairy</span> Basket
//           </h2>
//           <p>{cartItems.length} items in your cart</p>
//         </header>

//         {cartItems.length === 0 && !showSuccess ? (
//           <div className="empty-cart-container-3d">
//             <div className="floating-cart-icon">🛒</div>
//             <h3>Basket is Empty!</h3>
//             <p>Don't miss out on fresh farm products.</p>
//             <button
//               className="shop-now-btn-3d"
//               style={{ padding: "20px", marginTop: "20px" }}
//               onClick={() => navigate("/products")}
//             >
//               Start Shopping
//             </button>
//           </div>
//         ) : (
//           <div className="cart-main-grid">
//             {/* Left Side: Items List */}
//             <div className="cart-items-section">
//               {cartItems.map((item) => (
//                 // FIX: Use _id or fallback to id (Safety for mixed data)
//                 <div className="cart-item-card-3d" key={item._id || item.id}>
//                   <div className="item-img-box">
//                     <img src={item.image} alt={item.name} />
//                   </div>
//                   <div className="item-info-box">
//                     <h4>{item.name}</h4>
//                     <p className="unit-price">₹{item.price} / unit</p>
//                   </div>
//                   <div className="item-actions-box">
//                     <div className="qty-selector-3d">
//                       {/* ✅ FIX: Pass the correct ID to remove */}
//                       <button
//                         onClick={() => removeFromCart(item._id || item.id)}
//                       >
//                         -
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button onClick={() => addToCart(item)}>+</button>
//                     </div>
//                     <p className="sub-total">₹{item.price * item.quantity}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Side: Bill Summary */}
//             <div className="bill-summary-card-3d">
//               <h3>Invoice Details</h3>
//               <div className="bill-details">
//                 <div className="bill-line">
//                   <span>Items Total</span>
//                   <span>₹{subtotal}</span>
//                 </div>
//                 <div className="bill-line">
//                   <span>Delivery Fee</span>
//                   <span className={deliveryCharge === 0 ? "free-text" : ""}>
//                     {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
//                   </span>
//                 </div>
//                 {deliveryCharge > 0 && (
//                   <p className="promo-text">
//                     Add ₹{500 - subtotal} more for FREE delivery!
//                   </p>
//                 )}
//                 <div className="bill-divider"></div>
//                 <div className="bill-line grand-total">
//                   <span>Grand Total</span>
//                   <span>₹{total}</span>
//                 </div>
//               </div>
//               <button className="checkout-btn-3d" onClick={handlePlaceOrder}>
//                 Confirm Order <i className="fas fa-arrow-right"></i>
//               </button>
//               <p className="cod-label" style={{ marginTop: "30px" }}>
//                 ✅ Cash on Delivery Available
//               </p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Success Modal (Optional) */}
//       {showSuccess && (
//         <OrderSuccess
//           isOpen={showSuccess}
//           onClose={() => setShowSuccess(false)}
//         />
//       )}
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
// Ensure OrderSuccess file exists or comment this out
import OrderSuccess from "./OrderSuccess";
import "./styles/Cart.css";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [distance, setDistance] = useState(null); // Distance state
  const [locationError, setLocationError] = useState("");
  const navigate = useNavigate();

  // --- 1. SETUP STORE LOCATION (Apni Shop ka Location yahan dalein) ---
  const STORE_LAT = 26.8467; // Example: Lucknow Latitude (Change this)
  const STORE_LNG = 80.9462; // Example: Lucknow Longitude (Change this)

  // --- 2. Calculate Distance (Haversine Formula) ---
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d.toFixed(1); // 1 decimal tak return karega
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  // --- 3. Get User Location on Load ---
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const dist = calculateDistance(
            STORE_LAT,
            STORE_LNG,
            userLat,
            userLng,
          );
          setDistance(dist);
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocationError("Enable location for delivery rates.");
          // Default behavior if location denied: Assume long distance (Charge ₹20)
          setDistance(null);
        },
      );
    } else {
      setLocationError("Geolocation is not supported by this browser.");
    }
  }, []);

  // --- 4. CALCULATION LOGIC ---
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // LOGIC: Agar distance pata hai aur 3km se zyada hai to ₹20, nahi to 0
  // Agar location nahi mili (distance null), toh by default ₹20 laga rahe hain (Safety ke liye)
  let deliveryCharge = 0;

  if (distance === null) {
    deliveryCharge = 20; // Default if location not found
  } else if (parseFloat(distance) > 3.0) {
    deliveryCharge = 20; // 3KM se zyada hone par charge
  } else {
    deliveryCharge = 0; // 3KM ke andar FREE
  }

  // Optional: Agar cart khali hai to delivery charge 0
  if (subtotal === 0) deliveryCharge = 0;

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

              {/* Distance Display Section */}
              {locationError ? (
                <p
                  className="location-warning"
                  style={{ color: "red", fontSize: "0.8rem" }}
                >
                  ⚠️ {locationError} (Default fee applied)
                </p>
              ) : (
                <p
                  className="distance-info"
                  style={{
                    color: "#138808",
                    fontSize: "0.9rem",
                    marginBottom: "10px",
                  }}
                >
                  📍 Distance from Farm:{" "}
                  <strong>
                    {distance ? `${distance} km` : "Calculating..."}
                  </strong>
                </p>
              )}

              <div className="bill-details">
                <div className="bill-line">
                  <span>Items Total</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="bill-line">
                  <span>
                    Delivery Fee{" "}
                    {distance && parseFloat(distance) <= 3 ? "(Under 3km)" : ""}
                  </span>
                  <span className={deliveryCharge === 0 ? "free-text" : ""}>
                    {deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}
                  </span>
                </div>

                {/* Message logic based on distance */}
                {distance && parseFloat(distance) > 3 && (
                  <p className="promo-text" style={{ color: "#ff9933" }}>
                    Delivery is free only within 3 km.
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
