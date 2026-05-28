import { motion } from 'framer-motion';
import './HeroBanner.css';

export default function HeroBanner({ profile }) {
  const scrollTo = (target) => {
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="hero">
      {/* Background layers */}
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-noise" />
        <div className="hero__orb hero__orb--red" />
        <div className="hero__orb hero__orb--dark" />
        <div className="hero__bg-bottom-fade" />
      </div>

      {/* Content */}
      <motion.div
        className="hero__content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
      >
        <div className="hero__tag">
          <span className="hero__tag-dot" />
          Available for opportunities
        </div>

        <h1 className="hero__name">
          {profile.name.split(' ')[0]}{' '}
          <span className="hero__name-accent">{profile.name.split(' ').slice(1).join(' ')}</span>
        </h1>

        <p className="hero__title">{profile.title}</p>
        <p className="hero__summary">{profile.summary}</p>

        <div className="hero__ctas">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollTo('projects')}
            id="cta-projects"
          >
            <span className="hero__btn-icon">▶</span>
            View Projects
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={() => scrollTo('contact')}
            id="cta-contact"
          >
            <span className="hero__btn-icon">ℹ</span>
            Contact Me
          </button>
        </div>

        <div className="hero__stats">
          <div>
            <div className="hero__stat-number">5+</div>
            <div className="hero__stat-label">Projects</div>
          </div>
          <div>
            <div className="hero__stat-number">1+</div>
            <div className="hero__stat-label">Years Exp</div>
          </div>
          <div>
            <div className="hero__stat-number">10+</div>
            <div className="hero__stat-label">Technologies</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
