import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const NAV_ITEMS = [
  { label: 'Home', target: 'hero' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Education', target: 'education' },
  { label: 'Contact', target: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.target));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i].target);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'navbar--solid' : 'navbar--transparent'}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        id="navbar"
      >
        <div className="navbar__logo" onClick={() => scrollTo('hero')}>
          AARYAN
        </div>

        <ul className="navbar__links">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.target}
              className={`navbar__link ${activeSection === item.target ? 'navbar__link--active' : ''}`}
              onClick={() => scrollTo(item.target)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
          <span className="navbar__toggle-bar"></span>
        </button>
      </motion.nav>

      <ul className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li
            key={item.target}
            className="navbar__mobile-link"
            onClick={() => scrollTo(item.target)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </>
  );
}
