import React from 'react';
import { ImLocation } from 'react-icons/im';
import { BiLogoGmail, BiPhoneCall } from 'react-icons/bi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="bg-[#f6fbff] opacity-100 px-5 w-full h-full absolute mt-16">
      <motion.div
        initial={{ y: '40px' }}
        animate={{ y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
        exit={{ y: '40px', transition: { duration: 1, ease: 'easeIn' } }}
      >
        <div className="flex flex-col gap-10 mt-10">
          <div className="flex flex-col items-center gap-2">
            <ImLocation className="text-xl text-gray-700" />
            <h5 className="text-lg">Islamabad, Pakistan</h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BiLogoGmail className="text-xl text-gray-700" />
            <h5 className="text-lg">mhamzazaheer1@gmail.comment</h5>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BiPhoneCall className="text-xl text-gray-700" />
            <h5 className="text-lg">+92 332 5227999</h5>
          </div>
        </div>
        <div class="py-10 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-600">
            GET IN TOUCH
          </h2>
          <form action="#" className="space-y-4">
            <input
              type="text"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="name"
              required
            />
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="email"
              required
            />
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
            ></textarea>
            <button
              type="submit"
              class="bg-gray-800 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="pb-10 w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212645.32758412763!2d73.08610799999998!3d33.61611625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1692109496943!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
