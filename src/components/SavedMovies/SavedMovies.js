import React from 'react';
import SavedMoviesCardList from './components/SavedMoviesCardList/SavedMoviesCardList';
import SearchForm from '../Movies/components/SearchForm/SearchForm';
import Preloader from "../Movies/components/Preloader/Preloader";

function SavedMovies({searchMovie, savedMovieCards, onCardDelete}) {

    return (
        <section className="saved-movies">
            <SearchForm
                searchMovie={searchMovie}
            />

            {savedMovieCards === null ? <Preloader/>
                : <SavedMoviesCardList
                    savedMovieCards={savedMovieCards}
                    onCardDelete={onCardDelete}
                />
            }

        </section>
    )
}

export default SavedMovies;