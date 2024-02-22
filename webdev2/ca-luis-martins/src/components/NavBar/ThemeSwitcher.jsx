import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        localStorage.theme = darkMode ? 'dark' : null;
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <button
            onClick={toggleDarkMode}
            className="rounded-lg flex justify-center m-auto focus:outline-none focus:border-none items-center text-white dark:text-slate-700 hover:opacity-50 "
        >
            {darkMode ? <MdDarkMode /> : <MdLightMode />}
        </button>
    );
};

export default ThemeSwitcher;
// References:
// https://www.linkedin.com/pulse/creating-dark-light-mode-tailwind-css-reactjs-guide-beginners-sharma/
// https://tailwindcss.com/docs/dark-mode