import { IoEyeOutline, IoPerson } from "react-icons/io5";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div className="md:px-10 lg:px-40 md:flex lg:items-center md:justify-between px-5 bg-[#1A1A29] w-full mb-20">
      <div className=" flex items-start flex-col justify-end md:pb-10 lg:h-[550px] lg:w-[550px]  pt-10 w-full">
        <motion.p
          className="text-[32px] font-semibold"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, i’m
        </motion.p>
        <motion.p
          className="text-[52px] font-semibold"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Karan S. Sayambar
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Freelance UI designer, Fullstack developer, & Data Miner. I create
          seamless web experiences for end-users.
        </motion.p>
        <motion.span
          className="flex  items-center justify-start gap-10 p-5"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <button className="py-2 px-3 bg-[#7562E0] rounded-lg flex items-center justify-between gap-2">
            <HashLink smooth to="#about">
              About
            </HashLink>
            <IoPerson />
          </button>
          <button className="py-2 px-3 border-2 border-[#7562E0] rounded-lg flex items-center justify-between gap-2">
            <HashLink smooth to="#project">
              Project
            </HashLink>
            <IoEyeOutline />
          </button>
        </motion.span>
      </div>
      <div className="relative md:h-[400px] lg:h-[550px] md:w-[550px] w-[400px] h-[400px] overflow-hidden">
        <motion.img
          src="Ellipse 1.png"
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
          src="sk.avif"
          className="absolute h-[70%] w-[70%] md:left-[20%] lg:top-[35%] left-[10%] top-[35%] rounded-[50%]"
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
