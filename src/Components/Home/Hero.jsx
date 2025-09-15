import React, { useState, useEffect } from "react";
import "./Hero.css";
import Stats from "./Stats";

const Hero = () => {
  const texts = [
    "Mobile Application Development",
    "Web Application Development",
    "DevOps Engineering and Services",
    "Custom Enterprise Solutions",
    "Search Engine Optimization",
  ];

  const [index, setIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFadingOut(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="hero" id="Home">
      <div className="hero-content">
        <h1 className={isFadingOut ? "fade-out" : "fade-in"}>{texts[index]}</h1>
        <p className="hero-subtitle">
          Empowering your business with cutting-edge technology and expert
          solutions.
        </p>
        <div className="cta-buttons">
          <a href="#Contact" className="btn btn-primary">
            GET STARTED
          </a>
          <a href="#Services" className="btn btn-primary">
            EXPLORE SERVICES
          </a>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Hero;
