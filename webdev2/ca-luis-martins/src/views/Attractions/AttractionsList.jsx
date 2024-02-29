import { ModalContext } from '../../components/Modal/context/ModalContext';
import { Modal } from '../../components/Modal/Modal';
import { useContext, useState } from 'react';

export const AttractionsList = ({ attractionsList }) => {
    const modal = useContext(ModalContext);
    const [selected, setSelected] = useState();

    const changeSelectedItem = (item) => {
        setSelected(item);
        modal.setModalTitle(item.name);
        modal.toggleModal();
    }
    const Link = ({ text, url, target }) => (
        <a className="flex text-sky-500" href={url} target={ target || "_blank" } rel='noreferrer'>{text}</a>
    )
    return (
        <>
            <ul className="list-disc list-inside p-3 font-uncial text-2xl">
                {attractionsList.map((item) => (
                    <li key={item.name} className="hover:text-emerald-700 cursor-pointer hover:underline hover:underline-offset-4" onClick={() => changeSelectedItem(item)}>{item.name}</li>
                ))}
            </ul>
            <Modal>
                <ul className="[&>li]:flex [&>li]:gap-3">
                    <li>Name: {selected?.name}</li>
                    {selected?.url &&
                        <li>Url: <Link url={selected.url} text={selected.url}/></li>
                    }
                    <li className='flex gap-3'>Location: <Link url={`https://www.google.com/maps/search/?api=1&query=${selected?.geo.latitude}%2C${selected?.geo.longitude}`} text="Google Maps" /></li>
                    {selected?.telephone &&
                        <li>Telephone: <Link url={`tel:${selected.telephone}`} text={selected.telephone} target="_self"/></li>  
                    }
                </ul>
            </Modal >
        </>

    )
}