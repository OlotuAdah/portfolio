"use client";

import { companies, testimonials } from "@/data";
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {

   

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Feedback & Success Stories </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div
                className="flex md:max-w-60 max-w-32 gap-2 justify-center items-center"
              
              >
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-10 w-5 rounded"
                />
                <div className="sm:text-xs">{company.name}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
