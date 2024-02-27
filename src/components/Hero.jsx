import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className=" relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
      >
        <div className=" flex flex-col justify-center items-center mt-5">
          <div className=" w-5 h-5 rounded-full bg-[#915eff]" />
          <div className=" w-1 h-40 md:h-60 lg:h-80 violet-gradient" />
        </div>
        <div>
          <h1 className=" text-5xl font-bold md:text-6xl lg:text-7xl">
            Hi, I'm <span className=" text-[#915eff] ">Mousham</span>
          </h1>
          <p className=" font-semibold text-l md:text-xl lg:text-3xl ">
            I'm a Frontend Developer specializing in web applications with{" "}
            <span className="font-bold text-[#915eff]">React</span>, with a
            focus on animated and 3D designs.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className=" absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
           <motion.dev
           animate={{
            y:[0, 30, 0]
           }}
           transition={{ 
            duration: 1.5,
            repeat: Infinity,
            repeatType:'loop'
          }}
          className=" w-4 h-4 rounded-full bg-secondary mb1"
           /> 
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
