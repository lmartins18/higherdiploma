import { useModal } from "../hooks/useModal";
import { ModalContext } from './ModalContext';

export const ModalContextProvider = ({ children, title }) => {
    const modal = useModal({title: title});
    return (
        <ModalContext.Provider value={{ ...modal }}>
            {children}
        </ModalContext.Provider>
    );
}