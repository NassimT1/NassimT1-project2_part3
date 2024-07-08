import React, { useState } from 'react';
import Header2 from './Header2';
import MainStyle from './Main.module.css';

import theLionKing from '../assets/movies-shows/the lion king.jpg';
import avatar from '../assets/movies-shows/avatar.webp';
import titanic from '../assets/movies-shows/titanic.jpg';
import breakingBad from '../assets/movies-shows/breaking bad.jpg';
import avengersEndgame from '../assets/movies-shows/avengers endgame.png';
import extraction2 from '../assets/movies-shows/extraction 2.jpg';
import darkKnightRises from '../assets/movies-shows/the dark knight rises.webp';
import fastX from '../assets/movies-shows/fast x.jpg';
import avatar2 from '../assets/movies-shows/avatar 2.png';
import kingdomApes from '../assets/movies-shows/kingdom of the planet of the apes.jpg';
import readyPlayerOne from '../assets/movies-shows/ready player one.jpg';
import sausageParty from '../assets/movies-shows/sausage party.jpg';
import jumpStreet22 from '../assets/movies-shows/22 jump street.jpg';
import americanPsycho from '../assets/movies-shows/american psycho.jpg';
import parasite from '../assets/movies-shows/parasite.jpg';
import squidGame from '../assets/movies-shows/squid game.webp';
import betterCallSaul from '../assets/movies-shows/better call saul.jpg';

