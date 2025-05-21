import Skills from "../components/Skills";
import Services from "../components/Services";

const About = () => {
  return (
    <div className="bg-[#1A1A29] text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 pt-10 pb-16">
      {/* About Me */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl text-[#7562E0] font-semibold">
          About Me:
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          Hi, I'm{" "}
          <span className="text-[#7562E0] font-medium">Karan Sayambar</span>, a
          passionate{" "}
          <span className="font-semibold">Fullstack Web Developer</span> and{" "}
          <span className="font-semibold">UI Designer</span> with a solid
          foundation in building interactive, modern web applications. I hold a{" "}
          <span className="font-semibold">
            B.Tech degree in Computer Science and Engineering
          </span>{" "}
          from Shivaji University, Kolhapur, Maharashtra.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          Over the past year, I've dedicated myself to mastering the art of
          creating clean, scalable, and visually appealing web experiences.
          Whether it's designing intuitive user interfaces or developing
          powerful backend services, I thrive on delivering value to users
          through technology.
        </p>

        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          My expertise lies in working with modern technologies like{" "}
          <span className="font-semibold">React.js</span>,{" "}
          <span className="font-semibold">Node.js</span>,{" "}
          <span className="font-semibold">MongoDB</span>,{" "}
          <span className="font-semibold">Redux</span>,{" "}
          <span className="font-semibold">Tailwind CSS</span>, and{" "}
          <span className="font-semibold">Material-UI</span>. I also have
          hands-on experience with building REST APIs, implementing
          authentication systems, and integrating third-party services.
        </p>
      </div>

      {/* Experience */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-10">
        <h2 className="text-5xl sm:text-6xl text-[#7562E0] font-bold">1+ </h2>
        <p className="text-base sm:text-lg leading-relaxed text-gray-300">
          Years of industry and personal project experience specializing in web
          development. I enjoy building high-performance applications that
          deliver seamless experiences across all devices.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-14">
        <h2 className="text-3xl sm:text-4xl text-[#7562E0] font-semibold mb-6">
          Skills:
        </h2>
        <div className="p-0 md:p-8">
          <Skills />
        </div>
      </div>

      {/* Services */}
      <div className="mt-14">
        <h2 className="text-3xl sm:text-4xl text-[#7562E0] font-semibold mb-6">
          The Services I Offer:
        </h2>
        <div className="p-0 md:p-8">
          <Services />
        </div>
      </div>
    </div>
  );
};

export default About;
