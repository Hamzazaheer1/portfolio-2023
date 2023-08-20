import { useState } from 'react';
import Modal from '../components/Modal';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleModalOpen = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const portfolioData = [
    {
      title: 'Nike Store Replica',
      img: '/assets/portfolio/first.JPG',
      data: {
        HeaderImg: '/assets/portfolio/first.JPG',
        title: 'Nike Store Replica',
        detail:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
        category: 'Frontend',
        Date: 'March 20 2022',
        link: 'https://e-commerce-watches.vercel.app/',
      },
    },
    {
      title: 'EtherLand',
      img: '/assets/portfolio/second.JPG',
      data: {
        HeaderImg: '/assets/portfolio/second.JPG',
        title: 'EtherLand',
        detail:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
        category: 'Frontend',
        Date: 'March 20 2022',
        link: 'https://etherland.vercel.app/',
      },
    },
    {
      title: 'PetBook',
      img: '/assets/portfolio/third.JPG',
      data: {
        HeaderImg: '/assets/portfolio/third.JPG',
        title: 'PetBook',
        detail:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
        category: 'Frontend',
        Date: 'March 20 2022',
        link: 'https://pet-book.vercel.app/',
      },
    },
    {
      title: 'Opensea Clone',
      img: '/assets/portfolio/fourth.JPG',
      data: {
        HeaderImg: '/assets/portfolio/fourth.JPG',
        title: 'Opensea Clone',
        detail:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
        category: 'Frontend',
        Date: 'March 20 2022',
        link: 'https://opensea-clone-sage-psi.vercel.app/',
      },
    },
    {
      title: 'Aptly Ecom',
      img: '/assets/portfolio/fifth.JPG',
      data: {
        HeaderImg: '/assets/portfolio/fifth.JPG',
        title: 'Aptly Ecom',
        detail:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
        category: 'Frontend',
        Date: 'March 20 2022',
        link: 'https://amazon-automation-services.vercel.app/',
      },
    },
    {
      title: 'Coffee Connoisseur',
      img: '/assets/portfolio/sixth.JPG',
      data: {
        HeaderImg: '/assets/portfolio/sixth.JPG',
        title: 'Coffee Connoisseur',
        detail:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
        category: 'Frontend',
        Date: 'March 20 2022',
        link: 'https://discover-coffee-stores-next-js.vercel.app/',
      },
    },
    {
      title: 'Karyana Landing Page',
      img: '/assets/portfolio/seventh.JPG',
      data: {
        HeaderImg: '/assets/portfolio/seventh.JPG',
        title: 'Karyana Landing Page',
        detail:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
        category: 'Frontend',
        Date: 'March 20 2022',
        link: 'https://karyana.vercel.app/',
      },
    },
  ];

  return (
    <section className="bg-[#f6fbff] opacity-100 px-5 w-full absolute mt-16">
      <motion.div
        initial={{ y: '40px' }}
        animate={{ y: 0, transition: { duration: 0.4, ease: 'easeOut' } }}
        exit={{ y: '40px', transition: { duration: 1, ease: 'easeIn' } }}
      >
        <div className="py-14 space-y-6">
          <div className="flex items-center gap-4">
            <h3 className="tracking-[0.2em] font-bold text-gray-600">
              PORTFOLIO
            </h3>
            <hr className="bg-gray-800 w-[60%] " />
          </div>
          {/* gallery */}
          <div className="pt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
            {portfolioData?.map((item, index) => (
              <div
                key={index + 1}
                className="relative cursor-pointer hover:scale-105 duration-300"
              >
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={item.img}
                  alt={item.title}
                  onClick={() => handleModalOpen(item.data)}
                />
                <span className="absolute bottom-1 left-2 font-bold tracking-widest shadow-md bg-black text-white px-2 py-1">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      {/* <Modal /> */}
      {modalOpen && (
        <Modal modalData={modalData} closeModal={() => setModalOpen(false)} />
      )}
    </section>
  );
};

export default Portfolio;
