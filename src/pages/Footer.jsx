import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiArrowUp } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-6 md:px-20 xl:px-40 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-accent/10 blur-[120px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="font-display text-3xl sm:text-5xl font-bold gradient-text mb-4 text-balance">
            Got an idea? Let&apos;s ship it.
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            Whether it&apos;s a side project or a production system serving thousands — I&apos;d love to help build it.
          </p>
          <a
            href="mailto:karansayambar@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-gradient bg-[length:200%_200%] animate-gradient-shift rounded-xl font-medium glow-soft hover:glow-accent transition-shadow duration-300"
          >
            Start a Conversation →
          </a>
        </motion.div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold accent-text">Karan Sayambar</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Senior Full Stack Developer · React.js & Node.js Specialist
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-2 text-lg">
            {[
              { href: "https://linkedin.com/in/karan-sayambar-1125581ab", icon: <FaLinkedin />, label: "LinkedIn" },
              { href: "https://github.com/Karansayambar", icon: <FaGithub />, label: "GitHub" },
              { href: "mailto:karansayambar@gmail.com", icon: <MdOutlineMailOutline />, label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2.5 rounded-lg glass border border-white/5 text-gray-400 hover:text-accent-light hover:border-accent/40 hover:-translate-y-0.5 transition duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-500">&copy; 2026 Karan Sayambar. All rights reserved.</p>
        </div>
      </div>

      {/* Back to top floating button */}
      <HashLink smooth to="#home">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -3 }}
          viewport={{ once: true }}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-strong border border-accent/30 text-accent-light hover:bg-accent/20 transition duration-300 glow-soft"
          aria-label="Back to top"
        >
          <HiArrowUp className="text-xl" />
        </motion.button>
      </HashLink>
    </footer>
  );
};

export default Footer;
