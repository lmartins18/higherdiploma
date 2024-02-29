export const ModalOverlay = ({ onClose }) => (
    <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={onClose}>
        <div className="absolute inset-0 bg-gray-500 opacity-75" />
    </div>
)