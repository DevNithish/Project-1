import React from "react";
import "./Features.css";
import { useIntersectionObserver } from "../About/useIntersectionObserver";
import {
  FaMobileAlt,
  FaCogs,
  FaBullseye,
  FaCode,
  FaWrench,
} from "react-icons/fa";

// ⭐ Removed the description property from each feature
const features = [
  { icon: <FaMobileAlt />, title: "Responsive Design" },
  { icon: <FaCogs />, title: "Extensive Configuration" },
  { icon: <FaBullseye />, title: "Modern Motion Design" },
  { icon: <FaCode />, title: "SEO Friendly Coding" },
  { icon: <FaWrench />, title: "Best Technical Assistance" },
];

const WebDesignFeatures = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="Features"
      className={`web-design-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <div className="web-design-title-container">
        <h2 className="section-subtitle">Key Functionalities</h2>
        <h1 className="section-main-title">The Designing Features of Web</h1>
      </div>

      <div className="features-grid">
        {features.map(({ icon, title }, i) => (
          <div key={i} className="feature-card">
            <div className="feature-icon">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            {/* ⭐ The <p> tag for the description has been removed */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WebDesignFeatures;
