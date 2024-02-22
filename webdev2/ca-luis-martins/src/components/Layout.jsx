
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';

export const Layout = (props) => (
    <div className="h-full w-full flex flex-col text-slate-800 dark:text-white dark:bg-slate-800">
        <NavBar />
        <div className='flex-1 overflow-auto'>
            <Outlet />
        </div>
    </div>
)