import React from "react";
import "./Contact.css";

const contactInfo = [
  {
    icon: "bi bi-geo-alt-fill",
    text: "Velandev, No.16, Nehru Street, Sholinganallur, Chennai",
  },
  { icon: "bi bi-envelope-fill", text: "velandev@velandev.in" },
  { icon: "bi bi-telephone-fill", text: "+91 6369472659 | +91 9025530104" },
];

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-title">
        <h2 className="section-subtitle">Contact Us</h2>
        <h1 className="section-main-title">Get in Touch</h1>
      </div>

      <div className="info-row">
        {contactInfo.map((item, index) => (
          <div className="info-item" key={index}>
            <i className={item.icon}></i>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      <div className="contact-container">
        <div className="form-side">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
        <div className="image-side">
          <img src="Contact.jpeg" alt="Man typing on a laptop" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
