import React, { useState } from "react";
import "./styles/Contact.css";
import logo from "../assets/logo.3.png";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Thank you ${formData.name}! Your message has been sent to Samrat Dairy.`
    );
    setFormData({
      name: "",
      email: "",
      subject: "General Inquiry",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* --- NEW HERO SECTION --- */}
      <section className="contact-hero">
        <div className="hero-image-container">
          {/* Replace this URL with your actual farm image */}
          <img
            src= {logo}
            alt="Samrat Farm Hero"
            className="hero-bg-img"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Get In <span>Touch</span>
          </h1>
          <p className="hero-subtitle">
            Experience the purity of Samrat Dairy Farm. We are here to help you.
          </p>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <div className="contact-main-wrapper">
        <div className="contact-container">
          {/* 1. Contact Info Cards */}
          <div className="contact-info">
            <div className="info-card-3d">
              <div className="info-icon">📍</div>
              <div className="info-text">
                <h4>Farm Address</h4>
                <p>Samrat Dairy Farm, Near Green Valley, Punjab, India</p>
              </div>
            </div>
            <div className="info-card-3d">
              <div className="info-icon">📞</div>
              <div className="info-text">
                <h4>Call Us</h4>
                <p>+91 98765 43210</p>
                <p>+91 91234 56789</p>
              </div>
            </div>
            <div className="info-card-3d">
              <div className="info-icon">✉️</div>
              <div className="info-text">
                <h4>Email Us</h4>
                <p>info@samratdairy.com</p>
              </div>
            </div>
          </div>

          {/* 2. Contact Form */}
          <div className="contact-form-container">
            <form className="contact-form-3d" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <select
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Bulk Order">
                    Bulk Order (Wedding/Events)
                  </option>
                  <option value="Farm Tour">Farm Tour Booking</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>
              <div className="input-group">
                <textarea
                  placeholder="How can we help you?"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>
              <button type="submit" className="cta-btn-main">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 3. Map Section */}
      <div className="map-section">
        <h3 className="details-title">
          Locate <span>Our Farm</span>
        </h3>
        <div className="map-placeholder glass-effect">
          <p>📍 Google Map Integration Area</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
