import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", to: "#home" },
    { name: "About", to: "#about" },
    { name: "Project", to: "#project" },
    { name: "Contact", to: "#contact" },
    { name: "Footer", to: "#footer" },
  ];

  return (
    <div className="w-full flex items-center justify-between py-5 px-5 sm:px-10 lg:px-20 text-white bg-[#181824] shadow-md fixed top-0 left-0 z-50">
      <div>
        <p className="text-2xl font-bold tracking-wide">Karan Sayambar</p>
      </div>

      {/* Desktop Menu */}
      <span className="hidden md:flex items-center gap-8 lg:gap-12">
        {navLinks.map((link, index) => (
          <HashLink
            key={index}
            smooth
            to={link.to}
            className="hover:text-[#7562E0] transition duration-200"
          >
            {link.name}
          </HashLink>
        ))}
      </span>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full flex flex-col gap-6 p-5 bg-[#181824] z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => (
          <HashLink
            key={index}
            smooth
            to={link.to}
            onClick={toggleMenu}
            className="text-lg hover:text-[#7562E0] transition duration-200"
          >
            {link.name}
          </HashLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
