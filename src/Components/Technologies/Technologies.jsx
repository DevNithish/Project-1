import React from "react";
import "./Technologies.css";
import { useIntersectionObserver } from "../About/useIntersectionObserver";

const technologies = [
  { src: "/icons8-react-native-48.jpeg", name: "React" },
  { src: "/icons8-angularjs-48.jpeg", name: "Angular" },
  { src: "/icons8-next.js-64.jpeg", name: "Next.js" },
  { src: "/icons8-node-js-48.jpeg", name: "Node.js" },
  { src: "/icons8-python-48.jpeg", name: "Python" },
  { src: "/icons8-django-48.jpeg", name: "Django" },
  { src: "/icons8-mongo-db-48.jpeg", name: "MongoDB" },
  { src: "/icons8-css3-48.jpeg", name: "CSS3" },
  { src: "/icons8-html-5-48 (1).jpeg", name: "HTML5" },
  { src: "/icons8-wordpress-48.jpeg", name: "WordPress" },
];

const Technologies = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      className={`tech-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <div className="tech-title-container">
        <h2 className="section-subtitle">Technologies We Use</h2>
        <h1 className="section-main-title">Our Tech Stack</h1>
      </div>

      <div className="tech-carousel-container">
        {technologies.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.src} alt={tech.name} className="tech-icon" />
            <h4 className="tech-name">{tech.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
