import { AiFillInstagram } from "react-icons/ai";
import { FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="md:px-40 md:p-10 xl:20 p-5 bg-[#1A1A29]">
      <div className="md:flex items-center justify-between">
        <p>@2024 Karan s Sayambar</p>
        <p>Fullstack Developer</p>
        <p>UI Designer</p>
        <p>Data Analyst</p>
        <p>Designed by @karansayambar</p>
      </div>
      <span className="flex gap-4 text-3xl p-2 text-[#7562E0]">
        <a href="linkedin.com/in/karan-sayambar-1125581ab"><FaLinkedin /></a>
        <a href="https://github.com/Karansayambar"><FaGithub /></a>
        <FaDribbble />
        <MdOutlineMailOutline />
      </span>
    </div>
  );
};

export default Footer;
