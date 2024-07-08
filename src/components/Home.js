// src/components/Home.js

import React from 'react';
import Header from './Header';
import HomeStyle from './Home.module.css'



const Home = () => {
    document.body.style.overflow='hidden'
    return (
        <div>
            <Header />
            <div className={HomeStyle['main-image']}>
                <div className={HomeStyle['title-container']}>
                    <h1 id={HomeStyle['homeH1']}>Welcome to CineHub</h1>
                    <h3>Your Entertainment Hub for Unlimited Movies and TV Shows</h3>
                </div>
            </div>
        </div>
    );
};

export default Home;
