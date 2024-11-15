"use client";

import { projects } from "@/data";
import { useEffect, useRef, useState } from "react";
import LiveSite from "./reusables/LiveSite";
import OverlayText from "./reusables/Overlaytext";
import MagicButton from "./ui/MagicButton";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  const itemRefs = useRef<(HTMLElement | null)[][]>([]); // Nested array for each project’s icons

  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<Number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-logo");
          } else {
            entry.target.classList.remove("show-logo");
          }
        });
      },
      { threshold: 0.1 },
    );

    // Observe each icon in every project item
    itemRefs.current.forEach((icons) => {
      icons.forEach((icon) => {
        if (icon) observer.observe(icon);
      });
    });

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of
        <span className="text-purple"> my recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-12 mt-10">
        {projects.map((item, projectIndex) => (
          <div
            className="sm:h-[34rem] md:h-[36rem] md:min-h-[36rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            key={item.id}
          >
            <PinContainer id={item.id} title={item.title} href={item.link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[80%] h-[80%] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden rounded-2xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className={`z-10 absolute w-[86%] h-[86%] rounded-lg `}
                />

                {/* Overlay that shows when the project is hovered */}
                {hoveredProjectIndex === projectIndex &&  <OverlayText title={item.title} description={item.des} isVisible={true} />}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, iconIndex) => {
                    // Initialize the nested array for each project item
                    if (!itemRefs.current[projectIndex]) {
                      itemRefs.current[projectIndex] = [];
                    }

                    return (
                      <div
                        ref={(el) => {
                          itemRefs.current[projectIndex][iconIndex] = el;
                        }}
                        id={`${projectIndex}-${iconIndex}`}
                        key={`${projectIndex}-${iconIndex}`}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 gap-x-2 flex justify-center items-center logo hide-logo"
                      >
                        <img src={icon} alt="icon" className="p-2" />
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-center items-center">
                  {item.id === 1 && <LiveSite title=" Check Live Site" />}
                  {item.id === 2 && <LiveSite title=" Check Live Site" />}
                  {item.id === 3 && (
                    <MagicButton
                      title="Hover to read more"
                      onMouseEnter={() => setHoveredProjectIndex(projectIndex)}
                      onMouseLeave={() => setHoveredProjectIndex(null)}
                    />
                  )}
                  {item.id === 4 && (
                    <MagicButton
                      title="Hover to read more"
                      onMouseEnter={() => setHoveredProjectIndex(projectIndex)}
                      onMouseLeave={() => setHoveredProjectIndex(null)}
                    />
                  )}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
