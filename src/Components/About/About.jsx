import React from "react";
import "./About.css";
import { useIntersectionObserver } from "./useIntersectionObserver";

const aboutData = [
  {
    title: "About Us",
    content:
      "At Velandev we offer IT services for Web and Mobile Application Development, DevOps engineering, and bespoke enterprise solutions. We are fervently committed to delivering exceptional results to our clients, believing wholeheartedly in our success in achieving excellence.",
  },
  {
    title: "Our Mission",
    content:
      "We drive business growth with our unwavering commitment to meeting customer needs. Our company also develops solutions to help customers achieve their visionary goals.",
  },
  {
    title: "Our Vision",
    content:
      "Fostering creativity through a diverse team and adaptable solutions to ensure outstanding client success in web & mobile application development, and DevOps engineering.",
  },
];

const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="About"
      className={`about-section ${isVisible ? "is-visible" : ""}`}
      ref={ref}
    >
      <div className="about-title">
        <h1>ABOUT US</h1>
      </div>

      <div className="about-wrapper">
        <div className="about-container">
          <div className="about-image">
            <div className="img-card">
              <img src="hand.png" alt="Digital Hand Illustrating Technology" />
            </div>
          </div>

          <div className="about-content">
            <p className="about-tagline">
              Your Partner for the Best IT Solutions and Services
            </p>

            {aboutData.map((block) => (
              <div className="about-block" key={block.title}>
                <div className="block-header">
                  <span className="dot" />
                  <h3>{block.title}</h3>
                </div>
                <p>{block.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
