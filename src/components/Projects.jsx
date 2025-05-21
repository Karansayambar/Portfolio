import { IoEyeOutline, IoPerson } from "react-icons/io5";

const project = [
  {
    img: "TypingWebsite.jpg",
    title: "Typing Speed Test",
    disc: "A responsive typing speed test web app that tracks typing speed, accuracy, and mistakes in real-time.",
    live: "https://dainty-cobbler-e0f573.netlify.app",
    git: "https://github.com/Karansayambar/typing-speed-test-website",
  },
  {
    img: "JobPiolet.png",
    title: "Job Piolet",
    disc: "A full-stack job listing and hiring platform where companies can post jobs and users can apply.",
    live: "https://job-piolet-frontend.vercel.app",
    gitFrontend: "https://github.com/Karansayambar/JobPiolet-Frontend",
    gitBackend: "https://github.com/Karansayambar/JobPiolet-Backend",
  },
  {
    img: "TaskManager.png",
    title: "Task Manager",
    disc: "A task management web application with features like task creation, status update, and priority filters.",
    live: "https://task-manager-stamurai-client.vercel.app",
    git: "https://github.com/Karansayambar/Task-Manager-Frontend-App/tree/main",
  },
  {
    img: "code-editor.png",
    title: "Live Code Editor",
    disc: "A lightweight online code editor for HTML, CSS, and JavaScript with instant live preview support.",
    live: "https://glistening-heliotrope-d2489e.netlify.app",
    git: "https://github.com/Karansayambar/code-editor",
  },
  {
    img: "NewsWebsite.jpg",
    title: "TrendsHub News",
    disc: "A clean, responsive news website fetching live news APIs, with category filters and smooth UI.",
    live: "https://calm-treacle-de3898.netlify.app/",
    git: "https://github.com/Karansayambar/TrendsHub",
  },
  {
    img: "PodcastApp.jpg",
    title: "Podcast App",
    disc: "An audio streaming platform for podcasts, with episode categories, player controls, and user-friendly design.",
    live: "https://beamish-pony-c3dc73.netlify.app/",
    git: "https://github.com/Karansayambar/Podcast-App-Unleash-Your-Mind-s-Potential",
  },
  {
    img: "Finance Wizard.jfif",
    title: "Finance Wizard",
    disc: "A financial advisory web app offering budgeting tips, financial planning tools, and investment guidance.",
    live: "https://finance-wizard-app.netlify.app", // Assuming a live link — update if different
    git: "https://github.com/Karansayambar/Finance-Wizard",
  },
  {
    img: "CryptoMonitor.jpg",
    title: "Crypto Monitor",
    disc: "A crypto currency tracker displaying real-time prices, market cap, and trends with responsive charts.",
    live: "https://moonlit-melba-3d133f.netlify.app",
    git: "https://github.com/Karansayambar/CryptoMonitor",
  },
];

const Projects = () => {
  return (
    <div className="lg:flex items-center justify-between lg:px-18 flex-wrap gap-10 mx-auto py-10">
      {project &&
        project.map((item, index) => (
          <div
            key={index}
            className="sm:w-[320px] md:w-[450px] xl:w-[500px] bg-[#2E2E3A] p-5 my-4  rounded-2xl shadow-lg hover:-translate-y-2 hover:scale-[1.02] transition duration-300 ease-in-out"
          >
            {/* Image */}
            <div className=" rounded-md overflow-hidden mb-5 shadow-sm">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
            </div>

            {/* Title */}
            <h2 className="text-[#7562E0] text-2xl font-bold mb-3">
              {item.title}
            </h2>

            {/* Description */}
            <p className="text-gray-300 text-[15px] leading-relaxed mb-5">
              {item.disc}
            </p>

            {/* Buttons */}
            <div className="flex items-center justify-between">
              <a
                href={item.live}
                target="_blank"
                className="flex items-center gap-2 py-2 px-4 bg-[#7562E0] text-white rounded-lg hover:bg-[#5e4cc9] transition duration-300"
              >
                View Live <IoPerson />
              </a>
              <a
                href={item.git}
                target="_blank"
                className="flex items-center gap-2 py-2 px-4 border-2 border-[#7562E0] text-[#7562E0] rounded-lg hover:bg-[#7562E0] hover:text-white transition duration-300"
              >
                Github Repo <IoEyeOutline />
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
