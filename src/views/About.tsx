// assets
import aboutPageImg from '../assets/about-me-page.svg';
import aboutIllustration from '../assets/about-illustration.svg';

// components
import { Reveal } from '../components';

// framer-motion
import { motion } from 'framer-motion';

// utils
import { fadeIn, scale } from '../utils/variants';
import { transition } from '../utils/transition';

const experience = [
  {
    date: {
      from: 'March 2023',
      to: 'Present',
    },
    company: 'Codify Pvt Limited',
    description: 'React JS Developer',
  },
  {
    date: {
      from: 'October 2022',
      to: 'January 2023',
    },
    company: 'HB Software',
    description: 'Junior Frontend Developer',
  },
  {
    date: {
      from: 'August 2022',
      to: 'September 2022',
    },
    company: 'STEM Career Programme PIEAS',
    description: 'Web Content Administrator – Internee',
  },
];

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
          items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              About <span className="text-secondary"> me</span>
            </h2>
          </Reveal>

          <Reveal>
            <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary mb-4">
              I am a Computer Science graduate from Capital University of
              Science and Technology in Islamabad, Pakistan. Currently, I am
              working as a MERN (MongoDB, Express, React, Node.js) stack
              developer.
            </p>

            <h4 className="font-bold text-secondary text-2xl">Experience</h4>
            <ol className="relative border-l border-gray-200 ">
              {experience?.map((item, index) => (
                <li className="mb-6 ml-4" key={index + 1}>
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white "></div>
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                    {item.date.from} - {item.date.to}
                  </time>
                  <h3 className="text-lg font-semibold text-white">
                    {item.company}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-400">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={aboutIllustration}
            alt=""
            className="max-w-full sm:max-w-[401px]"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default About;
