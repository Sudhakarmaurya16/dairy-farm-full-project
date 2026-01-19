import React, { useState } from "react";
import "./styles/About.css";
// ✅ Import ALL Data including Text Content
import {
  aboutPageContent, // New Text Content
  ownerDetails,
  processSteps,
  valuesData,
  storyFeatures,
} from "../data/aboutData";

const About = () => {
  const [showOwnerPopup, setShowOwnerPopup] = useState(false);

  // Destructure for cleaner usage
  const { hero, story, process, values, founderSection } = aboutPageContent;

  return (
    <div className="about-wrapper">
      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>
            {hero.titleBefore} <span>{hero.titleHighlight}</span>{" "}
            {hero.titleAfter}
          </h1>
          <p>
            {hero.descriptionPrefix} <strong>{hero.brandName}</strong>
            {hero.descriptionSuffix}
          </p>
        </div>
      </section>

      {/* --- OUR STORY SECTION --- */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-image">
            {/* 1. Image aur Badge ko ek wrapper (img-frame) me rakha */}
            <div className="img-frame">
              <img src={ownerDetails.image} alt="Founder" />

              <div className="experience-badge">
                <span className="years">{story.badgeYears}</span>
                <span className="text">
                  Years of <br /> Experience
                </span>
              </div>
            </div>

            {/* 2. Name aur Role ko wrapper ke bahar nikala taaki overlap na ho */}
            <div className="founder-info">
              <h3>{ownerDetails.name}</h3>
              <p>{ownerDetails.role}</p>
            </div>
          </div>

          <div className="story-text">
            <h4 className="sub-heading">{story.subHeading}</h4>
            <h2>{story.mainHeading}</h2>

            <p>
              {story.para1Prefix} <em>{story.para1Quote}</em>
            </p>

            <p>
              {story.para2Prefix} <strong>{story.para2Brand}</strong>
              {story.para2Suffix}
            </p>

            <div className="story-features">
              {storyFeatures.map((feature, index) => (
                <div className="feature" key={index}>
                  <span className="icon">{feature.icon}</span>
                  <div>
                    <h5>{feature.title}</h5>
                    <small>{feature.desc}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section className="process-section">
        <h2 className="section-title">{process.title}</h2>
        <p className="section-subtitle">{process.subtitle}</p>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div className="process-card" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="values-section">
        <div className="values-overlay">
          <h2>{values.title}</h2>
          <div className="values-grid">
            {valuesData.map((value, index) => (
              <div className="value-box" key={index}>
                <h3>
                  {value.icon} {value.title}
                </h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOUNDER QUOTE SECTION --- */}
      <section className="founder-msg">
        <blockquote>"{founderSection.quote}"</blockquote>
        <cite>{founderSection.cite}</cite>

        {/* Clickable Founder Image */}
        <div
          className="founder-avatar-container"
          onClick={() => setShowOwnerPopup(true)}
        >
          <img
            src={ownerDetails.image}
            alt={ownerDetails.name}
            className="founder-avatar"
          />
          <span className="click-hint">{founderSection.clickHint}</span>
        </div>
      </section>

      {/* --- OWNER DETAILS POPUP (MODAL) --- */}
      {showOwnerPopup && (
        <div className="popup-overlay" onClick={() => setShowOwnerPopup(false)}>
          <div
            className="popup-content owner-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowOwnerPopup(false)}
            >
              &times;
            </button>

            <div className="popup-grid">
              {/* Left: Image */}
              <div className="popup-image owner-img-box">
                <img src={ownerDetails.image} alt={ownerDetails.name} />
              </div>

              {/* Right: Content */}
              <div className="popup-details">
                <span
                  className="popup-badge"
                  style={{ background: "var(--gold)", color: "black" }}
                >
                  VISIONARY
                </span>
                <h2>{ownerDetails.name}</h2>
                <h4 className="owner-role">{ownerDetails.role}</h4>

                <p className="popup-desc" style={{ marginTop: "20px" }}>
                  {ownerDetails.bio}
                </p>

                <div className="owner-vision-box">
                  <strong>Founder's Vision:</strong>
                  <p>“{ownerDetails.vision}”</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
