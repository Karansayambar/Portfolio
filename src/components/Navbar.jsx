import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", to: "#home" },
  { name: "About", to: "#about" },
  { name: "Experience", to: "#experience" },
  { name: "Skills", to: "#skills" },
  { name: "Projects", to: "#project" },
  { name: "Contact", to: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/80 backdrop-blur-xl border-b border-line/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand */}
        <HashLink smooth to="#home" className="flex flex-col leading-none">
          <span className="font-display text-lg font-bold text-text-primary">
            Karan<span className="accent-text">.</span>
          </span>
          <span className="text-[10px] text-text-faint tracking-widest uppercase mt-0.5 hidden sm:block">
            Full Stack Developer
          </span>
        </HashLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 p-1.5 rounded-full glass border border-white/5">
          {navLinks.map((link, index) => (
            <HashLink
              key={index}
              smooth
              to={link.to}
              className="text-sm text-text-secondary hover:text-text-primary px-4 py-1.5 rounded-full hover:bg-white/5 transition duration-200"
            >
              {link.name}
            </HashLink>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:karansayambar@gmail.com"
            className="inline-flex items-center gap-2 text-sm px-5 py-2 bg-accent-gradient rounded-full hover:glow-soft transition duration-300 font-medium text-white"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-lg glass border border-white/10"
          >
            {isMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 flex flex-col gap-1 bg-bg-base/95 backdrop-blur-xl border-t border-white/5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <HashLink
                    smooth
                    to={link.to}
                    onClick={toggleMenu}
                    className="block py-3 px-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition"
                  >
                    {link.name}
                  </HashLink>
                </motion.div>
              ))}
              <a
                href="mailto:karansayambar@gmail.com"
                className="mt-3 inline-flex items-center justify-center gap-2 text-sm px-5 py-3 bg-accent-gradient rounded-xl font-medium text-white"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
