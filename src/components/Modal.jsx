import { RxCross1 } from 'react-icons/rx';

const Modal = ({ modalData, closeModal }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="tracking-[0.2em] font-bold text-gray-600">
                {modalData?.title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              >
                <RxCross1 className="text-3xl" onClick={closeModal} />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-8">
              {modalData && <img src={modalData.HeaderImg} alt="header" />}
              <div>
                <h5 className="tracking-widest uppercase font-semibold text-gray-700">
                  Details
                </h5>
                <p className="text-base leading-relaxed text-gray-500">
                  {modalData?.detail}
                </p>
              </div>
              <div>
                <h5 className="tracking-widest uppercase font-semibold text-gray-700">
                  Category
                </h5>
                <p className="text-base leading-relaxed text-gray-500">
                  {modalData?.category}
                </p>
              </div>
              <div>
                <h5 className="tracking-widest uppercase font-semibold text-gray-700">
                  Date
                </h5>
                <p className="text-base leading-relaxed text-gray-500">
                  {modalData?.Date}
                </p>
              </div>
              <div className="grid gap-3">
                {modalData &&
                  modalData?.imgs.map((item, index) => (
                    <img key={index + 1} src={item} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
