import { useRef } from 'react';
import { motion } from 'framer-motion';
import './ContentShelf.css';

export default function ContentShelf({ id, title, subtitle, children }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (!rowRef.current) return;
    const scrollAmount = rowRef.current.clientWidth * 0.7;
    rowRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <motion.section
      className="shelf"
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="shelf__header">
        <div>
          <h2 className="shelf__title">
            <span className="shelf__title-accent" />
            {title}
          </h2>
          {subtitle && <p className="shelf__subtitle">{subtitle}</p>}
        </div>
      </div>

      <div className="shelf__scroll-wrapper">
        <button
          className="shelf__arrow shelf__arrow--left"
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className="shelf__row" ref={rowRef}>
          {children}
        </div>

        <button
          className="shelf__arrow shelf__arrow--right"
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </motion.section>
  );
}
