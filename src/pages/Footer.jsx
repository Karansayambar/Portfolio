import { AiFillInstagram } from "react-icons/ai";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#1A1A29] p-6 md:p-10 xl:px-40">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-white text-sm md:text-base">
        <p>&copy; 2024 Karan S. Sayambar</p>
        <p>Fullstack Developer</p>
        <p>UI Designer</p>
        <p>Data Analyst</p>
        <p>Designed by @karansayambar</p>
      </div>

      <div className="flex items-center justify-center gap-6 text-3xl text-[#7562E0] mt-6">
        <a
          href="https://linkedin.com/in/karan-sayambar-1125581ab"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Karansayambar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white duration-300"
        >
          <FaDribbble />
        </a>
        <a
          href="mailto:karansayambar@gmail.com"
          className="hover:text-white duration-300"
        >
          <MdOutlineMailOutline />
        </a>
      </div>
    </div>
  );
};

export default Footer;
