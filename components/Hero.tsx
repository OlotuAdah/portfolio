import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-32 min-h-screen w-full border-2 border-red-500 box-border">
      <div
        className="h-full w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] relative flex items-center justify-center border-2 border-green-600"
      >
        <div
          className="relative pointer-events-none flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />

        <div className="flex justify-center relative my-20 z-[200px]">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100">
              Crafting Impeccable{" "}
              <span className="text-purple">User Experiences</span>, Every Click
              Counts
            </p>

            <TextGenerateEffect
              words="Hi👋 I'm Adah, a Software Engineer based in Lagos"
              className="text-center md:tracking-wider mb-4 text-sm"
              duration={1}
            />

            <a href="#about">
              <MagicButton
                title="Let's take a walk"
                otherClasses="mt-4"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
