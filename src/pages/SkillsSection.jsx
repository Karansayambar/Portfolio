import Skills from "../components/Skills";
import Services from "../components/Services";
import SectionHeader from "../components/SectionHeader";

const SkillsSection = () => {
  return (
    <div className="px-5 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-24 pb-20">
      <SectionHeader
        eyebrow="Toolkit"
        title="Tech I work with"
        description="The stack I reach for daily — from rapid prototypes to production microservices."
      />
      <div className="mb-20">
        <Skills />
      </div>

      <SectionHeader
        eyebrow="Services"
        title="What I bring to the table"
        description="Core areas where I deliver measurable impact for teams and products."
      />
      <Services />
    </div>
  );
};

export default SkillsSection;
