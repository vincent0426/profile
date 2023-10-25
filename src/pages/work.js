import LiIcon from '@/components/LiIcon';
import {motion, useScroll} from 'framer-motion';
import { useRef } from 'react';

const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[80%] lg:w-[60%] mx-auto flex flex-col">
      <LiIcon reference={ref} />
      <motion.div
        initial={{y: 50,}}
        whileInView={{y: 0,}}
        transition={{
          duration: 0.5,
          type: 'spring',
        }}
      >
        <h3 className="capitalize font-bold text-2xl">{position}&nbsp;<a href={companyLink} target="_blank" rel="noreferrer" className="text-primary">@{company}</a></h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full pt-2">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

const Work = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  });
  
  return (
    <div className="my-64">
      <h2 className="font-bold text-3xl lg:text-6xl mb-20 lg:mb-32 w-full text-center">
        Work Experience
      </h2>
      <div ref={ref} className="w-[50%] mx-auto lg:w-[75%] relative">
        <motion.div 
          style={{
            scaleY: scrollYProgress,
          }}
          className="hidden lg:block lg:absolute left-0 lg:left-[84px] top-1 w-[4px] h-full bg-dark dark:bg-light origin-top" 
        />
        <ul className="w-full flex flex-col items-start justify-between lg:ml-24">
          <Details 
            position="Co-Founder"
            company="OfferLand"
            companyLink="https://offerland.cc"
            time="Sep, 2022 - Present"
            address="Taipei, Taiwan"
          />
          <Details 
            position="Software Dev Enigneer Intern"
            company="Amazon"
            companyLink="https://amazon.com"
            time="Jul, 2022 - Aug, 2022"
            address="Taipei, Taiwan"
          />
          <Details 
            position="Software Engineer Intern"
            company="FST Network"
            companyLink="https://www.fst.network"
            time="Feb, 2022 - Mar, 2022"
            address="Taipei, Taiwan"
          />
          <Details 
            position="Teaching Assistant"
            company="NTU"
            companyLink="https://www.ntu.edu.tw"
            time="Sep, 2021 - Jan, 2022"
            address="Taipei, Taiwan"
            work="Course: Programming for Business Computing"
          />
        </ul>
      </div>
    </div>
  );
};

export default Work;