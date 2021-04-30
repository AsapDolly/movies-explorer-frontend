import React from 'react';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMoviesCardList({savedMovieCards, onCardDelete}) {

    return (
        <div className='saved-movies-card-list'>
            <div className='saved-movies-card-list__movie-list'>

                {savedMovieCards.map((props) => (
                    <SavedMoviesCard
                        key={props.id}
                        onCardDelete={onCardDelete}
                        {...props}
                    />)
                )}

            </div>

            <div className='saved-movies-card-list__more-area'>
                <button className='saved-movies-card-list__button'>Ещё</button>
            </div>

        </div>
    )
}

export default SavedMoviesCardList;