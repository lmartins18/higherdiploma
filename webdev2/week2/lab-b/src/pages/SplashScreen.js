import React from 'react';
import AppLink from '../components/AppLink';
import { Link } from 'react-router-dom';
import "./style.css"

const SplashScreen = () => {

    return (
        <div className="outer-container">
            <h1>Welcome to My Favourite Links</h1>
            <div className="list-container">
                <ul>
                    <AppLink name="Hacker News" description="Top news for hackers" url="https://news.ycombinator.com" />
                    <AppLink name="FreeCodeCamp" description="Learn to code for free" url="https://www.freecodecamp.org" />
                    <AppLink name="GitHub" description="Host and collaborate on code" url="https://github.com" />
                    <AppLink name="Stack Overflow" description="Q&A for programmers" url="https://stackoverflow.com" />
                    <AppLink name="Dev.to" description="Articles and discussions for developers" url="https://dev.to" />
                    <AppLink name="TechCrunch" description="Startup and tech news" url="https://techcrunch.com" />
                    <AppLink name="Wired" description="Technology and culture reporting" url="https://www.wired.com" />
                </ul>
            </div>
            <Link to={"/"}>Go Back</Link>
        </div>
    );
};

export default SplashScreen;