import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f6fbff] opacity-100 px-5 w-full h-screen absolute flex items-center">
      <motion.div
        initial={{ y: '40px' }}
        animate={{ y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
        exit={{ y: '40px', transition: { duration: 1, ease: 'easeIn' } }}
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-4xl font-bold text-gray-700">
            <span className="underline underline-offset-[20px]">Ha</span>mza
            Zaheer
          </h1>
          <h1 className="m-auto text-2xl text-gray-500">
            Creative{' '}
            <span className="text-gray-700 font-bold">
              <Typewriter
                words={['Developer', 'Freelancer', 'Repeat!']}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={30}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <button
            className="bg-gray-800 px-7 py-3 w-fit text-white rounded-md font-semibold"
            onClick={() => navigate('/contact')}
          >
            Get in Touch
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
