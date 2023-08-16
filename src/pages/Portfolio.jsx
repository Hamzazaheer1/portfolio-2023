import { useState } from 'react';
import Modal from '../components/Modal';

const Portfolio = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleModalOpen = (data) => {
    setModalData(data);
    setModalOpen(true);
  };

  const singleData = {
    HeaderImg:
      'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    title: 'First Project',
    detail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. In totam atque iure amet hic ipsa odit itaque excepturi? Blanditiis, minus.',
    category: 'Frontend',
    Date: 'March 20 2022',
    imgs: [
      'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
      'https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg',
    ],
  };

  return (
    <section className="bg-gray-100 px-5 w-full absolute mt-16">
      <div className="pt-10 space-y-6">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold text-gray-900">PORTFOLIO</h3>
          <hr className="bg-gray-800 w-[60%] " />
        </div>
        {/* gallery */}
        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                  onClick={() => handleModalOpen(singleData)}
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal /> */}
      {modalOpen && (
        <Modal modalData={modalData} closeModal={() => setModalOpen(false)} />
      )}
    </section>
  );
};

export default Portfolio;
