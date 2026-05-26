import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCheckBadge,
  HiOutlineBolt,
  HiOutlineUsers,
  HiOutlineCircleStack,
  HiOutlineSparkles,
} from "react-icons/hi2";
import {
  SiDotnet,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiRedis,
  SiApachekafka,
  SiAuth0,
  SiJsonwebtokens,
  SiCsharp,
  SiMicrosoftazure,
  SiOpenid,
} from "react-icons/si";
import SectionHeader from "./SectionHeader";
import AnimatedCounter from "./AnimatedCounter";

const experiences = [
  {
    company: "Netlarx Pvt Ltd",
    role: "Full Stack Developer",
    period: "Feb 2026 – Present",
    duration: "Current",
    location: "Pune, India",
    current: true,
    summary:
      "Architecting .NET 8 microservices and modern web platforms for enterprise-scale clients.",
    hero: { value:9.5, suffix: "K+", label: "Users Served" },
   bullets: [
  { icon: <HiOutlineComputerDesktop />, text: "Developed responsive and reusable frontend modules using React.js and TypeScript" },
  { icon: <HiOutlineSquares2X2 />, text: "Built dynamic UI components, forms, and dashboards with scalable architecture" },
  { icon: <HiOutlineBolt />, text: "Optimized frontend performance, reducing page load time and improving user experience" },
  { icon: <HiOutlineUsers />, text: "Collaborated closely with backend and design teams for seamless API integration and UI delivery" },
 ],
stack: [
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "TanStack Query", icon: <SiRedux />, color: "#764ABC" },
 ],
  },
  {
    company: "Shekru Labs Pvt Ltd",
    role: "Full Stack Developer",
    period: "Aug 2023 – Jan 2026",
    duration: "2.5 yrs",
    location: "Pune, India",
    current: false,
    summary:
      "Shipped 10+ MERN-stack features for high-traffic SaaS products, mentored juniors, drove perf gains.",
    hero: { value: 45, suffix: "%", label: "Server Load Cut" },
    bullets: [
      { icon: <HiOutlineSparkles />, text: "Delivered 10+ React.js / Next.js features driving 40% engagement increase" },
      { icon: <HiOutlineBolt />, text: "Implemented Redis caching layer reducing server load by 45%" },
      { icon: <HiOutlineCircleStack />, text: "Architected MERN stack backend supporting 10K+ concurrent users" },
      { icon: <HiOutlineUsers />, text: "Mentored 2+ junior developers, improving team velocity and code quality" },
    ],
    stack: [
      { name: "React.js", icon: <SiReact />, color: "#61DBFB" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "#FFFFFF" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#3C873A" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      { name: "Redis", icon: <SiRedis />, color: "#D82C20" },
      { name: "Kafka", icon: <SiApachekafka />, color: "#FFFFFF" },
    ],
  },
];

const careerStats = [
  { value: 2.5, suffix: "+", label: "Years Experience" },
  { value: 2, suffix: "", label: "Companies" },
  { value: 100, suffix: "K+", label: "Users Served" },
  { value: 15, suffix: "+", label: "Projects Shipped" },
];

