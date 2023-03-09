import React from "react";
import { motion } from "framer-motion";
import SplashText from "./SplashText";

function Splash() {
  return (
    <motion.div
      animate={{
        height: 0,
        transition: { duration: 0.6, delay: 1.5 },
      }}
      className="absolute w-screen h-screen bg-black text-white text-9xl 2xl:text-[160px] lg:text-8xl md:text-7xl allEM:text-4xl allT:text-3xl overflow-hidden flex items-center justify-center z-50"
    >
      <SplashText />
    </motion.div>
  );
}

export default Splash;
