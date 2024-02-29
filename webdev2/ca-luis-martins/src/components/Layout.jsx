
import { Outlet } from "react-router-dom";
import NavBar from './NavBar';

export const Layout = (props) => (
    <div className="h-full w-full flex flex-col text-slate-700 dark:text-gray-200 dark:bg-slate-900">
        <NavBar />
        <div className='flex-1 overflow-auto'>
            <Outlet />
        </div>
    </div>
)