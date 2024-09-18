import React from "react";
import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiJavascript, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const skills = [
  {
    id: 1,
    skill: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    skill: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    skill: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    id: 4,
    skill: "React JS",
    icon: <FaReact />,
  },
  {
    id: 5,
    skill: "Redux JS",
    icon: <TbBrandRedux />,
  },
  {
    id: 6,
    skill: "Node JS",
    icon: <FaNodeJs />,
  },
  {
    id: 7,
    skill: "Express JS",
    icon: <SiExpress />,
  },
  {
    id: 8,
    skill: "Mongo DB",
    icon: <SiMongodb />,
  },
  {
    id: 9,
    skill: "Java",
    icon: <FaJava />,
  },
  {
    id: 10,
    skill: "SQL",
    icon: <SiMysql />,
  },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 m-auto">
      {skills &&
        skills.map((skill) => (
          <div
            key={skill.id}
            className="h-[130px] w-[130px] shrink-0 box-content bg-[#848191] rounded-sm p-5 flex items-center justify-evenly flex-col hover:bg-[#7562E0] hover:-translate-y-1 hover:scale-100  duration-300"
          >
            {React.cloneElement(skill.icon, { size: 50 })}
            <p className="text-[28px]">{skill.skill}</p>
          </div>
        ))}
    </div>
  );
};

export default Skills;
