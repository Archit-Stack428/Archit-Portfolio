import { MdCopyright } from "react-icons/md";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3 className="contact-title">Let's Connect</h3>
        <p className="contact-subtitle">
          I am always open to exploring new opportunities, collaborating on innovative projects, or discussing how Full Stack Development and AI can solve real-world problems. Feel free to reach out!
        </p>

        <div className="contact-grid">
          {/* Email Card */}
          <a
            href="mailto:architprajapti428@gmail.com"
            className="contact-card"
            data-cursor="disable"
          >
            <div className="contact-card-icon">
              <FiMail />
            </div>
            <h4>Email</h4>
            <p className="contact-card-value">architprajapti428@gmail.com</p>
            <span className="contact-card-action">
              Send an Email <FiArrowUpRight />
            </span>
          </a>

          {/* Phone Card */}
          <a
            href="tel:+919580197216"
            className="contact-card"
            data-cursor="disable"
          >
            <div className="contact-card-icon">
              <FiPhone />
            </div>
            <h4>Phone</h4>
            <p className="contact-card-value">+91 9580197216</p>
            <span className="contact-card-action">
              Call Now <FiArrowUpRight />
            </span>
          </a>

          {/* Socials Card */}
          <div className="contact-card contact-card-socials-group">
            <div className="contact-card-icon">
              <FiGithub />
            </div>
            <h4>Profiles</h4>
            <div className="contact-social-links">
              <a
                href="https://github.com/Archit-Stack428"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                data-cursor="disable"
              >
                <FiGithub /> GitHub <FiArrowUpRight />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                data-cursor="disable"
              >
                <FiLinkedin /> LinkedIn <FiArrowUpRight />
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <FiMapPin />
            </div>
            <h4>Location</h4>
            <p className="contact-card-value">Kanpur, Uttar Pradesh, India</p>
            <span className="contact-card-status">
              Available for Remote & On-site opportunities
            </span>
          </div>
        </div>

        {/* Bottom Quote & Footer */}
        <div className="contact-bottom-wrapper">
          <blockquote className="contact-quote">
            "Building scalable software, solving real-world challenges, and continuously learning to become a better engineer every day." 🚀
          </blockquote>

          <div className="contact-footer">
            <h2>
              Designed and Developed by <span>Archit Prajapati</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
