"use client";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";

import { useState } from "react";
import ChatBubble from "./ChatBubble";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto mb-10",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ASP.NET", "React", "Typescript"];
  const rightLists = ["Express", "SQL", "MongoDB"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`h-full`}>
        <div className={`w-full h-full absolute`}>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center mix-blend-overlay ",
              )}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 text-white-200 ",
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-white-200 z-10">
            {description}
          </div>

          <div
            className={`text-sm  z-10 w-full mt-2 ${id === 3 && "font-bold"} ${id === 1 && "hidden"} `}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GlobeDemo />}
          {/* {id === 2 && (
            <ShimmerBtn
              classes="w-fit px-2 rounded-lg bg-[#10132E]/10"
              title="NGA"
            />
          )} */}

          {id === 1 && (
            <div className=" h-72 md:w-full md:h-full relative z-50  ">
              <div className=" absolute inset-0 w-full h-full items-center">
                <div className=" w-full h-full relative ">
                  <ChatBubble
                    containerClasses="flex w-fit h-fit border-yellow-400 absolute top-4 left-2"
                    chatBubbleTrailClasses="absolute -right-4 -bottom-5 transform rotate-90 w-4  h-4 z-0 text-purple"
                    chatBubbleClasses="rounded-full rounded-br-none bg-purple text-white px-12 py-3 z-10"
                  />

                  <ChatBubble
                    containerClasses="flex w-fit h-fit border-yellow-400 absolute bottom-0 -right-1"
                    chatBubbleTrailClasses="absolute -left-4 -top-6 transform -rotate-90 w-4  h-4 z-0 text-[#F6F056] border-white/[0.2]"
                    chatBubbleClasses="rounded-full rounded-tl-none bg-[#F6F056]/90 border border-white/[0.2] px-12 py-3 z-10"
                  />
                  <div className="absolute -bottom-12 md:-bottom-3 lg:-bottom-3   left-4 text-white-100 text-sm ">
                    {title}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tech stack list div */}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute right-0 lg:right-0 pr-0">
              {/* tech stack lists */}
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-3 pt-2">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-2 py-2 px-2 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-2 lg:px-3 py-2 px-3  rounded-lg text-center bg-[#10132E] opacity-0"></span>
              </div>
              <div className="flex flex-col gap-2 md:gap-2 lg:gap-3">
                <span className="lg:py-2 lg:px-3 py-2 px-2  rounded-lg text-center bg-[#10132E] opacity-0"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-2 lg:px-3 py-2 px-3 text-xs lg:text-sm opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
