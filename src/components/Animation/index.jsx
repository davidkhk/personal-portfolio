import React from 'react';

import { motion } from 'framer-motion';

/**
 * @description A component created for simpler use of framer motion's fade-in animation. It checks if the component is in the viewport and if so it initiates the fade-in animation.
 *
 * @param {number} timeout Duration for the fade-in in milliseconds(ms).
 *
 * @return A SectionAnimation react component.
 */
export function SectionAnimation({ ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: props.timeout / 1000 }}
    >
      {props.children}
    </motion.div>
  );
}
