import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movieCards, onCardSave}) {

    return (
        <div className='movies-card-list'>
            <div className='movies-card-list__movie-list'>

                {movieCards.map((props) => (
                    <MoviesCard
                        key={props.id}
                        onCardSave={onCardSave}
                        {...props}
                    />)
                )}

            </div>

            <button className='movies-card-list__more-button'>Ещё</button>
        </div>
    )
}

export default MoviesCardList;