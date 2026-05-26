import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiOutlineHome } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";
import BackgroundEffects from "../components/BackgroundEffects";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 py-20">
      <BackgroundEffects />

      <div className="relative max-w-2xl text-center">
        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative inline-block mb-4"
        >
          <h1 className="font-display text-[140px] sm:text-[200px] font-bold leading-none gradient-text">
            404
          </h1>
          {/* Glitch reflection */}
          <motion.span
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0, 0.3, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
            className="absolute inset-0 font-display text-[140px] sm:text-[200px] font-bold leading-none accent-text translate-x-1 -translate-y-1"
            style={{ filter: "blur(1px)" }}
          >
            404
          </motion.span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-400" />
          </span>
          <span className="text-xs text-gray-300 uppercase tracking-widest font-medium">
            Page Not Found
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-2xl sm:text-4xl font-bold text-white mb-3 text-balance"
        >
          Looks like this route doesn&apos;t exist
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg max-w-md mx-auto mb-8"
        >
          The page you&apos;re looking for moved, never existed, or got refactored out. Let&apos;s get you back home.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 px-5 py-3 bg-accent-gradient rounded-xl text-sm font-medium text-white hover:glow-soft transition duration-300"
          >
            <HiOutlineHome className="text-lg" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-5 py-3 border border-white/15 rounded-xl text-sm font-medium text-gray-200 hover:border-accent/50 hover:bg-white/5 transition duration-300"
          >
            <HiArrowLeft className="text-lg" />
            Go Back
          </button>
          <a
            href="mailto:karansayambar@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-3 border border-white/10 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:border-accent/40 transition duration-300"
          >
            Report Issue <HiArrowUpRight />
          </a>
        </motion.div>

        {/* Suggested links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Try one of these</p>
          <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
            {[
              { label: "About", to: "/#about" },
              { label: "Experience", to: "/#experience" },
              { label: "Projects", to: "/#project" },
              { label: "Contact", to: "/#contact" },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="text-gray-400 hover:text-accent-light transition relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
