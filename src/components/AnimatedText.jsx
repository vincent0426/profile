import {motion} from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y:50
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 1,
    },
  },
};

const AnimatedText = ({text, className}) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden'>
      <motion.h1 initial="initial" animate="animate" variants={quote} className={`inline-block text-8xl text-dark dark:text-light capitalize w-full font-bold ${className}`}>
        {text.split('\n').map((line, lineIndex) => (
          <div key={lineIndex} className='w-full'>
            {line.split(' ').map((word, wordIndex) => (
              <motion.span
                key={word + wordIndex}
                className='inline-block'
                variants={singleWord}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </div>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;