import { GrClose } from "react-icons/gr";
import { IoMdMenu, } from "react-icons/io";

export const Toggler = ({ isOpen, toggleOpen }) => {
    return (
        <button className="w-10 h-10 rounded-lg flex lg:hidden justify-center m-auto focus:outline-none focus:border-none items-center hover:opacity-50"
            onClick={toggleOpen}
        >
            {isOpen ? <GrClose /> : <IoMdMenu />}
        </button>
    )
}