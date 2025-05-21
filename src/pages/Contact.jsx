import { useState } from "react";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 md:px-14 lg:px-20 xl:px-36 py-16 bg-[#1A1A29] text-white gap-14">
      {/* Left Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#7562E0] mb-4">
          Let’s Connect
        </h1>
        <p className="text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0">
          Have a project in mind? Or just want to say hi? Let’s build something
          incredible together.
        </p>

        <div className="flex justify-center lg:justify-start gap-6 text-3xl text-[#7562E0]">
          <a
            href="https://linkedin.com/in/karan-sayambar-1125581ab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Karansayambar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>
          <a href="#" className="hover:scale-110 transition duration-300">
            <FaDribbble />
          </a>
          <a href="#" className="hover:scale-110 transition duration-300">
            <MdOutlineMailOutline />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full max-w-[500px] backdrop-blur-xl bg-white/5 rounded-xl p-6 sm:p-8 shadow-lg border border-[#2d2d3a]">
        <h2 className="text-2xl font-semibold mb-6 text-[#7562E0] text-center">
          Send a Message
        </h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="space-y-4"
        >
          <input
            type="hidden"
            name="apikey"
            value="c12ec7d0-5935-48f5-a013-1698fe3fae47"
          />
          <input
            type="hidden"
            name="subject"
            value="New Submission from Contact Form"
          />

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-[#7562E0] outline-none focus:ring-2 focus:ring-[#7562E0] transition"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-[#7562E0] outline-none focus:ring-2 focus:ring-[#7562E0] transition"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-[#7562E0] outline-none focus:ring-2 focus:ring-[#7562E0] transition"
          />

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#7562E0] to-[#9c87e9] rounded-lg font-semibold hover:shadow-[0_0_25px_#7562E0] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
