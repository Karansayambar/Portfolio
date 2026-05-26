import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeader from "./SectionHeader";

const testimonials = [
  {
    quote:
      "Karan consistently delivered features that moved the metrics. The 45% server-load reduction he shipped via Redis caching unblocked our next scaling milestone.",
    name: "Tech Lead",
    role: "Engineering Manager",
    company: "Shekru Labs Pvt Ltd",
    initials: "TL",
    accent: "#7562E0",
  },
  {
    quote:
      "One of the most thoughtful full-stack engineers I've worked with. Sharp architectural instincts and a genuine drive to mentor junior devs on the team.",
    name: "Senior Architect",
    role: "Principal Engineer",
    company: "Netlarx Pvt Ltd",
    initials: "SA",
    accent: "#a78bfa",
  },
  {
    quote:
      "The booking platform Karan built for Science City handled launch-day traffic flawlessly. 1000+ reservations on day one and not a single incident.",
    name: "Product Owner",
    role: "Client Stakeholder",
    company: "Science City Project",
    initials: "PO",
    accent: "#9B7EF0",
  },
  {
    quote:
      "Karan pairs strong React/Next.js skills with real backend depth in Node and .NET — rare combo. His PR reviews leveled up the whole frontend team.",
    name: "Frontend Engineer",
    role: "Peer Developer",
    company: "Shekru Labs Pvt Ltd",
    initials: "FE",
    accent: "#7562E0",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  const jump = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [paused, go]);

  const active = testimonials[index];

  return (
    <div className="relative px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-24 pb-20">
      <SectionHeader
        eyebrow="Testimonials"
        title="What people say"
        description="Honest words from teammates, clients, and stakeholders I've shipped with."
      />

      <div
        className="relative max-w-4xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative glass-strong rounded-3xl overflow-hidden">
          {/* Decorative glow */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 blur-[120px] rounded-full pointer-events-none transition-colors duration-700"
            style={{ background: `${active.accent}30` }}
          />
          <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

          <div className="relative p-7 sm:p-10 lg:p-14 min-h-[360px] flex flex-col justify-between">
            {/* Top: quote icon */}
            <FaQuoteLeft className="text-5xl text-accent/30 mb-6" />

            {/* Animated quote area */}
            <div className="relative flex-1 mb-8 overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  initial={{ opacity: 0, y: 30 * direction }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 * direction }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="font-display text-xl sm:text-2xl lg:text-3xl leading-snug text-balance gradient-text">
                    &ldquo;{active.quote}&rdquo;
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom: author + controls */}
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`author-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="h-12 w-12 rounded-full flex items-center justify-center font-display font-bold text-white shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${active.accent}, ${active.accent}aa)`,
                    }}
                  >
                    {active.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{active.name}</p>
                    <p className="text-xs text-gray-400">
                      {active.role} · <span className="text-accent-light">{active.company}</span>
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="h-10 w-10 rounded-full glass border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition flex items-center justify-center text-gray-300 hover:text-white"
                >
                  <HiOutlineChevronLeft />
                </button>
                <button
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="h-10 w-10 rounded-full glass border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition flex items-center justify-center text-gray-300 hover:text-white"
                >
                  <HiOutlineChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5">
            <motion.div
              key={`progress-${index}-${paused}`}
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: paused ? 0.3 : 6, ease: "linear" }}
              className="h-full bg-accent-gradient"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => jump(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-accent" : "w-1.5 bg-white/15 hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
