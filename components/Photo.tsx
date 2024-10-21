"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="opacity-0 xl:opacity-100 fixed bottom-2 right-2 mr-2 mb-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, ease: "easeIn" } }}
      >
        <div className="w-[150px] h-[150px] mix-blend-lighten relative">
          <Image
            src="/adah.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-[50%]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#000319]/35 mix-blend-multiply"></div>
          <motion.svg
            className="w-[152px] h-[152px] z-50 "
            fill="transparent"
            viewBox="0 0 506 506 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#fff"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ strokeDasharray: "24 10 0 0" }}
              animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360],
                transition: {
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          </motion.svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