const ExperienceCard = ({ exp, index, total }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    card.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12 md:pl-24"
    >
      {/* Timeline node */}
      <div className="absolute left-3 md:left-7 top-8 z-10">
        <div className="relative">
          {exp.current && (
            <>
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="absolute -inset-2 rounded-full bg-accent/30 blur-md" />
            </>
          )}
          <div
            className={`relative h-5 w-5 rounded-full border-2 ${
              exp.current
                ? "bg-accent border-accent-light"
                : "bg-bg-base border-accent/50"
            }`}
          >
            <div className={`absolute inset-1 rounded-full ${exp.current ? "bg-white" : "bg-accent/40"}`} />
          </div>
        </div>
      </div>

      {/* Chapter label (sticky-ish year) */}
      <div className="absolute left-12 md:left-20 -top-1 md:top-2 hidden md:block">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-medium">
          Chapter {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      {/* Card */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative glass-strong rounded-3xl overflow-hidden hover:border-accent/40 transition-colors duration-500"
        style={{
          "--mx": "50%",
          "--my": "50%",
        }}
      >
        {/* Mouse spotlight */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx) var(--my), rgba(117,98,224,0.12), transparent 40%)",
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        {/* Decorative corner glow */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/15 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative p-6 sm:p-8 lg:p-10">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6 pb-6 border-b border-white/5">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                  <HiOutlineBriefcase className="text-accent-light text-sm" />
                  <span className="text-xs text-gray-300 font-medium">{exp.company}</span>
                </div>
                <span className="text-xs text-gray-600">•</span>
                <span className="text-xs text-gray-500">{exp.location}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text leading-tight mb-2">
                {exp.role}
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
                {exp.summary}
              </p>
            </div>

            {/* Period card */}
            <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-2 flex-shrink-0">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
                  exp.current
                    ? "bg-green-400/10 text-green-300 border border-green-400/30"
                    : "bg-white/5 text-gray-400 border border-white/10"
                }`}
              >
                {exp.current && (
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                )}
                {exp.duration}
              </div>
              <span className="text-xs text-gray-500 font-medium">{exp.period}</span>
            </div>
          </div>

          {/* Hero metric + Bullets */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-7">
            {/* Hero metric */}
            <div className="lg:col-span-4">
              <div className="relative h-full glass rounded-2xl p-5 border border-accent/20 overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 blur-2xl rounded-full" />
                <div className="relative">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-accent-light/80 font-semibold mb-2">
                    Headline Impact
                  </p>
                  <p className="font-display text-5xl sm:text-6xl font-bold accent-text leading-none">
                    <AnimatedCounter value={exp.hero.value} suffix={exp.hero.suffix} duration={2} />
                  </p>
                  <p className="text-sm text-gray-300 font-medium mt-3">{exp.hero.label}</p>
                </div>
              </div>
            </div>

            {/* Bullets */}
            <div className="lg:col-span-8">
              <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
                Key Contributions
              </p>
              <ul className="space-y-2.5">
                {exp.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="group/li flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition duration-300"
                  >
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent-light text-sm flex-shrink-0 group-hover/li:bg-accent/20 group-hover/li:scale-110 transition duration-300">
                      {b.icon}
                    </span>
                    <span className="text-gray-300 text-[15px] leading-relaxed group-hover/li:text-white transition">
                      {b.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech stack */}
          <div className="pt-5 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold mb-3">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ y: -2, scale: 1.04 }}
                  className="group/tech relative flex items-center gap-2 px-3 py-1.5 rounded-lg glass border border-white/5 hover:border-accent/40 transition-colors duration-300"
                >
                  <span className="text-base" style={{ color: tech.color }}>
                    {tech.icon}
                  </span>
                  <span className="text-xs font-medium text-gray-300 group-hover/tech:text-white transition">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-24 pb-20">
      <SectionHeader
        eyebrow="Experience"
        title="Chapters of my journey"
        description="Roles where I shipped production systems, mentored teams, and drove measurable business outcomes."
      />

      {/* Career stats card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-2xl p-5 sm:p-7 mb-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-80 h-40 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:divide-x divide-white/5">
          {careerStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="md:px-4 text-center md:text-left"
            >
              <p className="font-display text-3xl sm:text-4xl font-bold accent-text leading-none">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs text-gray-500 mt-2 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <div ref={containerRef} className="relative max-w-5xl">
        {/* Background line */}
        <div className="absolute left-5 md:left-9 top-0 bottom-0 w-[2px] bg-white/5" />
        {/* Animated draw line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-5 md:left-9 top-0 w-[2px] bg-gradient-to-b from-accent via-accent-light to-accent origin-top"
        />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} total={experiences.length} />
          ))}

          {/* Future / placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-12 md:pl-24"
          >
            <div className="absolute left-3 md:left-7 top-4 z-10">
              <div className="h-5 w-5 rounded-full border-2 border-dashed border-accent/50 bg-bg-base flex items-center justify-center">
                <div className="h-1 w-1 rounded-full bg-accent/60 animate-pulse" />
              </div>
            </div>
            <div className="glass rounded-2xl p-6 border-dashed border border-accent/20 flex items-center gap-4">
              <span className="text-2xl">✨</span>
              <div>
                <p className="font-display text-lg font-semibold text-white">The next chapter</p>
                <p className="text-sm text-gray-400">
                  Currently open to senior full-stack roles — let&apos;s talk about what we could build together.
                </p>
              </div>
              <a
                href="mailto:karansayambar@gmail.com"
                className="ml-auto hidden sm:inline-flex items-center gap-2 text-sm px-4 py-2 bg-accent-gradient rounded-lg font-medium hover:glow-soft transition flex-shrink-0"
              >
                Reach out →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
