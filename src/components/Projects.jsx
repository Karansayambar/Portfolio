import { IoEyeOutline, IoPerson } from "react-icons/io5";

const project = [
  {
    img: "CryptoMonitor.jpg",
    title: "Crypto Monitor",
    disc: "Crypto Monitor Application",
    live: "https://moonlit-melba-3d133f.netlify.app",
    git: "https://github.com/Karansayambar/CryptoMonitor",
  },
  {
    img: "TypingWebsite.jpg",
    title: "Typing Website",
    disc: "Typing Wensite Application",
    live: "https://dainty-cobbler-e0f573.netlify.app",
    git: "https://github.com/Karansayambar/typing-speed-test-website",
  },
  {
    img: "NewsWebsite.jpg",
    title: "News Website",
    disc: "News Wensite Application",
    live: "https://calm-treacle-de3898.netlify.app/",
    git: "https://github.com/Karansayambar/TrendsHub",
  },
  {
    img: "PodcastApp.jpg",
    title: "Podcase Application",
    disc: "News Wensite Application",
    live: "https://beamish-pony-c3dc73.netlify.app/",
    git: "https://github.com/Karansayambar/Podcast-App-Unleash-Your-Mind-s-Potential",
  },
  {
    img: "Finance Wizard.jfif",
    title: "Finance-Wizard",
    disc: "Finance-Wizard---Your-Guide-to-Financial-Freedom",
    live: "https://github.com/Karansayambar/Podcast-App-Unleash-Your-Mind-s-Potential",
    git: "https://github.com/Karansayambar/Podcast-App-Unleash-Your-Mind-s-Potential",
  },

  {
    img: "TaskManager.jpg",
    title: "Task Manager",
    disc: "Task Manager Application",
    live: "https://task-manager-frontend-app-e95m.onrender.com/",
    git: "https://github.com/Karansayambar/Task-Manager-Frontend-App/tree/main",
  },
];

const Projects = () => {
  return (
    <div className="md:flex flex-wrap gap-10 box-border">
      {project &&
        project.map((item, index) => (
          <div key={index} className=" w-[350px] md:m-0 m-auto h-[440px] bg-[#31313F] p-4 rounded-lg box-border gap-5 my-5 hover:-translate-y-1 hover:scale-110  duration-300">
            <div className="border-2 border-[#7562E0] rounded-lg w-[100%] h-[205px] my-5">
              <img src={item.img} className="w-[100%] h-[200px]"/>
            </div>
            <div>
              <h2 className="text-[#7562E0] text-[22px] font-semibold">{item.title}</h2>
              <p>
                {item.disc}
              </p>
              <div className="flex items-center justify-between py-5">
                <button className="py-2 px-2 bg-[#7562E0] rounded-lg flex items-center justify-between gap-2">
                  <a href={item.live}>View Live</a>
                  <IoPerson />
                </button>
                <button className="py-2 px-2 border-2 border-[#7562E0] rounded-lg flex items-center justify-between gap-2">
                  <a href={item.git}>Github Repo</a>
                  <IoEyeOutline />
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
