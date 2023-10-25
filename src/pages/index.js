
import About from './about';
import Projects from './projects';
import Hero from './hero';
import Certificates from './certificates';
import Work from './work';

export default function Index() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certificates">
        <Certificates />
      </section>
    </>
  );
}
