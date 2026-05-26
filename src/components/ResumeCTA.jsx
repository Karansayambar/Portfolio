import { motion } from "framer-motion";
import { HiOutlineDocumentText, HiOutlineDownload, HiOutlineEye } from "react-icons/hi";

const RESUME_URL = "/Karan_Sayambar_Resume.pdf";

// Floating button (visible on all scrolls, bottom-right cluster)
export const ResumeFloatingButton = () => (
  <motion.a
    href={RESUME_URL}
    download
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    whileHover={{ y: -3 }}
    viewport={{ once: true }}
    aria-label="Download resume"
    title="Download resume (PDF)"
    className="fixed bottom-6 right-20 z-50 p-3 rounded-full glass-strong border border-accent/30 text-accent-light hover:bg-accent/20 hover:text-white transition duration-300 glow-soft"
  >
    <HiOutlineDownload className="text-xl" />
  </motion.a>
);

// Full-width section used in MainPage
const ResumeCTA = () => {
  return (
    <div className="px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-16 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative glass-strong rounded-3xl overflow-hidden"
      >
        {/* Decorative blur */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent-light/15 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-7 sm:p-10">
          {/* Left: doc icon mockup */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <motion.div
              whileHover={{ rotate: -3, y: -4 }}
              className="relative w-32 h-40 rounded-xl glass-strong border-2 border-accent/30 flex flex-col items-center justify-center shadow-2xl shadow-accent/20"
            >
              <HiOutlineDocumentText className="text-5xl text-accent-light mb-2" />
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">PDF · 2 pages</p>
              <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-md bg-accent text-white text-[9px] font-bold uppercase tracking-wider">
                Latest
              </div>
            </motion.div>
          </div>

          {/* Middle: text */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent-light font-semibold mb-2">
              Resume
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-bold gradient-text mb-2 text-balance">
              Take the full snapshot
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0">
              Two-page, ATS-optimized PDF with the full career breakdown — experience, projects, stack, and achievements.
            </p>
          </div>

          {/* Right: actions */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <a
              href={RESUME_URL}
              download
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent-gradient rounded-xl text-sm font-medium text-white hover:glow-soft transition duration-300"
            >
              <HiOutlineDownload className="text-lg group-hover:translate-y-0.5 transition" />
              Download PDF
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-white/15 rounded-xl text-sm font-medium text-gray-200 hover:border-accent/50 hover:bg-white/5 transition duration-300"
            >
              <HiOutlineEye className="text-lg" />
              Preview Online
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResumeCTA;
