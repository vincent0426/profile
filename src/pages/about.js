import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import avatarPic from '../../public/images/profile/avatar.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const spinningAnimation = {
    rotate: [0, 360],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: 'linear'
    }
  };
  
  return (
    <>
      {/* <Head>
        <title>About</title>
        <meta name="description" content="About Page" />
      </Head> */}
      
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className="!pt-80">
          <div className="flex mx-auto items-center justify-center">
            <div>
              <AnimatedText text="Software Engineer, Co-Founder" className="!text-3xl lg:!text-4xl !text-start" />
              <div className="max-w-xl text-md text-gray-500 py-10 leading-7">
                Hi, I&apos;m Vincent.
                I&apos;m currently a senior student majoring in Information Management at National
                Taiwan University.
              </div>
            </div>
            <div className='hidden md:flex items-center justify-center relative ml-40'>
              <motion.div
                className="absolute spinning-border rounded-full h-72 w-72"
                style={{ originX: '50%', originY: '50%' }}  // Set the rotation origin to the center
                animate={spinningAnimation}
                // while hover speed up
                whileHover={{ rotate: [0, 360], transition: { duration: 1, repeat: Infinity, ease: 'linear' } }}
              />
              <motion.div 
                initial={{ opacity: 0 }}    // Initial state: transparent
                animate={{ opacity: 1 }}    // End state: fully opaque
                transition={{ duration: 1 }}  // Duration: 1 second
              >
                <Image src={avatarPic} alt="Vincent" className="h-40 w-40" />
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default About;