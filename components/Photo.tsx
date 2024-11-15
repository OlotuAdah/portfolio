"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="xl:opacity-100  w-full h-full ">
      <motion.div
        className="w-full h-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3, ease: "easeIn" } }}
      >
        <div className="w-[35%] h-[35%] mix-blend-lighten relative mt-4">
          <Image
            src="/adah.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain rounded-[50%] mt-4 "
          />
          <div className="absolute top-0 left-0 w-full h-full  mix-blend-multiply"></div>
          <motion.svg
            className="min-w-[35%] min-h-[35%] z-50 "
            fill="transparent"
            viewBox="0 0 506 506 "
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.circle
              cx="253"
              cy="253"
              r="250"
              stroke="#C3B1D9"
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
