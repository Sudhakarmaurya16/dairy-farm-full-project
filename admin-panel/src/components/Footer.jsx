import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2026 Dairy Farm Admin Panel. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#2c3e50",
    color: "white",
    textAlign: "center",
    padding: "1rem",
    marginTop: "auto", // Ye footer ko niche push karega
    width: "100%",
  },
};

export default Footer;
