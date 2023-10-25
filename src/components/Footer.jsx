import Link from 'next/link';
import Layout from './Layout';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg'>
      <Layout className="!py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
        <Link href="#hero">Vincent Hsieh</Link>
      </Layout>
    </footer>
  );
};

export default Footer;