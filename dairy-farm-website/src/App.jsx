// import React from "react";
// import { Routes, Route } from "react-router-dom"; // ❌ Router import nahi karna hai
// // ❌ CartProvider bhi import nahi karna (wo main.jsx me hai)

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Departments from "./pages/Departments";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import Payment from "./pages/Payment";
// import Success from "./pages/Success";
// import FreshMilkDetail from "./pages/FreshMilkDetail";
// import DesiGheeDetail from "./pages/DesiGheeDetail";
// import PaneerDetail from "./pages/PaneerDetail";
// import Profile from "./pages/Profile";
// import Contact from "./pages/Contact";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-layout">
//       {/* 1. Navbar Hamesha Upar Rahega */}
//       <Navbar />

//       {/* 2. Beech me Routes rahenge */}
//       <div className="main-content">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/departments" element={<Departments />} />
//           <Route path="/details/milk" element={<FreshMilkDetail />} />
//           <Route path="/details/ghee" element={<DesiGheeDetail />} />
//           <Route path="/details/paneer" element={<PaneerDetail />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/profile" element={<Profile />} />
//           <Route path="/payment" element={<Payment />} />
//           <Route path="/success" element={<Success />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>

//       {/* 3. Footer Hamesha Niche Rahega */}
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

// --- COMPONENTS ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// --- PAGES ---
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Success from "./pages/Success"; // Ensure this file exists

// --- DETAIL PAGES (Purane Wale) ---
import FreshMilkDetail from "./pages/FreshMilkDetail";
import DesiGheeDetail from "./pages/DesiGheeDetail";
import PaneerDetail from "./pages/PaneerDetail";

import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <div className="main-content">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />

          {/* Payment */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />

          {/* ✅ OLD ROUTES RESTORED (Specific Pages) */}
          <Route path="/details/milk" element={<FreshMilkDetail />} />
          <Route path="/details/ghee" element={<DesiGheeDetail />} />
          <Route path="/details/paneer" element={<PaneerDetail />} />

          {/* Baaki pages ke liye aap Products page par redirect kar sakte hain ya naye page bana sakte hain */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
