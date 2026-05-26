import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loader is visible
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 1600);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-bg-base flex items-center justify-center overflow-hidden"
        >
          {/* Background pulse */}
          <motion.div
            initial={{ scale: 0, opacity: 0.4 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute w-40 h-40 rounded-full bg-accent/30 blur-[100px]"
          />

          <div className="relative flex flex-col items-center gap-8">
            {/* Mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-20 w-20 rounded-2xl glass-strong flex items-center justify-center border-accent/30 overflow-hidden"
            >
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-accent-gradient bg-[length:200%_200%] animate-gradient-shift"
              />
              <span className="relative font-display text-3xl font-bold text-white">K</span>
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-display text-sm uppercase tracking-[0.4em] accent-text font-medium"
            >
              Karan Sayambar
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ opacity: 1, width: 120 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="h-[2px] bg-white/10 overflow-hidden rounded-full"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                className="h-full w-full bg-accent-gradient"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
