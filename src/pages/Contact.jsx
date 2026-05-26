import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import SectionHeader from "../components/SectionHeader";

const FloatingInput = ({ label, name, type = "text", value, onChange, required, textarea }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value;

  const inputClass =
    "peer w-full bg-transparent border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white outline-none focus:border-accent transition duration-300";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          className={`${inputClass} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={inputClass}
        />
      )}
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isActive
            ? "top-1.5 text-xs text-accent-light"
            : "top-4 text-sm text-gray-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-24 pb-20">
      <SectionHeader
        eyebrow="Get In Touch"
        title="Let's build something great"
        description="Have a project in mind? Looking to hire? Or just want to chat about tech? My inbox is always open."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-5"
        >
          {/* Email card */}
          <a
            href="mailto:karansayambar@gmail.com"
            className="group glass-strong rounded-2xl p-6 hover:border-accent/40 transition-colors duration-300 flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition duration-300 flex-shrink-0">
              <MdOutlineMailOutline className="text-accent-light text-xl" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
              <p className="text-white font-medium truncate">karansayambar@gmail.com</p>
              <p className="text-xs text-accent-light mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                Send a message <HiArrowUpRight />
              </p>
            </div>
          </a>

          {/* Socials */}
          <div className="glass-strong rounded-2xl p-6">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Follow me</p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/karan-sayambar-1125581ab"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 hover:bg-accent/10 transition duration-300"
              >
                <FaLinkedin className="text-accent-light" />
                <span className="text-sm text-gray-300 group-hover:text-white">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Karansayambar"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-accent/40 hover:bg-accent/10 transition duration-300"
              >
                <FaGithub className="text-accent-light" />
                <span className="text-sm text-gray-300 group-hover:text-white">GitHub</span>
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="glass-strong rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 blur-3xl rounded-full" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-400">Currently Available</span>
              </div>
              <p className="text-white font-medium">Open to full-time roles and select freelance projects.</p>
              <p className="text-sm text-gray-400 mt-2">Avg. response time: under 24 hours.</p>
            </div>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-3 glass-strong rounded-2xl p-7 sm:p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5 relative"
          >
            <input type="hidden" name="apikey" value="c12ec7d0-5935-48f5-a013-1698fe3fae47" />
            <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FloatingInput label="Your Name" name="name" value={formData.name} onChange={handleInputChange} required />
              <FloatingInput label="Your Email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <FloatingInput label="Your Message" name="message" value={formData.message} onChange={handleInputChange} required textarea />

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-3.5 bg-accent-gradient bg-[length:200%_200%] animate-gradient-shift rounded-xl font-medium glow-soft hover:glow-accent transition-shadow duration-300 flex items-center justify-center gap-2"
            >
              Send Message <HiArrowUpRight />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
