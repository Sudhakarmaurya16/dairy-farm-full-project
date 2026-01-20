// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";
// import { CartContext } from "../context/CartContext";
// import logo from "../assets/brand.png";
// import "./styles/Navbar.css";

// const Navbar = () => {
//   const [deferredPrompt, setDeferredPrompt] = useState(null);

//   // 1. Menu Open/Close State banayein
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const { cartItems } = useContext(CartContext);
//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   useEffect(() => {
//     window.addEventListener("beforeinstallprompt", (e) => {
//       e.preventDefault();
//       setDeferredPrompt(e);
//     });
//   }, []);

//   const handleInstallClick = () => {
//     if (deferredPrompt) {
//       deferredPrompt.prompt();
//       deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === "accepted") {
//           console.log("User installed the app");
//         }
//         setDeferredPrompt(null);
//       });
//     }
//   };

//   return (
//     <nav className="navbar-container">
//       {/* --- LOGO SECTION --- */}
//       <div className="navbar-logo">
//         <Link
//           to="/"
//           className="logo-flex"
//           onClick={() => setIsMobileMenuOpen(false)}
//         >
//           <img src={logo} alt="Samrat Dairy Logo" className="nav-main-logo" />
//           <div className="brand-text-tiranga">
//             <span className="saffron">THE SAMRAT DAIRY</span>
//           </div>
//         </Link>
//       </div>

//       {/* --- 2. HAMBURGER ICON (Mobile Only) --- */}
//       <div
//         className="mobile-toggle"
//         onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//       >
//         {isMobileMenuOpen ? "✖" : "☰"}
//       </div>

//       {/* --- LINKS SECTION --- */}
//       {/* 3. Logic: Agar 'isMobileMenuOpen' true hai to 'active' class add hogi */}
//       <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
//         {/* Link par click hone par menu band ho jaye isliye onClick lagaya */}
//         <li onClick={() => setIsMobileMenuOpen(false)}>
//           <Link to="/" className="three-d-btn">
//             🏠 Home
//           </Link>
//         </li>
//         <li onClick={() => setIsMobileMenuOpen(false)}>
//           <Link to="/about" className="three-d-btn">
//             👨‍🌾 About
//           </Link>
//         </li>
//         <li onClick={() => setIsMobileMenuOpen(false)}>
//           <Link to="/departments" className="three-d-btn">
//             🏢 Depts
//           </Link>
//         </li>
//         <li onClick={() => setIsMobileMenuOpen(false)}>
//           <Link to="/products" className="three-d-btn">
//             🥛 Products
//           </Link>
//         </li>
//         <li onClick={() => setIsMobileMenuOpen(false)}>
//           <Link to="/profile" className="three-d-btn">
//             👤 Profile
//           </Link>
//         </li>
//         <li onClick={() => setIsMobileMenuOpen(false)}>
//           <Link to="/contact" className="three-d-btn">
//             📞 Contact
//           </Link>
//         </li>

//         <li onClick={() => setIsMobileMenuOpen(false)}>
//           <Link to="/cart" className="three-d-btn cart-btn">
//             🛒 Cart
//             {cartCount > 0 && (
//               <span className="nav-cart-badge">{cartCount}</span>
//             )}
//           </Link>
//         </li>

//         {/* Install Button ko bhi Menu ke andar adjust kiya ja sakta hai */}
//         {deferredPrompt && (
//           <li onClick={() => setIsMobileMenuOpen(false)}>
//             <button className="install-btn-3d" onClick={handleInstallClick}>
//               📲 Install App
//             </button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import logo from "../assets/brand.png";
import "./styles/Navbar.css";

const Navbar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const { cartItems } = useContext(CartContext);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    });
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User installed the app");
        }
        setDeferredPrompt(null);
      });
    }
  };

  return (
    <nav className="navbar-container">
      {/* --- LOGO SECTION --- */}
      <div className="navbar-logo">
        <Link to="/" className="logo-flex">
          <img src={logo} alt="Samrat Dairy Logo" className="nav-main-logo" />
          <div className="brand-text-tiranga">
            <span className="saffron">THE SAMRAT DAIRY</span>
          </div>
        </Link>
      </div>

      {/* --- LINKS SECTION (PC: Right Side, Mobile: Bottom Grid) --- */}
      <ul className="nav-links">
        <li>
          <Link to="/" className="three-d-btn">🏠 Home</Link>
        </li>
        <li>
          <Link to="/about" className="three-d-btn">👨‍🌾 About</Link>
        </li>
        <li>
          <Link to="/departments" className="three-d-btn">🏢 Depts</Link>
        </li>
        <li>
          <Link to="/products" className="three-d-btn">🥛 Products</Link>
        </li>
        <li>
          <Link to="/profile" className="three-d-btn">👤 Profile</Link>
        </li>
        <li>
          <Link to="/contact" className="three-d-btn">📞 Contact</Link>
        </li>

        <li>
          <Link to="/cart" className="three-d-btn cart-btn">
            🛒 Cart
            {cartCount > 0 && (
              <span className="nav-cart-badge">{cartCount}</span>
            )}
          </Link>
        </li>

        {deferredPrompt && (
          <li>
            <button className="install-btn-3d" onClick={handleInstallClick}>
              📲 Install
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;