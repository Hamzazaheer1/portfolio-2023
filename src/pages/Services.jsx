import React from 'react';
import { CgWebsite } from 'react-icons/cg';

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
    <section className="bg-gray-100 px-5 w-full absolute mt-16">
      <div className="pt-10 space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-900">SERVICES</h3>
          <hr className="bg-gray-800 w-[60%] " />
        </div>
      </div>
      <div className="py-10 grid gap-4">
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
    </section>
  );
};

export default Services;
