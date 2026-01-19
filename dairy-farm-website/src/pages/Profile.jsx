import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"; // Import AuthContext
import "./styles/Profile.css";

const Profile = () => {
  // --- Global Auth ---
  const { user, login, logout } = useContext(AuthContext);

  // Local States
  const [isRegistering, setIsRegistering] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch orders whenever user changes (Login success)
  useEffect(() => {
    if (user && user.phone) {
      fetchOrders(user.phone);
    }
  }, [user]);

  const fetchOrders = async (phoneNum) => {
    try {
      const res = await axios.get(
        `https://dairy-farm-full-project-2.onrender.com/api/orders?phone=${phoneNum}`,
      );
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // --- 1. LOGIN FUNCTION ---
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const loginRes = await axios.post("https://dairy-farm-full-project-2.onrender.com/api/login", {
        phone,
        password,
      });

      if (loginRes.data.user) {
        login(loginRes.data.user); // ✅ Update Global State
      }
    } catch (error) {
      alert("❌ Invalid Phone or Password!");
    } finally {
      setLoading(false);
    }
  };

  // --- 2. REGISTER FUNCTION ---
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { ...formData, phone, password };
      await axios.post("https://dairy-farm-full-project-2.onrender.com/api/register", payload);
      alert("✅ Registration Successful! Please Login.");
      setIsRegistering(false);
    } catch (error) {
      alert("Registration Failed. Phone might be taken.");
    } finally {
      setLoading(false);
    }
  };

  // --- 3. LOGOUT ---
  const handleLogout = () => {
    logout(); // ✅ Global Logout
    setOrders([]);
    setPhone("");
    setPassword("");
  };

  // --- RENDER: LOGIN / REGISTER SCREEN ---
  // Check 'user' from Context instead of local state
  if (!user) {
    return (
      <div className="profile-wrapper login-mode">
        <div className="login-card-3d">
          <h2>{isRegistering ? "📝 Create Account" : "🔐 Secure Login"}</h2>
          <p>
            {isRegistering
              ? "Join our Dairy Family"
              : "Access your Order History"}
          </p>

          <form onSubmit={isRegistering ? handleRegister : handleLogin}>
            {isRegistering && (
              <>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="login-input"
                  required
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="login-input"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </>
            )}

            <input
              type="tel"
              placeholder="Mobile Number"
              className="login-input"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {isRegistering && (
              <input
                type="text"
                placeholder="Address"
                className="login-input"
                required
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            )}

            <button type="submit" className="login-btn">
              {loading
                ? "Processing..."
                : isRegistering
                  ? "Register Now"
                  : "Login Securely"}
            </button>
          </form>

          <p
            className="toggle-text"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering
              ? "Already have an account? Login"
              : "New User? Create Account"}
          </p>
        </div>
      </div>
    );
  }

  // --- RENDER: MAIN PROFILE (Logged In) ---
  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        <aside className="user-card-3d">
          <div className="user-avatar">
            {user.name ? user.name.charAt(0) : "U"}
          </div>
          <h3>{user.name}</h3>
          <p className="user-email">{user.email || "No Email"}</p>
          <div className="loyalty-badge">⭐ {orders.length * 50} Points</div>
          <hr />
          <div className="contact-info">
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Address:</strong> {user.address}
            </p>
          </div>
          <button className="edit-btn" onClick={handleLogout}>
            Logout 🔒
          </button>
        </aside>

        <main className="order-history-section">
          <h2 className="tiranga-heading">
            My <span>Orders</span>
          </h2>
          <div className="orders-list">
            {orders.length === 0 ? (
              <p className="no-orders">No orders found.</p>
            ) : (
              orders.map((order) => (
                <div className="order-card-3d" key={order._id}>
                  <div className="order-meta">
                    <span className="order-id">#{order._id.slice(-6)}</span>
                    <span className="order-date">
                      {new Date(order.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="order-details">
                    <div className="order-total">₹{order.totalAmount}</div>
                    <div
                      className={`status-badge ${order.status.toLowerCase()}`}
                    >
                      {order.status}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
