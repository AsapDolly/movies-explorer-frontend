import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movieCards, savedMovies, onCardSave, onCardDelete, searchErrorText, handleOnClickMoreMovies, isDisplayMoreButton}) {

    return (
        <div className='movies-card-list'>
            <div className='movies-card-list__movie-list'>

                {searchErrorText ? <p className='movies-card-list__error'>{searchErrorText}</p>
                    :
                    movieCards.map((props) => (
                        <MoviesCard
                            key={props.id}
                            savedMovies={savedMovies}
                            onCardSave={onCardSave}
                            onCardDelete={onCardDelete}
                            {...props}
                        />))
                }

            </div>

            {isDisplayMoreButton &&
            <button className='movies-card-list__more-button' onClick={handleOnClickMoreMovies}>Ещё</button>}
        </div>
    )
}

export default MoviesCardList;