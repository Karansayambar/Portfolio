import React from "react";
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const skills = [
  {
    id: 1,
    skill: "HTML5",
    icon: <FaHtml5 />,
    color: "#E44D26",
  },
  {
    id: 2,
    skill: "CSS3",
    icon: <FaCss3Alt />,
    color: "#264DE4",
  },
  {
    id: 3,
    skill: "JavaScript",
    icon: <SiJavascript />,
    color: "#F0DB4F",
  },
  {
    id: 4,
    skill: "React JS",
    icon: <FaReact />,
    color: "#61DBFB",
  },
  {
    id: 5,
    skill: "Redux JS",
    icon: <TbBrandRedux />,
    color: "#764ABC",
  },
  {
    id: 6,
    skill: "Node JS",
    icon: <FaNodeJs />,
    color: "#3C873A",
  },
  {
    id: 7,
    skill: "Express JS",
    icon: <SiExpress />,
    color: "#FFFFFF",
  },
  {
    id: 8,
    skill: "Mongo DB",
    icon: <SiMongodb />,
    color: "#47A248",
  },
  {
    id: 9,
    skill: "Java",
    icon: <FaJava />,
    color: "#f89820",
  },
  {
    id: 10,
    skill: "SQL",
    icon: <SiMysql />,
    color: "#00758F",
  },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 xl:px-40 m-auto">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="h-[130px] w-[130px] shrink-0 box-content bg-[#848191] rounded-md p-5 flex items-center justify-evenly flex-col hover:bg-[#7562E0] hover:-translate-y-1 hover:scale-100 duration-300"
        >
          {React.cloneElement(skill.icon, { size: 50, color: skill.color })}
          <p className="text-[20px] text-white text-center font-medium">
            {skill.skill}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
