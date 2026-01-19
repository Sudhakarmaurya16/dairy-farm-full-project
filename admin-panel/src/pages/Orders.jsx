import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Orders.css"; // CSS file ka path check kar lena

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Component load hone par orders fetch karein
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://dairy-farm-full-project-2.onrender.com/api/orders");

      // Data ko date ke hisaab se sort karein (Latest pehle)
      // Aapke DB me field ka naam 'date' hai, isliye hum 'b.date' use kar rahe hain
      const sortedOrders = res.data.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
      );

      setOrders(sortedOrders);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Status update karne ka function
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`https://dairy-farm-full-project-2.onrender.com/api/orders/${id}`, {
        status: newStatus,
      });
      fetchOrders(); // List ko refresh karein
    } catch (error) {
      alert("Status update failed!");
    }
  };

  // --- Date Calculation Logic ---
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  // Filter 1: Jo orders pichle 24 ghante me aaye (Recent)
  const recentOrders = orders.filter(
    (order) => new Date(order.date) > twentyFourHoursAgo,
  );

  // Filter 2: Jo orders 24 ghante se purane hain (Past)
  const pastOrders = orders.filter(
    (order) => new Date(order.date) <= twentyFourHoursAgo,
  );

  // --- Helper Function: Card ko render karne ke liye ---
  const renderOrderList = (orderList) => {
    if (orderList.length === 0) {
      return <div className="no-orders-msg">No orders in this section.</div>;
    }

    return (
      <div className="orders-grid">
        {orderList.map((order) => (
          <div className="order-card" key={order._id}>
            {/* Header: ID aur Status */}
            <div className="order-header">
              <span className="order-id">
                ID: {order._id.slice(-6).toUpperCase()}
              </span>
              <select
                className={`status-select ${order.status.toLowerCase().replace(/\s/g, "-")}`}
                value={order.status}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
              >
                <option value="Pending">🕒 Pending</option>
                <option value="Out for Delivery">🚚 Out for Delivery</option>
                <option value="Delivered">✅ Delivered</option>
                <option value="Cancelled">❌ Cancelled</option>
              </select>
            </div>

            {/* Customer Details */}
            <div className="customer-info">
              <h4>{order.customerName}</h4>
              <p>📞 {order.phone}</p>
              <p>🏠 {order.address}</p>
            </div>

            {/* Order Items */}
            <div className="order-items">
              {order.items &&
                order.items.map((item, index) => (
                  <div key={index} className="item-row">
                    <span>
                      {item.name} <small>x {item.quantity}</small>
                    </span>
                    <span>
                      ₹{item.price ? item.price * item.quantity : "--"}
                    </span>
                  </div>
                ))}
            </div>

            {/* Total Amount */}
            <div className="order-total">
              <span>Total:</span>
              <span className="amount">₹{order.totalAmount}</span>
            </div>

            {/* Order Date (Footer) */}
            <div className="order-footer-date">
              📅{" "}
              {new Date(order.date).toLocaleString("en-IN", {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="orders-container">
      <h2 className="page-title">Admin Dashboard - Orders</h2>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>Loading orders or No data found...</p>
        </div>
      ) : (
        <>
          {/* Section 1: Recent Orders */}
          <div className="section-header">
            <h3>🔥 Recent Orders (24 Hours)</h3>
            <span className="badge new">{recentOrders.length}</span>
          </div>
          {renderOrderList(recentOrders)}

          <hr className="section-divider" />

          {/* Section 2: Past Orders */}
          <div className="section-header">
            <h3>🗂️ Order History</h3>
            <span className="badge old">{pastOrders.length}</span>
          </div>
          {renderOrderList(pastOrders)}
        </>
      )}
    </div>
  );
};

export default Orders;
