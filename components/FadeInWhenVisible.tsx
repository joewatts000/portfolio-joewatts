import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export function FadeInWhenVisible({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.1 }}
      transition={{ duration: 0.5, ease: "linear" }}
      animate={inView ? { opacity: 1 } : { opacity: 0.1 }}
      layout
    >
      {children}
    </motion.div>
  );
}