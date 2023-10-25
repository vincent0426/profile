import AnimatedText from '@/components/AnimatedText';
import { GithubIcon } from '@/components/Icon';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SAA from '../../public/images/certificates/aws-saa.png';
import CCP from '../../public/images/certificates/aws-ccp.png';

// Create a new component file for Certificate, e.g., Certificate.js
const Certificate = ({ title, issuer, date, link, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='cursor-pointer overflow-hidden rounded-lg'
    >
      <a href={link} target="_blank" rel="noreferrer">
        <div className='w-full flex items-center rounded-2xl p-6 relative'>
          <Image src={img} alt={title} className='w-[100px] h-auto' />
          <div className='ml-4 w-full flex flex-col items-start mt-4'>
            {/* <span className='text-primary font-medium text-xl'>{type}</span> */}
            <div className='w-full flex items-center justify-between'>
              <h2 className='my-2 text-2xl font-bold'>{title}</h2>
              <p className='font-medium text-dark dark:text-light'>{date}</p>
            </div>
            <p className='my-2 font-medium text-dark dark:text-light'>{issuer}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <main className='w-full mb-16 flex flex-col items-center justify-center'>
      <Layout className="!pt-36 !max-w-7xl">
        <div className='relative w-full flex flex-col items-center justify-center mb-16 h-fit'>
          <AnimatedText text="Certificates" className="!text-4xl lg:!text-6xl !mb-0" />
        </div>

        <div className='w-full mx-auto max-w-3xl space-y-8'>
          <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className='col-span-8'
          > 
            <Certificate 
              title="AWS Solutions Architect - Associate"
              issuer="Amazon Web Services"
              date="July 2022"
              link="https://www.credly.com/badges/517e9984-f6bc-47c9-9d28-f9b0d317f029/public_url"
              img={SAA}
            />
          </motion.div>
          <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{
              duration: 1,
              type: 'spring',
            }}
            className='col-span-8'
          > 
            <Certificate 
              title="AWS Certified Cloud Practitioner"
              issuer="Amazon Web Services"
              date="July 2021"
              link="https://www.credly.com/badges/f871c9c6-605e-4934-aaab-aa7a90f23d99/public_url"
              img={CCP}
            />
          </motion.div>
        </div>
      </Layout>
    </main>
  );
};

export default Certificates;
