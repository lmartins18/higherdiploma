import { GrClose } from "react-icons/gr";

export const AttractionModal = ({ isOpen, onClose, title, imgSrc, bodyText }) => {
  const modalClass = isOpen ? 'block' : 'hidden';

  return (
    <div className={`fixed inset-0 overflow-y-auto ${modalClass} `}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 dark:bg-inherit">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75" />
        </div>
        <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex justify-end">
              <button
                onClick={onClose}
                type="button"
                className="dark:text-inherit text-inherit hover:text-gray-700 focus:outline-none focus:text-gray-700"
              >
                 <GrClose />
              </button>
            </div>
            <div className="text-left">
              <h3 className="font-uncial text-lg mb-6 leading-6 font-medium text-emerald-700 dark:text-emerald-400 text-left" id="modal-headline">
                {title}
              </h3>
              <hr />
              <div className="mt-6">
                <img src={imgSrc} alt={title} className="w-[500px] h-[250px] rounded-md max-w-full ring-2 ring-emerald-500 object-cover" />
              </div>
              <p className="my-12 mx-6 text-sm text-gray-500">{bodyText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};