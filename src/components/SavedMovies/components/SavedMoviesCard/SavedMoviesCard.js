import React from 'react';
import notFoundImage from '../../../../images/image-not-found.jpg';

function SavedMoviesCard({onCardDelete, ...props}) {

    function handleDeleteMovieClick() {
        onCardDelete(props._id);
    }

    return (
        <div className='saved-movies-card'>
            <div className='saved-movies-card__information'>
                <p className='saved-movies-card__title'>{props.nameRU}</p>
                <p className='saved-movies-card__duration'>{`${props.duration} минут`}</p>
            </div>

            {props.image ?
                <img className='saved-movies-card__image' alt={props.nameEN} src={props.image}/> :
                <img className='saved-movies-card__image' alt='нет изображения' src={notFoundImage} />}

            <button className='saved-movies-card__delete-button' onClick={handleDeleteMovieClick} type="button"/>
        </div>
    )
}

export default SavedMoviesCard;