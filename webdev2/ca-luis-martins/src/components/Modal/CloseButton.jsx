import { GrClose } from 'react-icons/gr';

export const CloseButton = ({onClose}) => (
    <button
        onClick={onClose}
        type="button"
        className="dark:text-inherit text-inherit hover:text-slate-700 focus:outline-none focus:text-gray-700"
    >
        <GrClose />
    </button>
)