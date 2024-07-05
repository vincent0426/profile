import React from "react";
import { Button } from "./ui/moving-border";
import Image from "next/image";
import { workExperience } from "@/data";
import { TracingBeam } from "@/components/ui/tracing-beam";

const Experience = () => {
  return (
    <div className="space-y-20">
      <h1 className="heading">
        Work Experience
      </h1>
      <TracingBeam className="w-full flex justify-center">
        <div className="sm:ml-0 ml-12 grid grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button 
              key={card.id} 
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem" 
              className="w-full flex justify-start flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="w-full flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <div className="w-full lg:pl-10 lg:pr-20">
                  <div className="flex justify-between">
                    <h1 className="text-start text-xl md:text-2xl font-bold">
                      {card.title}
                    </h1>
                    {/* <h3>
                      {card.location}
                    </h3> */}
                  </div>
                  <p className="text-start text-white-100 mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </TracingBeam>
    </div>
  );
};

export default Experience;