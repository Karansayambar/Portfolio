import { IoEyeOutline, IoPerson } from "react-icons/io5";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const textVariant = (xValue) => ({
    initial: { opacity: 0, x: xValue },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  });

  return (
    <div className="md:px-10 lg:px-40 xl:px-30 px-5 bg-[#1A1A29] w-full mb-20 md:flex md:items-center md:justify-between">
      {/* Text Content */}
      <div className="flex flex-col justify-end pt-10 w-full md:pb-10 lg:h-[550px] lg:w-[550px]">
        <motion.p
          className="text-[32px] font-semibold text-white"
          {...textVariant(100)}
        >
          Hello, I’m
        </motion.p>

        <motion.h1
          className="text-[52px] font-bold text-white"
          {...textVariant(80)}
        >
          Karan S. Sayambar
        </motion.h1>

        <motion.p className="text-gray-400 mt-4" {...textVariant(60)}>
          Freelance UI designer, Fullstack developer, & Data Miner. I create
          seamless web experiences for end-users.
        </motion.p>

        <motion.div
          className="flex items-center gap-5 p-5"
          {...textVariant(40)}
        >
          <HashLink smooth to="#about">
            <button className="py-2 px-4 bg-[#7562E0] rounded-lg flex items-center gap-2 hover:bg-[#5e4ec4] transition">
              About <IoPerson />
            </button>
          </HashLink>

          <HashLink smooth to="#project">
            <button className="py-2 px-4 border-2 border-[#7562E0] rounded-lg flex items-center gap-2 hover:bg-[#2b2b3d] transition">
              Project <IoEyeOutline />
            </button>
          </HashLink>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="relative md:h-[400px] lg:h-[550px] md:w-[550px] w-[400px] h-[400px] overflow-hidden mt-10 md:mt-0">
        <motion.img
          src="Ellipse 1.png"
          alt="Background Ellipse"
          className="absolute h-[90%] w-[90%] md:left-[10%] md:top-[25%] top-[20%]"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "tween",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />

        <motion.img
          src="sk.webp"
          alt="Karan Sayambar Portrait"
          className="absolute h-[70%] w-[70%] md:left-[20%] lg:top-[35%] left-[10%] top-[35%] rounded-full object-cover"
          initial={{ y: 10 }}
          animate={{ y: -10 }}
          transition={{
            type: "tween",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
