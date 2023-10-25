import Link from 'next/link';
import {motion} from 'framer-motion';

const MotionLink = motion(Link);

<motion.a 
  href="#home"
  target="_blank" 
  whileHover={{ scale: 1.05 }}
  className='w-8 mr-3'
>

</motion.a>;

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 h-16">
      <motion.a 
        href="#hero"
        whileHover={{ scale: 1.05 }}
        className="w-fit text-dark dark:text-light lg:flex items-center justify-center text-2xl font-bold"
      >
        Vincent Hsieh
      </motion.a>
      {/* <MotionLink 
        href="/" 
        className="w-fit h-16 text-dark dark:text-light flex items-center justify-center text-2xl font-bold"
        whileHover={{
          scale: 1.05,  // Slightly increased scaling factor for a more noticeable effect
        }}
      >
        Vincent Hsieh
      </MotionLink> */}
    </div>
  );
};

export default Logo;