import Skills from "../components/Skills";
import Services from "../components/Services";

const About = () => {
  return (
    <div className="lg:px-30 xl:px-20 md:px-20 px-2 bg-[#1A1A29] pt-10">
      <p className="text-[32px] text-[#7562E0] font-semibold pb-10">
        About me:
      </p>
      <p>
        Hi, I'm Karan Sayambar, a Fullstack Web Developer and UI Designer. I
        have honed my skills in web development and possess an advanced
        understanding of UI design principles. I hold a B.Tech in Computer
        Science and Engineering from Shivaji University, Kolhapur, Maharashtra.
        Here are the major skills I have:
      </p>
      <div className="flex items-center justify-start py-5">
        <h2 className="text-[72px] text-[#7562E0] font-semibold">1+ </h2>
        <p>
          Years of experience. Specialised in building Web Applications, while
          ensuring a seamless web experience for end users.
        </p>
      </div>

      <div>
        <p className="text-[32px] text-[#7562E0] font-semibold pt-10">
          Skills:
        </p>
        <div className="lg:p-10">
          <Skills />
        </div>
      </div>

      <div className="md:p-10">
        <p className="text-[32px] text-[#7562E0] font-semibold pt-10">
          The Services i Offer:
        </p>
        <Services />
      </div>
    </div>
  );
};

export default About;
