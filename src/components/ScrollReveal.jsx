import React from 'react';
import { motion } from 'framer-motion';

/**
 * A wrapper component that animates its children when they enter the viewport.
 * @param {number} delay - How long to wait before starting the animation (in seconds).
 * @param {number} distance - How many pixels the element should slide up.
 */
const ScrollReveal = ({ children, delay = 0, distance = 30 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }} // Triggers slightly before the element is fully in view
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Smooth custom cubic-bezier for a "high-end" feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;