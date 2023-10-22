// assets
import downloadIcon from '../assets/download-btn-icon.svg';
import homePageIllustation from '../assets/hero-illustration.svg';
import homePageImg from '../assets/home-page.svg';

// components
import { Button } from '../components';

// react-simple-typewriter
import { Typewriter } from 'react-simple-typewriter';

// framer-motion
import { motion } from 'framer-motion';

// utils
import { transition } from '../utils/transition';
import { fadeIn, scale } from '../utils/variants';

import facebookIcon from '../assets/facebook-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import youtubeIcon from '../assets/youtube-icon.svg';

// components
import { SocialMediaIcon } from '../components';
import { Link } from 'react-scroll';

const Hero = () => {
  const handleDownload = () => {
    const pdfUrl = '/HamzaCV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Hamza_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col 
          xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="w-full xl:w-fit">
          <motion.h1
            variants={fadeIn('down')}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl
              font-bolt text-textPrimary uppercase"
          >
            Hamza Zaheer
            <br />
            <span className="text-secondary text-3xl sm:text-4xl lg:text-5xl">
              <Typewriter
                words={['MERN Stack Dev', 'Next JS Dev', 'Full Stack Dev']}
                cursor
                cursorStyle="_"
                typeSpeed={250}
                deleteSpeed={150}
                loop
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up')}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Link to="contact" smooth>
              <Button secondary>Hire me</Button>
            </Link>
            <Button icon={downloadIcon} onClick={handleDownload}>
              Download CV
            </Button>
          </motion.div>
          <motion.div
            variants={fadeIn('up')}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="flex items-center justify-center xl:justify-start gap-6"
          >
            <SocialMediaIcon imgSrc={facebookIcon} title="Facebook" />
            <SocialMediaIcon imgSrc={instagramIcon} title="Instagram" />
            <SocialMediaIcon imgSrc={twitterIcon} title="Twitter" />
            <SocialMediaIcon imgSrc={youtubeIcon} title="YouTube" />
          </motion.div>
        </div>

        <motion.img
          variants={scale()}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          src={homePageIllustation}
          alt=""
          className="max-w-full sm:max-w-[401px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Hero;
