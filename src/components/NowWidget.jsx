import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineBookOpen, HiOutlineLightBulb } from "react-icons/hi";
import { HiOutlineMusicalNote, HiOutlineSparkles } from "react-icons/hi2";
import SectionHeader from "./SectionHeader";

const nowItems = [
  {
    icon: <HiOutlineCode />,
    label: "Currently Building",
    title: "Real-time analytics dashboard",
    detail: "Next.js 15 + tRPC + ClickHouse · ingesting 50K events/min",
    accent: "#7562E0",
    span: "sm:col-span-2",
  },
  {
    icon: <HiOutlineLightBulb />,
    label: "Learning",
    title: "Distributed systems",
    detail: "Diving into Kafka internals and consensus algorithms (Raft).",
    accent: "#a78bfa",
  },
  {
    icon: <HiOutlineBookOpen />,
    label: "Reading",
    title: "Designing Data-Intensive Applications",
    detail: "Martin Kleppmann · re-reading the replication chapters.",
    accent: "#9B7EF0",
  },
  {
    icon: <HiOutlineMusicalNote />,
    label: "Listening",
    title: "Lo-fi & deep focus",
    detail: "On loop during heavy coding sessions.",
    accent: "#7562E0",
  },
  {
    icon: <HiOutlineSparkles />,
    label: "Exploring",
    title: "AI-assisted workflows",
    detail: "Integrating LLM tooling into dev pipelines for faster shipping.",
    accent: "#a78bfa",
    span: "sm:col-span-2",
  },
];

const NowWidget = () => {
  return (
    <div className="relative px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-24 pb-20">
      <SectionHeader
        eyebrow="/now"
        title="What I'm up to right now"
        description="A live snapshot of my current focus — updated regularly. Inspired by Derek Sivers' /now page movement."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl">
        {nowItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className={`group relative glass rounded-2xl p-6 border border-white/5 hover:border-accent/40 transition-colors duration-300 overflow-hidden ${
              item.span || ""
            }`}
          >
            {/* Accent corner glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 blur-[80px] rounded-full opacity-0 group-hover:opacity-60 transition duration-500 pointer-events-none"
              style={{ background: `${item.accent}40` }}
            />

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="p-2 rounded-lg border"
                  style={{
                    background: `${item.accent}15`,
                    borderColor: `${item.accent}40`,
                    color: item.accent,
                  }}
                >
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-semibold">
                  {item.label}
                </span>
              </div>

              <h4 className="font-display text-lg sm:text-xl font-semibold text-white mb-2 leading-tight">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
            </div>
          </motion.div>
        ))}

        {/* Updated stamp */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="sm:col-span-3 flex items-center justify-center gap-2 text-xs text-gray-500 mt-2"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
          </span>
          Last updated · {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </motion.div>
      </div>
    </div>
  );
};

export default NowWidget;
