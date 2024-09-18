import React from "react";
import { FaCode } from "react-icons/fa";
import { SiGit, SiNpm } from "react-icons/si";
import { TfiRulerPencil } from "react-icons/tfi";

const service = [
  {
    icon: <TfiRulerPencil />,
    head: "UI & UX Designing",
    disc: "I design beautifull web iterfaces with Figma",
  },
  {
    icon: <FaCode />,
    head: "Web Development",
    disc: "I create beautifull iterfaces with simple HTML, CSS, JavaScript and also frontend frameworks like ReactJS",
  },
  {
    icon: <SiGit />,
    head: "Version Control",
    disc: "I can use version control systems well, and Git",
  },
  {
    icon: <SiNpm />,
    head: "NPM and NodeJS",
    disc: "I have core understanding of NPM. I can also develop general purpose applications with NodeJS",
  },
  {
    icon: <SiNpm />,
    head: "NPM and NodeJS",
    disc: "I have core understanding of NPM. I can also develop general purpose applications with NodeJS",
  },
  {
    icon: <SiNpm />,
    head: "NPM and NodeJS",
    disc: "I have core understanding of NPM. I can also develop general purpose applications with NodeJS",
  },
];

const Services = () => {
  return <div className="lg:flex w-full flex-wrap gap-6 m-auto py-10 ">
    {
        service.map((service, index) => (
            <div key={index} className="h-[250px] text-center w-[250px] md:w-[70%] lg:min-w-[200px] xl:w-[250px] box-content border-2 rounded-md m-auto my-5 p-5 flex flex-col items-center justify-evenly hover:border-[#7562E0] hover:-translate-y-1 hover:scale-105  duration-300" >
                {React.cloneElement(service.icon, { size: 45 })}
                <p className="text-[28px]">{service.head}</p>
                <p>{service.disc}</p>
            </div>
        ))
    }
  </div>;
};

export default Services;
