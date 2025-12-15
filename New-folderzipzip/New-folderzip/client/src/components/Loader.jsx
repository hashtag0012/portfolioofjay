import { motion } from 'framer-motion';

const Loader = () => {
  const letterVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
    exit: (i) => ({
      y: -100,
      opacity: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.7, 0, 0.84, 0]
      }
    })
  };

  const letters = ['J', 'A', 'Y'];

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="loader-content">
        <div className="loader-text">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="loader-letter"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        
        <motion.div 
          className="loader-line"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
        
        <motion.p
          className="loader-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Web Developer & Designer
        </motion.p>
      </div>

      <div className="loader-bg">
        <motion.div 
          className="loader-bg-block"
          initial={{ height: '100%' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.8, ease: [0.7, 0, 0.84, 0] }}
        />
      </div>
    </motion.div>
  );
};

export default Loader;
