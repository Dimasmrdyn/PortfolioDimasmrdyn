// src/components/AnimatedText.jsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const AnimatedTextMobile = () => {
  const text = 'FRONTEND';

  return (
    <motion.h1
      className="text-5xl antialiased text-cyan-50 flex gap-1"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default AnimatedTextMobile;
