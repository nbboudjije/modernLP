import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import { headContainerAnimation } from "../motion";

const Hero = () => {
  return (
    <div className="text-white">
      <motion.div
        className="w-100% flex justify-center items-center flex-col h-[80vh] "
        {...headContainerAnimation}
      >
        <p className="font-bold p-2">GROW YOUR BIZ WITH DATA</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold p-2">
          Turn Data to Profits
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-lg font-bold p-2">
            Easy, Fast, Flexible for
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-l font-bold"
            strings={["Products", "Categories", "Brands"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </div>
        <p className="md:text-1xl text-lg font-bold text-yellow-50 text-center mb-2">
          "Track your Data to Increase your Revenue Using Media Ads like FB , SP
          , TT"
        </p>
        <button className="text-center bg-[#1f6e8c] cursor-pointer p-2 hover:bg-white hover:text-black rounded-lg font-semibold">
          GET STARTED
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;
