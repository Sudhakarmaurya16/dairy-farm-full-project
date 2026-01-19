import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles/Dashboard.css"; // CSS hum niche banayenge

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEarnings: 0,
    totalOrders: 0,
    pendingOrders: 0,
    totalProducts: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Dono API ek sath call karein (Orders aur Products)
      const [ordersRes, productsRes] = await Promise.all([
        axios.get("http://localhost:5001/api/orders"),
        axios.get("http://localhost:5001/api/products"),
      ]);

      const orders = ordersRes.data;
      const products = productsRes.data;

      // --- Calculations ---

      // 1. Total Kamai (Earnings)
      const earnings = orders.reduce(
        (acc, order) => acc + (order.totalAmount || 0),
        0,
      );

      // 2. Pending Orders Count
      const pending = orders.filter((o) => o.status === "Pending").length;

      setStats({
        totalEarnings: earnings,
        totalOrders: orders.length,
        pendingOrders: pending,
        totalProducts: products.length,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2 className="dash-title">📊 Farm Overview</h2>

      {/* --- STATS CARDS --- */}
      <div className="stats-grid">
        {/* Card 1: Total Earnings */}
        <div className="stat-card earnings">
          <div className="icon">💰</div>
          <div className="info">
            <h3>Total Earnings</h3>
            <p>₹{stats.totalEarnings.toLocaleString()}</p>
          </div>
        </div>

        {/* Card 2: Total Orders */}
        <div className="stat-card orders">
          <div className="icon">📦</div>
          <div className="info">
            <h3>Total Orders</h3>
            <p>{stats.totalOrders}</p>
          </div>
        </div>

        {/* Card 3: Pending Delivery */}
        <div className="stat-card pending">
          <div className="icon">⏳</div>
          <div className="info">
            <h3>Pending Orders</h3>
            <p>{stats.pendingOrders}</p>
          </div>
        </div>

        {/* Card 4: Total Products */}
        <div className="stat-card products">
          <div className="icon">🥛</div>
          <div className="info">
            <h3>Active Products</h3>
            <p>{stats.totalProducts}</p>
          </div>
        </div>
      </div>

      <div className="welcome-banner">
        <h3>🚀 Welcome Back, Admin!</h3>
        <p>
          Your Dairy Farm business is growing. Manage your inventory and orders
          from here.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
