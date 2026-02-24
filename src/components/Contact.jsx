import React from 'react';
import { FiMail, FiWhatsapp, FiMapPin } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css'; // retains styling for list items, icons, and social links

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      {/* Centered content container (uses the max-width variable from App.css) */}
      <div style={{ maxWidth: 'var(--container-max-width, 1200px)', margin: '0 auto', width: '100%' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '15px', fontWeight: 500, textAlign: 'center' }}>
          Let's talk about everything!
        </h3>
        <p style={{ fontSize: '1.1rem', marginBottom: '30px', opacity: 0.9, lineHeight: 1.6, textAlign: 'center' }}>
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        <ul className="contact-details">
          <li>
            <FiMail className="icon" />
            <a href="mailto:rahat.h.pro@gmail.com">rahat.h.pro@gmail.com</a>
          </li>
          <li>
            <FiWhatsapp className="icon" />
            <a href="https://wa.me/8801941273428"target="_blank" 
            rel="noopener noreferrer">+880 1941273428</a>
          </li>
          <li>
            <FiMapPin className="icon" />
            <a
              href="https://maps.google.com/?q=Brahmanbaria,+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brahmanbaria, Bangladesh
            </a>
          </li>
        </ul>

        <div className="social-links">
          <a href="https://www.facebook.com/rahat.hasan.907270/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/laden__b/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://github.com/Rahat6363/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
