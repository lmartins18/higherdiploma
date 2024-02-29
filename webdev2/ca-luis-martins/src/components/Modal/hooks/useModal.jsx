import { useState } from 'react';

export const useModal = ({ title }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState(title);
    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return { isModalOpen, toggleModal, modalTitle, setModalTitle }
}