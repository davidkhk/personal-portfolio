import React from 'react';

import { motion } from 'framer-motion';

export const FadeIn = ({ ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: props.timeout / 1000, delay: props.delay }}
    >
      {props.children}
    </motion.div>
  );
};

// export const FadeOut = ({ ...props }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       whileInView={{ opacity: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: props.timeout / 1000, delay: props.delay }}
//     >
//       {props.children}
//     </motion.div>
//   );
// };

// export const DragAnimation = ({ ...props }) => {
//   return (
//     <motion.div
//       drag
//       dragConstraints={{
//         top: -300,
//         left: -300,
//         right: 300,
//         bottom: 300,
//       }}
//     >
//       {props.children}
//     </motion.div>
//   );
// };
