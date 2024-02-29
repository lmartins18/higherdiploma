import ThemeSwitcher from './ThemeSwitcher';
import { Toggler } from './Toggler';
import { useState } from 'react';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <header className="text-xl sm:text-2xl bg-emerald-500 flex flex-wrap flex-row justify-between gap-6 px-2 sm:px-3  text-white sticky top-0 select-none">
            <p className="font-uncial py-3 text-nowrap align-middle">
                <a href="/">
                    <span className="pr-3">🇮🇪</span>Discover Éire
                </a>
            </p>
            <div className={`${isOpen || "hidden"} lg:flex flex-auto items-center justify-between w-full lg:w-auto order-last lg:order-none`}>
                <ul className="navbar-list font-lobster flex flex-col lg:flex-row text-center gap-8 my-auto pb-12 lg:pl-8 lg:p-0">
                    <li><a href="/">Home</a></li>
                    <li><a href="/attractions">Attractions</a></li>
                    <li><a href="/accommodation">Accommodation</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div className="flex gap-2 lg:gap-3">
                <Toggler isOpen={isOpen} toggleOpen={toggleOpen} />
                <ThemeSwitcher />
            </div>
        </header>
    )
}