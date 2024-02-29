import { AttractionModal } from './AttractionModal';
import { useModal,ModalContext } from '../Modal';

export const AttractionCard = ({ title, imgSrc, bodyText }) => {
    const modal = useModal({ title: title });
    return (
        <ModalContext.Provider value={{ ...modal }}>
            <div className="ring-2 ring-emerald-500 flex flex-col p-6 rounded  dark:bg-slate-800">
                <img src={imgSrc} alt="killarney" className="w-[500px] h-[250px] m-auto my-3 ring-2 ring-emerald-500 object-cover rounded" loading="lazy" />
                <p className="mt-0 mb-4 mx-0 text-xl text-emerald-700 dark:text-emerald-400 font-uncial">{title}</p>
                <p className=" overflow-hidden mb-16 line-clamp-3">{bodyText}</p>
                <button className="font-lobster text-xl rounded w-fit block mt-auto px-2 py-2 ring-2 text-white bg-slate-500 dark:bg-slate-700 hover:bg-slate-800 ring-emerald-500 hover:text-emerald-500"
                    onClick={modal.toggleModal}
                >
                    Read More
                </button>
                <AttractionModal bodyText={bodyText} />
            </div>
        </ModalContext.Provider>
    )
}