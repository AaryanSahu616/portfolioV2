import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer({ profile }) {
  return (
    <motion.footer
      className="footer"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer__grid">
        {/* CTA */}
        <div className="footer__cta">
          <h2 className="footer__heading">
            Let's Build<br />
            Something <span className="footer__heading-accent">Great.</span>
          </h2>
          <p className="footer__text">
            I'm always excited to collaborate on innovative projects.
            Whether you have an idea or just want to say hi — reach out!
          </p>
          <a
            className="footer__btn"
            href={`mailto:${profile.email}`}
            id="footer-email-btn"
          >
            ✉️ Send an Email
          </a>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="footer__column-title">Contact</h3>
          <ul className="footer__links">
            <li>
              <a className="footer__link" href={`mailto:${profile.email}`}>
                <span className="footer__link-icon">📧</span>
                {profile.email}
              </a>
            </li>
            <li>
              <a className="footer__link" href={`tel:${profile.phone}`}>
                <span className="footer__link-icon">📱</span>
                {profile.phone}
              </a>
            </li>
            <li>
              <span className="footer__link">
                <span className="footer__link-icon">📍</span>
                {profile.location}
              </span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="footer__column-title">Links</h3>
          <ul className="footer__links">
            <li>
              <a
                className="footer__link"
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer__link-icon">💼</span>
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="footer__link-icon">🐙</span>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <div className="footer__social">
          <a
            className="footer__social-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a
            className="footer__social-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            ⌨
          </a>
          <a
            className="footer__social-link"
            href={`mailto:${profile.email}`}
            aria-label="Email"
          >
            @
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
