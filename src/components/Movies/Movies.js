import React from 'react';
import MoviesCardList from './components/MoviesCardList/MoviesCardList';
import SearchForm from './components/SearchForm/SearchForm';
import Preloader from "./components/Preloader/Preloader";

function Movies({searchMovie, movieCards, onCardSave}) {

    return (
        <section className="movies">
            <SearchForm
                searchMovie={searchMovie}
            />

            {movieCards === null ? <Preloader/>
                : <MoviesCardList
                    movieCards={movieCards}
                    onCardSave={onCardSave}
                />
            }

        </section>
    )
}

export default Movies;