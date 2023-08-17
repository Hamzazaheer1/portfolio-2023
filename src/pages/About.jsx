import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const data = [
    { title: 'HTML & CSS', level: 95 },
    { title: 'Tailwind CSS', level: 80 },
    { title: 'React JS', level: 80 },
    { title: 'Redux Toolkit', level: 80 },
    { title: 'Typescript', level: 80 },
  ];

  const education = [
    {
      title: 'BSCS',
      uni: 'Capital University of Scicence and Technology',
      date: 'Feb 2023',
    },
    {
      title: 'ICS',
      uni: 'Punjab Group of Colleges Rwp',
      date: 'Feb 2019',
    },
    {
      title: 'Matriculation',
      uni: 'Al Huda High School',
      date: 'Feb 2017',
    },
  ];

  const experience = [
    {
      title: 'Frontend Developer (React JS)',
      uni: 'Codify',
      date: 'JAN 2023 - current',
    },
    {
      title: 'Website Manager',
      uni: 'STEM',
      date: 'Feb 2019 - Feb - 2019',
    },
  ];

  return (
    <section className="bg-[#f6fbff] opacity-100 px-5 w-full absolute mt-16">
      <motion.div
        initial={{ y: '40px' }}
        animate={{ y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
        exit={{ y: '40px', transition: { duration: 1, ease: 'easeIn' } }}
      >
        {/* About */}
        <div className="pt-14 space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="tracking-[0.2em] font-bold text-gray-600">
              ABOUT ME
            </h3>
            <hr className="bg-gray-800 w-[60%] " />
          </div>
          <p className="text-gray-500 text-lg pt-6">
            Hello there! My name is Hamza Zaheer. I am a frontend web developer,
            and I'm very passionate and dedicated to my work.
          </p>
          <p className="text-gray-500 text-lg">
            With 2 years experience as a professional a graphic designer, I have
            acquired the skills and knowledge necessary to make your project a
            success.
          </p>
        </div>
        {/* Details */}
        <ul className="mt-12 pr-4">
          <li className="flex justify-between text-gray-500 font-semibold">
            <span>Name:</span>
            <span>Hamza Zaheer</span>
          </li>
          <li className="flex justify-between text-gray-500 font-semibold">
            <span>Address:</span>
            <span>Islamabad, Pakistan</span>
          </li>
          <li className="flex justify-between text-gray-500 font-semibold">
            <span>Study:</span>
            <span>CUST</span>
          </li>
          <li className="flex justify-between text-gray-500 font-semibold">
            <span>Degree:</span>
            <span>BSCS</span>
          </li>
          <li className="flex justify-between text-gray-500 font-semibold">
            <span>Mail:</span>
            <span>mhamzazaheer1@gmail.com</span>
          </li>
          <li className="flex justify-between text-gray-500 font-semibold">
            <span>Phone:</span>
            <span>+92 332 5227999</span>
          </li>
        </ul>
        {/* PROGRAMMING */}
        <div className="pt-12">
          <div className="flex items-center gap-4 py-10">
            <h3 className="tracking-[0.2em] font-bold text-gray-600">
              PROGRAMMING
            </h3>
            <hr className="bg-gray-800 w-[60%] " />
          </div>
          <div className="flex flex-col gap-6">
            {data?.map((item, index) => (
              <div key={index + 1} className="">
                <div class="flex justify-between mb-1">
                  <span class="text-base font-medium text-gray-700">
                    {item.title}
                  </span>
                  <span class="text-sm font-medium text-gray-700">
                    {item.level}%
                  </span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2.5">
                  <div class="bg-gray-600 h-2.5 rounded-full w-[45%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* EDUCATION */}
        <div className="pt-12">
          <div className="flex items-center gap-4 py-10">
            <h3 className="tracking-[0.2em] font-bold text-gray-600">
              EDUCATION
            </h3>
            <hr className="bg-gray-800 w-[60%]" />
          </div>
          <ol class="relative border-l border-gray-200">
            {education?.map((item, index) => (
              <li key={index + 1} class="mb-10 ml-4">
                <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white bg-gray-500"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.date}
                </time>
                <h3 class="text-lg font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500">
                  {item.uni}
                </p>
              </li>
            ))}
          </ol>
        </div>
        {/* Experience */}
        <div className="py-12">
          <div className="flex items-center gap-4 pb-10">
            <h3 className="tracking-[0.2em] font-bold text-gray-600">
              EXPERIENCE
            </h3>
            <hr className="bg-gray-800 w-[60%]" />
          </div>
          <ol class="relative border-l border-gray-200">
            {experience?.map((item, index) => (
              <li key={index + 1} class="mb-10 ml-4">
                <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white bg-gray-500"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.date}
                </time>
                <h3 class="text-lg font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500">
                  {item.uni}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
