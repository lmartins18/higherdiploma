export const ModalOuterContainer = ({ children, isOpen }) => {
    const modalClass = isOpen ? 'block' : 'hidden';
    
    return (
        <div className={`fixed inset-0 overflow-y-auto ${modalClass} `}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 dark:bg-inherit">{children}</div>
        </div>)
}