import Certificates from "@/components/certificates";
import ContactMeLink from "@/components/contact-me-link";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import TechStack from "@/components/tech-stack";
import { FloatingNav } from "@/components/ui/floating-nav";

const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Certificates",
    link: "#certificates",
  },
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div id="home" className="pt-40">
          <Hero />
        </div>
        <div id="about" className="py-20 lg:py-30">
          <TechStack />
        </div>
        <div id="experience" className="py-20 lg:py-30">
          <Experience />
        </div>
        <div id="projects" className="py-20 lg:py-30">
          <Projects />
        </div>
        <div id="certificates" className="py-20 lg:py-30">
          <Certificates />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}
