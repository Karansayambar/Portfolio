import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex items-center justify-between py-5 px-10 text-white md:px-40 bg-[#181824]">
      <div>
        <p className="text-2xl font-bold text-justify capitalized">
          Karan Sayambar
        </p>
      </div>
      {/* Desktop Menu */}
      <span className="hidden md:flex items-center justify-evenly gap-10">
        <HashLink smooth to="#home">
          Home
        </HashLink>
        <HashLink smooth to="#about">
          About
        </HashLink>
        <HashLink smooth to="#project">
          Project
        </HashLink>
        <HashLink smooth to="#contact">
          Contact
        </HashLink>
        <HashLink smooth to="#footer">
          Footer
        </HashLink>
      </span>
      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full flex flex-col gap-5 p-5 bg-[#181824] z-50">
          <HashLink smooth to="#home">
          Home
        </HashLink>
        <HashLink smooth to="#about">
          About
        </HashLink>
        <HashLink smooth to="#project">
          Project
        </HashLink>
        <HashLink smooth to="#contact">
          Contact
        </HashLink>
        <HashLink smooth to="#footer">
          Footer
        </HashLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
