import React from 'react';
import MoviesCardList from './components/MoviesCardList/MoviesCardList';
import SearchForm from './components/SearchForm/SearchForm';
import Preloader from "./components/Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({searchMovie, movieCards, savedMovies, onCardSave, onCardDelete, searchErrorText, handleOnClickMoreMovies, movieQuery, setMovieQuery, isDisplayMoreButton, isShort, setIsShort}) {

    return (
        <>
            <Header/>
            <section className="movies">
                <SearchForm
                    searchMovie={searchMovie}
                    movieQuery={movieQuery}
                    setMovieQuery={setMovieQuery}
                    isShort={isShort}
                    setIsShort={setIsShort}
                />

                {movieCards === null ? <Preloader/>
                    : <MoviesCardList
                        movieCards={movieCards}
                        savedMovies={savedMovies}
                        onCardSave={onCardSave}
                        onCardDelete={onCardDelete}
                        searchErrorText={searchErrorText}
                        handleOnClickMoreMovies={handleOnClickMoreMovies}
                        isDisplayMoreButton={isDisplayMoreButton}
                    />
                }

            </section>
            <Footer/>
        </>
    )
}

export default Movies;