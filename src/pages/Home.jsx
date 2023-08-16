import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 px-5 w-full h-screen absolute flex items-center">
      <div className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">
          <span className="underline underline-offset-[20px]">Ha</span>mza
          Zaheer
        </h1>
        <h1 className="m-auto text-2xl">
          Creative{' '}
          <span className="text-red-500 font-bold">
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
          className="bg-gray-700 px-7 py-3 w-fit text-white rounded-md font-semibold"
          onClick={() => navigate('/contact')}
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Home;
