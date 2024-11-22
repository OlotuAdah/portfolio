"use client";

import { Toaster } from "react-hot-toast";
import { FaCopy, FaLocationArrow } from "react-icons/fa6";

import { socialMedia, toastTypes } from "@/data";
import { useState } from "react";
import FlowbiteToast from "./reusables/FlowbiteToast";
import MagicButton from "./ui/MagicButton";

const Footer = () => {

  const [toastMessage, setToastMessage] = useState<string>("")
  const [toastType, setToastType] = useState<string>("")

    const [isToastVisible, setIsToastVisible] = useState(false);

    const hideToast = () => setIsToastVisible(false);



  const copyEmail = () => {
    navigator.clipboard.writeText("adaholotu@gmail.com");
    setToastMessage("Email copied successfully!")
    setToastType(toastTypes.success)
    setIsToastVisible(true);

  };

  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s take <span className="text-purple"> your brand </span>
          to new digital heights!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s connect and explore how we can actualize your goals.
        </p>

        <div className="flex flex-row justify-between items-center space-x-4">
          <MagicButton
            title="Copy my Email"
            icon={<FaCopy />}
            position="right"
            handleClick={copyEmail}
          />
          <MagicButton
            title="Holler at me!"
            icon={<FaLocationArrow />}
            position="right"
          />
          <Toaster />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adah Olotu
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
      <FlowbiteToast
        iconName={
          toastType === toastTypes.success ? "Check icon" : "Close icon"
        }
        message={toastMessage}
        showToast={isToastVisible}
        closeToast={hideToast}
        key={'footer-toast-1'}
      />
    </footer>
  );
};

export default Footer;
