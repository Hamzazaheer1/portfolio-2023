import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { motion } from 'framer-motion';

const Services = () => {
  const servicesData = [
    {
      icon: <CgWebsite />,
      title: 'React JS Developer',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis nesciunt quisquam velit ducimus corrupti ipsum laboriosam.',
    },
    {
      icon: <CgWebsite />,
      title: 'React JS Developer',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis nesciunt quisquam velit ducimus corrupti ipsum laboriosam.',
    },
    {
      icon: <CgWebsite />,
      title: 'React JS Developer',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum veritatis nesciunt quisquam velit ducimus corrupti ipsum laboriosam.',
    },
  ];

  return (
    <section className="bg-[#f6fbff] opacity-100 px-5 w-full absolute mt-16">
      <motion.div
        initial={{ y: '40px' }}
        animate={{ y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
        exit={{ y: '40px', transition: { duration: 1, ease: 'easeIn' } }}
      >
        <div className="pt-14 space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="tracking-[0.2em] font-bold text-gray-600">
              SERVICES
            </h3>
            <hr className="bg-gray-800 w-[60%] " />
          </div>
        </div>
        <div className="py-12 grid gap-4">
          {servicesData &&
            servicesData.map((item, index) => (
              <div
                key={index + 1}
                className="border-2 border-gray-300 border-solid flex flex-col items-center justify-center gap-6 px-8 py-16 text-lg rounded-md"
              >
                {item?.icon}
                <h3 className="text-center">{item?.title}</h3>
                <p className="text-center">{item?.desc}</p>
              </div>
            ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
