import React from "react";
import "./Services.css";
import { useIntersectionObserver } from "../About/useIntersectionObserver";

const servicesData = [
  {
    imgSrc: "/Web Application Development.png",
    alt: "Web Development Icon",
    title: "Web Application Development",
  },
  {
    imgSrc: "/Mobile Application Developments.png",
    alt: "Mobile Development Icon",
    title: "Mobile Application Development",
  },
  {
    imgSrc: "/Search Engine Optimization.png",
    alt: "SEO Icon",
    title: "Search Engine Optimization",
  },
  {
    imgSrc: "/DevOps Engineering.png",
    alt: "DevOps Icon",
    title: "DevOps Engineering",
  },
  {
    imgSrc: "/Custom Enterprise Solutions.png",
    alt: "Enterprise Solutions Icon",
    title: "Custom Enterprise Solutions",
  },
];

const Services = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="Services"
      className={`services-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <div className="services-title">
        <h2 className="section-subtitle">Our Services</h2>
        <h1 className="section-main-title">Expertise You Can Rely On</h1>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.imgSrc}
              alt={service.alt}
              className="service-image"
            />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
