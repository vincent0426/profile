import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Spotlight } from "@/components/ui/spotlight";
import Particles from "@/components/ui/particles";
import DownloadResumeButton from "@/components/download-resume-button";
import ContactMeLink from "@/components/contact-me-link";

const Hero = () => {
  return (
    <div>
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="gray" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>
      
      <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      
      <div className="flex justify-center relative mt-10 mb-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words={"It's Not Innovation \ Until It Gets Built"}
          />
          <p className="mt-10 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"> 
            Hi, I&apos;m Vincent, a software engineer based in California. 😎
          </p>
          
          <div className="flex flex-col gap-4">
            <ContactMeLink />
            {/* <DownloadResumeButton /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;