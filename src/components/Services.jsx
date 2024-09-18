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
];

const Services = () => {
  return <div className="md:flex gap-5 m-auto py-10 ">
    {
        service.map((service, index) => (
            <div key={index} className="h-[300px] w-[300px] border-2 rounded-md m-auto my-5 p-5 flex flex-col items-center justify-evenly text-center hover:border-[#7562E0] hover:-translate-y-1 hover:scale-110  duration-300" >
                {React.cloneElement(service.icon, { size: 50 })}
                <p className="text-[32px]">{service.head}</p>
                <p>{service.disc}</p>
            </div>
        ))
    }
  </div>;
};

export default Services;
