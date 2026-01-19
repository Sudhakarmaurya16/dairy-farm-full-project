import React from "react";
// 1. Routes aur Route import karein
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AddProduct from "./pages/AddProduct";
import Dashboard from "./pages/Dashboard"; // Import Dashboard
import Orders from "./pages/Orders"; // Import Orders
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        {/* 2. Routes Wrapper lagayein */}
        <Routes>
          {/* 3. Har page ka rasta set karein */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
