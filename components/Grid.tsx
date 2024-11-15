"use client";

import { gridItems } from "@/data";
import { useEffect, useRef } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  const itemRefs = useRef<(HTMLElement | null)[]>([]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-item");
            // observer.unobserve(entry.target); // Stop observing once visible
          }else{
            entry.target.classList.remove("show-item");
          }
        });
      },
      { threshold: 0.1 }, // Trigger when 10% of the item is visible
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              className,
              description,
              img,
              imgClassName,
              spareImg,
              titleClassName,
            },
            index,
          ) => {
            return (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={`${className} `} //hidden by default.
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
              />
            );
          },
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
