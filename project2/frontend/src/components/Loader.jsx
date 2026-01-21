import { motion } from "motion/react";

const Loader = () => {
  return (
    <div className="min-h-svh flex items-center justify-center bg-white">

      {/* Outer rotating ring */}
      <motion.div
        className="h-24 w-24 rounded-full border-4 border-indigo-300 border-t-indigo-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      {/* Inner pulsing dot */}
      <motion.div
        className="absolute h-6 w-6 rounded-full bg-indigo-600"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
        }}
      ></motion.div>

    </div>
  );
};

export default Loader;
