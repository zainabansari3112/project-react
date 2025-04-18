import { useState } from "react";
import "./Contact.css"; // Import CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [openToggle, setOpenToggle] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Thank you for contacting us!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const toggleSection = (index) => {
    setOpenToggle(openToggle === index ? null : index);
  };

  return (
    <div className="contact-container">
      {/* Image Section */}
      <div className="contact-image">
        <img src="/main image.jpg" alt="Toys" />
      </div>

      {/* Contact Header */}
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We are here to help! Fill out the form and we'll get back to you soon.</p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {/* Toggle Section - 'People Also Ask' */}
      <div className="toggle-section">
        <h1>Others</h1>
        {[
          { title: "Suppliers", content: "Find trusted toy suppliers through wholesale markets and online platforms." },
          { title: "You should know", content: "Ensure toys meet safety standards and are age-appropriate before purchasing." },
          { title: "Where to get", content: "Best places to buy toys include Amazon, Walmart, and specialty toy stores." },
          {
            title: "Location", content: "Our store is located in multiple cities; check our store locator for details.Tinybots, Shop No F, 37 & S/37, PHOENIX MARKETCITY, Lal Bahadur Shastri Marg, near Old Mukand Premises, Kamani, Kurla West, Kurla, Mumbai, Maharashtra 400070."
          },
          { title: "Best for kids", content: "Educational toys like LEGO, puzzles, and STEM kits are great choices for children." }
        ].map((item, index) => (
          <div key={index} className="toggle-item">
            <div className="toggle-title" onClick={() => toggleSection(index)}>
              {item.title}
              <span>{openToggle === index ? "▲" : "▼"}</span>
            </div>
            {openToggle === index && <p className="toggle-content">{item.content}</p>}
          </div>
        ))}
      </div>

      {/* Social Media Section */}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className="social-media-section">
        <h3>Follow Us for Daily Updates</h3>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/twitter logo.png" alt="Twitter" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/ytimg.jpeg" alt="YouTube" />
          </a>

        </div>

      </div>
    </div>
  );
};

export default ContactUs;
