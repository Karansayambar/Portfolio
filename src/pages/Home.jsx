import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { HiArrowDown, HiArrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import AnimatedCounter from "../components/AnimatedCounter";
import MagneticButton from "../components/MagneticButton";

const techBadges = ["React.js", "Next.js", "Node.js", ".NET 8", "TypeScript", "MongoDB"];

const stats = [
  { value: 2.5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "K+", label: "Users Served" },
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 45, suffix: "%", label: "Performance Gain" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-5 md:px-10 lg:px-24 xl:px-32 pt-28 pb-20">
      {/* Section accent blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent/10 blur-[160px] pointer-events-none" />

      <div className="relative w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col w-full lg:max-w-[620px]"
        >
          {/* Availability badge */}
          <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-accent/30 w-fit mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-xs font-medium text-gray-300">Available for new opportunities</span>
          </motion.div>

          <motion.p variants={item} className="text-sm font-medium text-accent-light tracking-[0.25em] uppercase mb-3">
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[44px] sm:text-[64px] lg:text-[76px] font-bold leading-[0.95] text-white mb-3"
          >
            Karan
            <br />
            <span className="accent-text">Sayambar</span>
          </motion.h1>

          <motion.div variants={item} className="flex items-center gap-3 mb-5">
            <div className="h-px w-10 bg-accent" />
            <p className="text-base sm:text-lg font-medium text-gray-300">
              Senior Full Stack Developer
            </p>
          </motion.div>

          <motion.p variants={item} className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mb-6 text-balance">
            I architect and ship scalable web systems for{" "}
            <span className="text-white font-medium">10K+ concurrent users</span> — pairing React.js & Next.js frontends with Node.js and .NET microservices to deliver measurable{" "}
            <span className="text-white font-medium">40%+ performance gains</span>.
          </motion.p>

          {/* Tech Badges */}
          <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className="text-xs px-3 py-1.5 rounded-full glass border border-white/10 text-gray-300 hover:border-accent/50 hover:text-accent-light transition duration-300 cursor-default"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex items-center gap-4 flex-wrap mb-10">
            <HashLink smooth to="#project">
              <MagneticButton className="group py-3 px-6 bg-accent-gradient bg-[length:200%_200%] animate-gradient-shift rounded-xl flex items-center gap-2 font-medium glow-soft hover:glow-accent transition-shadow duration-300">
                View My Work
                <HiArrowRight className="group-hover:translate-x-1 transition" />
              </MagneticButton>
            </HashLink>

            <HashLink smooth to="#contact">
              <MagneticButton className="py-3 px-6 border border-white/15 rounded-xl flex items-center gap-2 font-medium text-gray-200 hover:border-accent/50 hover:bg-white/5 transition duration-300">
                Get in Touch
              </MagneticButton>
            </HashLink>
          </motion.div>

          {/* Social icons */}
          <motion.div variants={item} className="flex items-center gap-5 text-xl text-gray-400">
            <a href="https://github.com/Karansayambar" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light hover:-translate-y-0.5 transition duration-200">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/karan-sayambar-1125581ab" target="_blank" rel="noopener noreferrer" className="hover:text-accent-light hover:-translate-y-0.5 transition duration-200">
              <FaLinkedin />
            </a>
            <a href="mailto:karansayambar@gmail.com" className="hover:text-accent-light hover:-translate-y-0.5 transition duration-200">
              <MdOutlineMailOutline />
            </a>
          </motion.div>
        </motion.div>

        {/* Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0 w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[440px] lg:h-[440px]"
        >
          {/* Rotating gradient ring */}
          <div className="absolute inset-0 rounded-full bg-conic-gradient bg-accent-gradient animate-spin-slow opacity-60 blur-md" />
          <div className="absolute inset-[4px] rounded-full bg-bg-base" />

          {/* Inner gradient ring */}
          <motion.div
            className="absolute inset-[8px] rounded-full"
            style={{
              background: "conic-gradient(from 0deg, rgba(117,98,224,0.5), transparent 35%, rgba(167,139,250,0.6), transparent 70%, rgba(117,98,224,0.5))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner background */}
          <div className="absolute inset-[14px] rounded-full bg-bg-surface overflow-hidden">
            <img
              src="profile-image.jpg"
              alt="Karan Sayambar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating tech chips */}
          <motion.div
            className="absolute -top-4 -right-2 px-3 py-2 rounded-xl glass-strong text-xs font-medium text-accent-light shadow-lg"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            ⚛️ React Expert
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl glass-strong text-xs font-medium text-accent-light shadow-lg"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            🚀 99.5% Uptime
          </motion.div>

          <motion.div
            className="absolute top-1/2 -left-8 px-3 py-2 rounded-xl glass-strong text-xs font-medium text-accent-light shadow-lg hidden sm:block"
            animate={{ x: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            💻 Node + .Net
          </motion.div>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-5xl px-5 hidden lg:block"
      >
        <div className="glass-strong rounded-2xl p-6 grid grid-cols-4 divide-x divide-white/5">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 text-center">
              <p className="font-display text-3xl font-bold accent-text">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 lg:hidden"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
