import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

export default function AnimatedSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
