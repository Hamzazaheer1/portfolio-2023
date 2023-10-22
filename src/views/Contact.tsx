// assets
import contactPageImg from '../assets/contact-page.svg';
import contactIllustration from '../assets/contact-illustration.svg';

// components
import { Reveal } from '../components';

// framer-motion
import { motion } from 'framer-motion';

// utils
import { fadeIn, scale } from '../utils/variants';
import { transition } from '../utils/transition';

// icons
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Got a project in<span className="text-secondary"> mind?</span>
            </h2>
          </Reveal>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-h-[348px]"
          />
        </div>

        <motion.div
          variants={fadeIn('up')}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          <div className="h-full pr-6">
            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
              Thank you for visiting my portfolio! I'm a passionate developer
              actively seeking new job opportunities. If you're in search of a
              dedicated and skilled professional to join your team, I'd love to
              hear from you. Let's discuss how I can contribute to your projects
              and help you achieve your goals.
            </p>
            <ul className="mb-6 md:mb-0">
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <MailOutlineIcon />
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Email Address
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    mhamzazaheer1@gmail.com
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <CallIcon />
                </div>
                <div className="ml-4 mb-4">
                  <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    +92 (332) 522-7999
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Contact;
