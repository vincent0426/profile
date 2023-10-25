import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icon';
import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import offerLand from '../../public/images/projects/offerland.png';
import fyno from '../../public/images/projects/fyno.png';
import flappy from '../../public/images/projects/flappy.png';
import covid from '../../public/images/projects/covid.png';
import tuber from '../../public/images/projects/tuber.png';
import supatest from '../../public/images/projects/supatest.png';
import CubeContainer from '@/components/CubeContainer';
import { motion } from 'framer-motion';

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="flex flex-col lg:flex-row p-8 relative rounded-br-2xl w-full items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl lg:p-12">
      <div className="absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] bg-dark dark:bg-light/20 rounded-[2.5rem]" />
      <motion.a
        href={link}
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-[240px] rounded-lg border border-dark dark:border-light" />
      </motion.a>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pt-10 pl-6">
        {/* <span className='text-primary font-medium text-xl'>{type}</span> */}
        <div className="w-full flex items-center justify-between">
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className="hover:text-dark/40 dark:hover:text-light/40" />
          </Link>
        </div>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg border-2 border-transparent font-semibold hover:border-2 hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light dark:border-light dark:bg-dark p-6 relative">
      <div className="absolute rounded-br-3xl top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark dark:bg-light/20 rounded-[2rem]" />
      <motion.a
        href={link}
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-[240px] rounded-lg border border-dark dark:border-light" />
      </motion.a>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        {/* <span className='text-primary font-medium text-xl'>{type}</span> */}
        <div className="w-full flex items-center justify-between">
          <h2 className="my-2 w-full text-left text-2xl font-bold">{title}</h2>
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className="hover:text-dark/40 dark:hover:text-light/40" />
          </Link>
        </div>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        {/* <div className='mt-2 flex items-center'> */}
        {/* <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link> */}
        {/* <Link href={link} target="_blank" className='rounded-lg text-lg font-semibold underline'>Visit Github</Link> */}
        {/* </div> */}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <main className="w-full mb-16 flex flex-col items-center justify-center">
      <Layout className="!pt-36 !max-w-7xl">
        <div className="relative w-full flex flex-col items-center justify-center mb-16 h-fit">
          <AnimatedText text="Projects" className="!text-4xl lg:!text-6xl mb-0" />
          <div className="hidden lg:block lg:absolute right-0 bottom-0">
            <CubeContainer />
          </div>
        </div>

        <div className="flex gap-16 flex-col lg:grid lg:grid-cols-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className="col-span-12"
          >
            <FeaturedProject
              type="Featured Project"
              title="OfferLand"
              summary="An interactive platform for users to share and discover study-abroad information and admission insights."
              img={offerLand}
              link="https://offerland.cc/"
              github="https://www.google.com/"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className="col-span-6"
          >
            <Project
              type="Project"
              title="Find Your Next Owner"
              summary="A platform for pet owners to list their pets for adoption and for potential adopters to browse existing pets."
              img={fyno}
              link="https://github.com/vincent0426/fyno-client"
              github="https://github.com/vincent0426/fyno-client"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className="col-span-6"
          >
            <Project
              type="Project"
              title="Flappy Jenny"
              summary="A Flappy Bird clone game built with C++ and SFML, integrated with Super Mario Bros. features."
              img={flappy}
              link="https://github.com/vincent0426/Flappy-Jenny"
              github="https://github.com/vincent0426/Flappy-Jenny"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className="col-span-12"
          >
            <FeaturedProject
              type="Featured Project"
              title="SupaTest"
              summary="A platform for users to generate mock data with zero-shot classification."
              img={supatest}
              link="https://supatest-eight.vercel.app/"
              github="https://github.com/vincent0426/supatest"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className="col-span-6"
          >
            <Project
              type="Project"
              title="COVID-19 Dashboard Tracker"
              summary="A dashboard that tracks the latest COVID-19 data around the world, built with pure Python."
              img={covid}
              link="https://github.com/vincent0426/COVID-19-dashboard"
              github="https://github.com/vincent0426/COVID-19-dashboard"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className="col-span-6"
          >
            <Project
              type="Project"
              title="I'm Uber"
              summary="A company-specific ride-sharing app built with React and Golang, allowing people to share rides with colleagues."
              img={tuber}
              link="https://github.com/TSMC-Uber"
              github="https://github.com/TSMC-Uber"
            />
          </motion.div>
        </div>
      </Layout>
    </main>
  );
};

export default Projects;
