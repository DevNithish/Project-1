import React from "react";
import "./Footer.css";

const quickLinks = [
  { href: "#Home", text: "Home" },
  { href: "#About", text: "About Us" },
  { href: "#Services", text: "Services" },
  { href: "#Contact", text: "Contact" },
];

const socialLinks = [
  { href: "https://facebook.com", icon: "bi bi-facebook" },
  { href: "https://linkedin.com", icon: "bi bi-linkedin" },
  { href: "https://instagram.com", icon: "bi bi-instagram" },
  { href: "https://twitter.com", icon: "bi bi-twitter-x" },
];

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column about">
          <img src="logo.svg" alt="Velandev Logo" className="footer-logo" />
          <p>
            Velandev offers customized IT solutions designed to suit your
            specific requirements, enabling businesses to excel in today’s
            digital world.
          </p>
          <div className="social-icons">
            {socialLinks.map((social) => (
              <a
                href={social.href}
                key={social.icon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-column links">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.text}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-column contact-info">
          <h3>Contact Us</h3>
          <p>
            <i className="bi bi-geo-alt-fill"></i> Sholinganallur, Chennai
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> velandev@velandev.in
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> +91 6369472659
          </p>
        </div>

        <div className="footer-column newsletter">
          <h3>Join Our Newsletter</h3>
          <p>Stay up to date with our latest news and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Velandev. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
