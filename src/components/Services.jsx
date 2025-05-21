import React from "react";
import { FaCode } from "react-icons/fa";
import { SiGit, SiNodedotjs, SiNpm } from "react-icons/si";
import { TfiRulerPencil } from "react-icons/tfi";

const service = [
  {
    icon: <TfiRulerPencil color="#7562E0" />,
    head: "UI & UX Designing",
    disc: "I craft modern, intuitive interfaces and experiences using Figma and web design systems.",
  },
  {
    icon: <FaCode color="#7562E0" />,
    head: "Web Development",
    disc: "Building responsive, high-performance websites with HTML, CSS, JavaScript, and ReactJS.",
  },
  {
    icon: <SiGit color="#7562E0" />,
    head: "Version Control",
    disc: "Proficient in managing collaborative codebases and workflow using Git and GitHub.",
  },
  {
    icon: <SiNpm color="#7562E0" />,
    head: "NPM & NodeJS",
    disc: "Solid understanding of NPM modules and backend development with NodeJS.",
  },
];

const Services = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 py-10">
      {service.map((service, index) => (
        <div
          key={index}
          className="text-center w-[270px] box-content border-2 border-[#848191] rounded-lg p-6 flex flex-col items-center justify-evenly gap-4 hover:border-[#7562E0] hover:-translate-y-1 hover:scale-105 transition duration-300"
        >
          {React.cloneElement(service.icon, { size: 50 })}
          <p className="text-[22px] font-semibold text-white">{service.head}</p>
          <p className="text-[15px] text-gray-300">{service.disc}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
