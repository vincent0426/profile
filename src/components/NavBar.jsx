import Link from 'next/link';
import React, { useState } from 'react';
import Logo from './Logo';
import { useRouter } from 'next/router';
import {  GithubIcon, LinkedInIcon } from './Icon';
import ToggleButton from './ToggleButton';
import { motion, useScroll } from 'framer-motion';

const CustomLink = ({href, title, className}) => {
  const router = useRouter();

  return (
    <Link href={href} className={`relative ${className} group`} scroll={false}>
      {title}
      <span 
        className={`h-[1px] inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}`}>
          &nbsp;
      </span>
    </Link>
  );
};

const CustomSocialLink = ({href, children}) => {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      whileHover={{ y: -2 }} 
      whileTap={{ scale: 0.9 }}
      className='w-8 mr-3'
    >
      {children}
    </motion.a>
  );
};

const NavBar = () => {
  const { scrollYProgress } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <header className='z-10 fixed top-0 bg-white dark:bg-dark border-b w-full px-8 lg:px-16 py-4 flex justify-between items-center'>
      <button className='flex flex-col justify-center items-center lg:hidden' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>
      <div>
        <Logo />
      </div>
      <div className='hidden w-full justify-between items-center lg:flex lg:items-center lg:w-auto'>
        <nav>
          {/* <CustomLink href="#hero" title="Home" className={'mx-4'} offset={60} /> */}
          <CustomLink href="#about" title="About" className={'mx-4'} offset={-60} />
          <CustomLink href="#work" title="Work" className={'mx-4'} offset={-60} />
          <CustomLink href="#projects" title="Projects" className={'mx-4'} offset={-60} />
          <CustomLink href="#certificates" title="Certificates" className={'mx-4'} offset={-60} />
        </nav>
      </div>
      
      {/* open when click cover the whole screen */}
      <div className={`fixed top-24 left-0 pl-6 w-full h-screen bg-white dark:bg-dark z-20 transition-all duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <nav className='flex flex-col gap-4'>
          {/* <CustomLink href="#hero" title="Home" className={'mx-4'} offset={60} /> */}
          <CustomLink href="#about" title="About" className={'mx-4'} offset={-60} />
          <CustomLink href="#work" title="Work" className={'mx-4'} offset={-60} />
          <CustomLink href="#projects" title="Projects" className={'mx-4'} offset={-60} />
          <CustomLink href="#certificates" title="Certificates" className={'mx-4'} offset={-60} />
        </nav>
      </div>
      
      <nav className='hidden lg:flex items-center justify-center flex-wrap gap-4'>
        <ToggleButton />
        <CustomSocialLink href="https://github.com/vincent0426"><GithubIcon /></CustomSocialLink>
        <CustomSocialLink href="https://www.linkedin.com/in/vincent0426/"><LinkedInIcon /></CustomSocialLink>
      </nav>
      <nav className='flex lg:hidden items-center justify-center flex-wrap gap-4'>
        <ToggleButton />
        <CustomSocialLink href="https://github.com/vincent0426"><GithubIcon /></CustomSocialLink>
        <CustomSocialLink href="https://www.linkedin.com/in/vincent0426/"><LinkedInIcon /></CustomSocialLink>
      </nav>
      <motion.div style={{ scaleX: scrollYProgress }} className='h-[2px] bg-primary absolute bottom-0 left-0 w-full' />
    </header>
  );
};

export default NavBar;