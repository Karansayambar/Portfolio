import Projects from "../components/Projects";
import SectionHeader from "../components/SectionHeader";

const Project = () => {
  return (
    <div className="px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-24 pb-20">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects I'm proud of"
        description="Real applications I've shipped — from high-traffic booking systems to distributed e-commerce platforms serving thousands of users daily."
      />
      <Projects />
    </div>
  );
};

export default Project;
