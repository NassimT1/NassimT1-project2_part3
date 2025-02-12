// src/components/Movies.js

import React from 'react';
import Header from './Header';
import movies_shows from '../assets/movies_shows.png';
import MoviesStyle from './Movies.module.css'

const Movies = () => {
    return (
        <div>
            <Header />
            <div className={MoviesStyle['movies-section']}>
                <h1>Start watching all of your favorite movies and TV shows today!</h1>
                <div className={MoviesStyle['info-container']}>
                    <div className={MoviesStyle['info']}>
                        <h2>1,500+ Movies</h2>
                    </div>
                    <hr />
                    <div className={MoviesStyle['info']}>
                        <h2>20,000+ Episodes</h2>
                    </div>
                </div>
                <div className={MoviesStyle['image-container']}>
                    <img src={movies_shows} alt="Movies and TV Shows Collage" />
                </div>
            </div>
        </div>
    );
};

export default Movies;
