import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase } from "react-icons/fa";
import { SiGit } from "react-icons/si";
import { MdArchitecture } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";

const services = [
  {
    icon: <FaCode />,
    head: "Full Stack Development",
    disc: "End-to-end web apps with React.js / Next.js frontends and Node.js / .NET 8 C# backends, built for scale.",
  },
  {
    icon: <FaServer />,
    head: "API Architecture",
    disc: "Designing RESTful APIs and microservices with JWT/OAuth 2.0 auth, Kafka event streams, and Redis caching.",
  },
  {
    icon: <FaDatabase />,
    head: "Database Optimization",
    disc: "Tuning MongoDB and SQL queries, reducing latency by 35%+ through indexing, caching, and schema design.",
  },
  {
    icon: <MdArchitecture />,
    head: "System Architecture",
    disc: "Architecting microservices and distributed systems handling 10K+ concurrent users with 99.5% uptime.",
  },
  {
    icon: <HiOutlineUserGroup />,
    head: "Team Mentorship",
    disc: "Guiding junior developers through code reviews, technical leadership, and best-practice workshops.",
  },
  {
    icon: <SiGit />,
    head: "Version Control & DevOps",
    disc: "Managing codebases with Git, Docker, and CI/CD pipelines for smooth collaborative development.",
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {services.map((svc, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          whileHover={{ y: -6 }}
          className="group relative glass rounded-2xl p-6 border border-white/5 hover:border-accent/40 transition-colors duration-300 overflow-hidden"
        >
          {/* Number */}
          <span className="absolute top-4 right-5 font-display text-5xl font-bold text-white/[0.04] group-hover:text-accent/20 transition duration-500">
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* Corner accents */}
          <span className="absolute top-3 left-3 h-2 w-2 border-l border-t border-accent/0 group-hover:border-accent/60 transition duration-300" />
          <span className="absolute bottom-3 right-3 h-2 w-2 border-r border-b border-accent/0 group-hover:border-accent/60 transition duration-300" />

          {/* Hover gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition duration-500 pointer-events-none" />

          <div className="relative">
            <div className="inline-flex p-3 rounded-xl bg-accent/10 border border-accent/20 mb-4 group-hover:bg-accent/20 group-hover:border-accent/40 transition duration-300">
              {React.cloneElement(svc.icon, { size: 24, color: "#a78bfa" })}
            </div>
            <h4 className="font-display text-lg font-semibold text-white mb-2">{svc.head}</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{svc.disc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Services;
