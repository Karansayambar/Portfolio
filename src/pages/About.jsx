import { motion } from "framer-motion";
import { HiOutlineSparkles, HiOutlineAcademicCap } from "react-icons/hi";
import { HiOutlineTrophy } from "react-icons/hi2";
import SectionHeader from "../components/SectionHeader";
import AnimatedCounter from "../components/AnimatedCounter";

const achievements = [
  { metric: 90, suffix: "+", label: "Lighthouse Score", desc: "Performance optimized" },
  { metric: 35, suffix: "%", label: "Latency Reduced", desc: "Database queries" },
  { metric: 45, suffix: "%", label: "Server Load Cut", desc: "Redis caching" },
  { metric: 25, suffix: "+", label: "API Endpoints", desc: "Production-grade" },
];

const certifications = [
  { title: "CII Innovation Award", detail: "2nd Prize – National Level", icon: "🏆", year: "2023" },
  { title: "Performance Excellence", detail: "40% engagement boost recognized", icon: "⭐", year: "2024" },
  { title: "Technical Leadership", detail: "Mentored 2+ junior developers", icon: "🚀", year: "2025" },
];

const education = [
  { degree: "Bachelor of Computer Science", institution: "Shivaji University, Kolhapur", year: "2023" },
  { degree: "Diploma in Computer Technology", institution: "Sanjivani K.B.P. Polytechnic", year: "2020" },
];

const About = () => {
  return (
    <div className="relative px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-24 pb-20">
      <SectionHeader
        eyebrow="About Me"
        title="Building systems people actually rely on"
        description="Senior Full Stack Developer with 2.5+ years architecting high-performance applications that scale."
      />

      {/* Bio grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-16">
        {/* Bio block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-3xl p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative">
            <HiOutlineSparkles className="text-accent text-2xl mb-3" />
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
              I&apos;m a <span className="text-white font-semibold">Senior Full Stack Developer</span> based in India,
              specializing in the React.js / Next.js ecosystem on the frontend and Node.js / .NET 8 C# microservices on the backend.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300 mb-4">
              My systems have served <span className="accent-text font-semibold">10K+ concurrent users</span> with 99.5% uptime — consistently delivering measurable results: 45% reduction in server load, 35% lower database latency, and 40% improvement in user engagement.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Beyond shipping code, I actively mentor junior developers and champion clean architecture. I&apos;ve integrated Redis caching, Kafka event streams, Stripe payments, and OAuth 2.0 / JWT authentication across production deployments.
            </p>
          </div>
        </motion.div>

        {/* Achievement metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-2 grid grid-cols-2 gap-4"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-accent/40 transition-colors duration-300 group"
            >
              <p className="font-display text-4xl font-bold accent-text leading-none">
                <AnimatedCounter value={a.metric} suffix={a.suffix} />
              </p>
              <p className="text-sm text-white font-medium mt-3">{a.label}</p>
              <p className="text-xs text-gray-500 mt-1">{a.desc}</p>
              <div className="h-1 w-8 bg-accent/40 rounded-full mt-3 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-6">
          <HiOutlineTrophy className="text-accent text-2xl" />
          <h3 className="font-display text-2xl font-semibold text-white">Certifications & Awards</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="relative glass rounded-2xl p-6 border border-white/5 hover:border-accent/40 transition-colors duration-300 overflow-hidden group"
            >
              <div className="absolute top-0 right-0 text-[110px] opacity-5 group-hover:opacity-10 transition leading-none -mt-4 -mr-2">
                {cert.icon}
              </div>
              <span className="text-xs text-accent-light font-medium uppercase tracking-widest">{cert.year}</span>
              <p className="font-display font-semibold text-white mt-2 text-lg">{cert.title}</p>
              <p className="text-sm text-gray-400 mt-1">{cert.detail}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <HiOutlineAcademicCap className="text-accent text-2xl" />
          <h3 className="font-display text-2xl font-semibold text-white">Education</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="glass rounded-2xl p-5 border border-white/5 hover:border-accent/40 transition-colors duration-300 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <p className="font-semibold text-white truncate">{edu.degree}</p>
                <p className="text-sm text-gray-400 mt-0.5 truncate">{edu.institution}</p>
              </div>
              <span className="text-xs text-accent-light font-medium border border-accent/30 px-3 py-1 rounded-full whitespace-nowrap">
                {edu.year}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
