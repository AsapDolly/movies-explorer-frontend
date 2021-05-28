import React from 'react';
import SavedMoviesCardList from './components/SavedMoviesCardList/SavedMoviesCardList';
import SearchForm from '../Movies/components/SearchForm/SearchForm';
import Preloader from "../Movies/components/Preloader/Preloader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({searchSavedMovie, savedMovieCards, onCardDelete, movieQuery, setMovieQuery, isShort, setIsShort}) {

    return (
        <>
            <Header/>
            <section className="saved-movies">
                <SearchForm
                    searchMovie={searchSavedMovie}
                    movieQuery={movieQuery}
                    setMovieQuery={setMovieQuery}
                    isShort={isShort}
                    setIsShort={setIsShort}
                />

                {savedMovieCards === null ? <Preloader/>
                    : <SavedMoviesCardList
                        savedMovieCards={savedMovieCards}
                        onCardDelete={onCardDelete}
                    />
                }

            </section>
            <Footer/>
        </>
    )
}

export default SavedMovies;