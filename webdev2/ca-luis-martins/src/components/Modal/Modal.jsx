import { ModalOverlay } from './ModalOverlay';
import { ModalBody } from './ModalBody';
import { TitleBox } from './TitleBox';
import { ModalOuterContainer } from './ModalOuterContainer';
import { ModalContext } from './context/ModalContext';
import { useContext } from 'react';

export const Modal = ({ children }) => {
    const { isModalOpen, toggleModal, modalTitle } = useContext(ModalContext);
    return (
        <ModalOuterContainer isOpen={isModalOpen}>
            <ModalOverlay onClose={toggleModal} />
            <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <TitleBox onClose={toggleModal} title={modalTitle} />
                    <ModalBody >
                        {children}
                    </ModalBody>
                </div>
            </div>
        </ModalOuterContainer>
    )
}