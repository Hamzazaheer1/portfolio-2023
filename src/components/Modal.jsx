import { RxCross1 } from 'react-icons/rx';

const Modal = ({ modalData, closeModal }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-start justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">
                {modalData?.title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              >
                <RxCross1 className="w-3 h-3" onClick={closeModal} />
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {modalData && <img src={modalData.HeaderImg} alt="header" />}
              <h5 className="underline">Details</h5>
              <p className="text-base leading-relaxed text-gray-500">
                {modalData?.detail}
              </p>
              <h5 className="underline">Category</h5>
              <p className="text-base leading-relaxed text-gray-500">
                {modalData?.category}
              </p>
              <h5 className="underline">Date</h5>
              <p className="text-base leading-relaxed text-gray-500">
                {modalData?.Date}
              </p>

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
