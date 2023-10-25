import Layout from '@/components/Layout';
import Image from 'next/image';
import astronautPic from '../../public/images/profile/astronaut.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icon';
import {motion} from 'framer-motion';

const mainText = 'It\'s not innovation until it gets built.';

const Hero = () => {
  const asvariant = {
    initial: {
      y: 0,
    },
    animate: {
      // opacity: 1,
      y: '7%',
      transition: {
        repeat: Infinity,
        repeatType: 'mirror',
        duration: 2,
        // duration: 0.5,
        // ease: 'linear'
      },
    },

    // whileHover: {
    //   y: -10
    // }
  };
  return (
    <main className="flex items-center text-dark dark:text-light w-full">
      <Layout className="!pt-36 lg:!pt-24">
        <div className="flex flex-col lg:flex lg:flex-row justify-between">
          <motion.div 
            className="w-full lg:w-1/2"
            variants={asvariant}
            initial="initial"
            animate="animate"
            // initial={{ opacity: 0, y: 0 }}    // Initial state: transparent and y=0 (no vertical displacement)
            // animate={{ opacity: 1, y: move ? -10 : 0 }}    // End state: fully opaque and y=-10 (vertical displacement of -10)
            // // On hover: y displacement of -10, move slowly back to 0
            // transition={{ duration: 0.5, ease: 'linear' }}  // Duration: 1 second
            // whileHover={{ y: -10 }}  
            // onHoverStart={() => setMove(!move)}  
            // onHoverEnd={() => setMove(!move)}     
          >
            <Image src={astronautPic} priority alt="Me" className='w-full h-auto' />
          </motion.div>

          <div className="w-full lg:w-1/2 mt-10 lg:mt-52 text-left">
            <AnimatedText className="!text-4xl md:!text-6xl !text-left" text={mainText} />
            <motion.p 
              initial={{ opacity: 0 }}    // Initial state: transparent
              animate={{ opacity: 1 }}    // End state: fully opaque
              transition={{ duration: 4 }}  // Duration: 1 second
              className='self-start text-dark'>
                -- Garry Tan
            </motion.p>
            <p className='mt-4 text-base font-medium'>As an explorer & practitioner living in the software-driven world, I am passionate about building products that solve real-world problems.</p>
            <div className='flex items-center self-start mt-16'>
              <Link 
                download={true}
                href="/dummy.pdf" 
                target="_blank" 
                className='flex items-center 
                  bg-dark text-light hover:bg-light hover:text-dark hover:border-dark
                  dark:bg-light dark:text-dark dark:hover:bg-light/70 dark:hover:text-light dark:hover:border-light/70 p-2.5 pl-6 pr-5 rounded-lg text-lg font-semibold border-2 border-solid transition duration-300 ease-in-out'
              >
                  Resume <LinkArrow className="w-6 ml-1" />
              </Link>
              <Link 
                href="mailto:0426vincent@gmail.com" 
                target="_blank"
                className='ml-8 text-lg font-medium capitalize text-dark underline hover:text-dark/40 dark:text-light dark:hover:text-light/70 transition duration-300 ease-in-out'
              >
                    Contact Me
              </Link>
            </div>
          </div>
        </div>
      </Layout>
      {/* <Circular /> */}
    </main>
  );
};

export default Hero;