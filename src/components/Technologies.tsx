import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "motion/react";

const iconVariants = (duration: number): { initial: any; animate: any } => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className=" my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className=" flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className=" text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className=" text-7xl " />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className=" rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaGitAlt className=" text-7xl" style={{ color: "#F1502F" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
