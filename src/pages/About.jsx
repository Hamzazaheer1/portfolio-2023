import React from 'react';

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
    <section className="bg-gray-100 px-5 w-full absolute mt-16">
      {/* About */}
      <div className="pt-10 space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-900">ABOUT ME</h3>
          <hr className="bg-gray-800 w-[60%] " />
        </div>
        <p className="text-gray-500 text-lg">
          Hello there! My name is Alan Walker. I am a graphic designer, and I'm
          very passionate and dedicated to my work.
        </p>
        <p className="text-gray-500 text-lg">
          With 20 years experience as a professional a graphic designer, I have
          acquired the skills and knowledge necessary to make your project a
          success.
        </p>
      </div>
      {/* Details */}
      <div className="mt-10">
        <ul className="pr-4">
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
      </div>
      {/* PROGRAMMING */}
      <div className="pt-10">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-900">PROGRAMMING</h3>
          <hr className="bg-gray-800 w-[60%] " />
        </div>
        {data?.map((item, index) => (
          <div key={index + 1}>
            <div class="flex justify-between mb-1">
              <span class="text-base font-medium text-blue-700">
                {item.title}
              </span>
              <span class="text-sm font-medium text-blue-700">
                {item.level}%
              </span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div class="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
            </div>
          </div>
        ))}
      </div>
      {/* EDUCATION */}
      <div className="pt-10">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-900">EDUCATION</h3>
          <hr className="bg-gray-800 w-[60%] " />
        </div>
        <div>
          <ol class="relative border-l border-gray-200">
            {education?.map((item, index) => (
              <li key={index + 1} class="mb-10 ml-4">
                <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white bg-gray-500"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.date}
                </time>
                <h3 class="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500">
                  {item.uni}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* Experience */}
      <div className="py-10">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-900">EXPERIENCE</h3>
          <hr className="bg-gray-800 w-[60%] " />
        </div>
        <div>
          <ol class="relative border-l border-gray-200">
            {experience?.map((item, index) => (
              <li key={index + 1} class="mb-10 ml-4">
                <div class="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-white bg-gray-500"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                  {item.date}
                </time>
                <h3 class="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p class="mb-4 text-base font-normal text-gray-500">
                  {item.uni}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