const Main = () => {
    document.body.style.overflow = 'auto';
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [, setReview] = useState('');
    const [, setRating] = useState(0); // Initialize rating state
    const [, ] = useState(false);
    const [watchlist, setWatchlist] = useState([]); // State for watchlist


    const openModal = (movie) => {
        setSelectedMovie(movie);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setReview('');
        setRating(0); // Reset rating state
    };

    const startWatchParty = (movieTitle) => {
        const code = Math.random().toString(36).substr(2, 4).toUpperCase();
        const userInput = prompt(`Starting a watch party for ${movieTitle}. Your code is ${code} OR enter a code:`);
        if (userInput) {
            // Handle user input
        }
    };

    const writeReview = (movieTitle) => {
        let reviewText = prompt(`Write your review for ${movieTitle}:`);
        if (reviewText !== null) { // Prompt returns null on cancel
            let isValidRating = false;
            let ratingValue = 0;

            while (!isValidRating) {
                const ratingInput = prompt(`Rate ${movieTitle} (out of 5 stars):`);
                ratingValue = parseInt(ratingInput);
                if (!isNaN(ratingValue) && ratingValue >= 1 && ratingValue <= 5) {
                    isValidRating = true;
                } else {
                    alert('Invalid rating input. Please enter a number between 1 and 5.');
                }
            }

            // Now isValidRating is true and ratingValue is valid
            alert(`Review submitted for ${movieTitle}:
                Rating: ${ratingValue} stars
                Review: ${reviewText}`);
        }
    };

    const toggleWatchlist = (movie) => {
        if (watchlist.some((item) => item.id === movie.id)) {
            setWatchlist(watchlist.filter((item) => item.id !== movie.id));
        } else {
            setWatchlist([...watchlist, movie]);
        }
    };

    const isInWatchlist = (movie) => {
        return watchlist.some((item) => item.id === movie.id);
    };

    const playVideo = () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    };

    const MovieCard = ({ src, title }) => (
        <div className={MainStyle['movie-card']} onClick={() => openModal({ title, src })}>
            <img src={src} alt={title} />
            <div className={MainStyle['movie-title']}>{title}</div>
        </div>
    );

    return (
        <div className={MainStyle['main-page']}>
            <Header2 />

            <div className={MainStyle['spotlight-banner']}>
                <div className={MainStyle['play-button-container']}>
                    <button className={MainStyle['play-button']} onClick={playVideo}>Play</button>
                </div>
            </div>

            <div className={MainStyle['filter-section']}>
                <h2>Filter By:</h2>
                <form>
                    <div className={MainStyle['form-group']}>
                        <label htmlFor="content-type">Content Type</label>
                        <select id="content-type" className={MainStyle['form-control']}>
                            <option value="all">All</option>
                            <option value="movies">Movies</option>
                            <option value="tv-shows">TV Shows</option>
                        </select>
                    </div>
                    <div className={MainStyle['form-group']}>
                        <label htmlFor="genre">Genre</label>
                        <select id="genre" className={MainStyle['form-control']}>
                            <option value="all">All</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                        </select>
                    </div>
                    <div className={MainStyle['form-group']}>
                        <label htmlFor="rating">Rating</label>
                        <select id="rating" className={MainStyle['form-control']}>
                            <option value="all">All</option>
                            <option value="g">G</option>
                            <option value="pg">PG</option>
                            <option value="pg-13">PG-13</option>
                            <option value="r">R</option>
                        </select>
                    </div>
                    <button type="submit" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`}>Apply Filters</button>
                </form>
            </div>

            <div className={MainStyle['movie-section']}>
                <h2>Most Popular</h2>
                <div className={MainStyle['movie-row']}>
                    <MovieCard src={theLionKing} title="The Lion King" />
                    <MovieCard src={avatar} title="Avatar" />
                    <MovieCard src={titanic} title="Titanic" />
                </div>
            </div>

            <div className={MainStyle['movie-section']}>
                <h2>Highest Rated</h2>
                <div className={MainStyle['movie-row']}>
                    <MovieCard src={breakingBad} title="Breaking Bad" />
                </div>
            </div>

            <div className={MainStyle['movie-section']}>
                <h2>Action</h2>
                <div className={MainStyle['movie-row']}>
                    <MovieCard src={avengersEndgame} title="Avengers Endgame" />
                    <MovieCard src={extraction2} title="Extraction 2" />
                    <MovieCard src={darkKnightRises} title="The Dark Knight Rises" />
                    <MovieCard src={fastX} title="Fast X" />
                    <MovieCard src={avatar2} title="Avatar 2" />
                </div>
            </div>

            <div className={MainStyle['movie-section']}>
                <h2>Sci-Fi</h2>
                <div className={MainStyle['movie-row']}>
                    <MovieCard src={kingdomApes} title="Kingdom of the Planet of the Apes" />
                    <MovieCard src={readyPlayerOne} title="Ready Player One" />
                </div>
            </div>

            <div className={MainStyle['movie-section']}>
                <h2>Comedy</h2>
                <div className={MainStyle['movie-row']}>
                    <MovieCard src={sausageParty} title="Sausage Party" />
                    <MovieCard src={jumpStreet22} title="22 Jump Street" />
                </div>
            </div>

            <div className={MainStyle['movie-section']}>
                <h2>Thriller</h2>
                <div className={MainStyle['movie-row']}>
                    <MovieCard src={americanPsycho} title="American Psycho" />
                    <MovieCard src={parasite} title="Parasite" />
                    <MovieCard src={squidGame} title="Squid Game" />
                    <MovieCard src={betterCallSaul} title="Better Call Saul" />
                </div>
            </div>

            <div id="movie-details-modal" className={MainStyle.modal} style={{ display: modalVisible ? 'block' : 'none' }}>
                <div className={MainStyle['modal-content']}>
                    <span className={MainStyle.close} onClick={closeModal}>&times;</span>
                    {selectedMovie && (
                        <>
                            <div className={MainStyle['modal-poster']}>
                                <img id="modal-poster-img" src={selectedMovie.src} alt={selectedMovie.title} />
                            </div>
                            <div className={MainStyle['modal-details']}>
                                <h2 id="modal-title">{selectedMovie.title}</h2>
                                <p id="modal-description">Description of the movie or TV show...</p>
                                <p id="modal-duration">Duration: N/A</p>
                                <p id="modal-rating">Rating: N/A</p>
                                <p id="modal-reviews">Reviews: N/A</p>
                                <div className={MainStyle['modal-buttons']}>
                                    <button onClick={(e) => { e.stopPropagation(); toggleWatchlist(selectedMovie) }} className={`${MainStyle.btn} ${MainStyle['btn-primary']}`}>{isInWatchlist(selectedMovie) ? 'Remove from Watchlist' : 'Add to Watchlist'}</button>
                                    <button id="start-watchparty" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`} onClick={() => startWatchParty(selectedMovie.title)}>Start a Watch Party</button>
                                    <button id="write-review" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`} onClick={() => writeReview(selectedMovie.title)}>Write a Review</button>
                                    <button id="play" className={`${MainStyle.btn} ${MainStyle['btn-primary']}`} onClick={playVideo}>Play</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Main;
