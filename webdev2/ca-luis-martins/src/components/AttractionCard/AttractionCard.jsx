import { AttractionModal } from './AttractionModal';
import { useState } from 'react';

export const AttractionCard = ({ imgSrc, title, bodyText }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (

        <div className="ring-2 ring-emerald-500 flex flex-col p-6 rounded  dark:bg-slate-700">
            <img src={imgSrc} alt="killarney" className="w-[500px] h-[250px] m-auto my-3 ring-2 ring-emerald-500 object-cover" />
            <p className="mt-0 mb-4 mx-0 text-xl text-emerald-700 dark:text-emerald-400 font-uncial">{title}</p>
            <p className=" overflow-hidden mb-16 line-clamp-3">{bodyText}</p>
            <button className="font-lobster text-xl rounded w-fit block mt-auto px-2 py-2 ring-2 ring-emerald-700 hover:ring-emerald-500 text-emerald-700 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-700 dark:hover:ring-emerald-700"
                onClick={toggleModal}
            >
                Read More
            </button>
            <AttractionModal isOpen={isModalOpen} onClose={toggleModal} title={title} imgSrc={imgSrc} bodyText={bodyText} />
        </div>

    )
}