import React from 'react';
import notFoundImage from '../../../../images/image-not-found.jpg';

function MoviesCard({onCardSave, ...props}) {

    const BASE_URL = 'https://api.nomoreparties.co';
    const [isSaved, setIsSaved] = React.useState(false);
    const cardButtonClassName = `movies-card__save-button ${isSaved && 'movies-card__save-button_saved'}`;

    function handleSaveMovieClick() {
        setIsSaved(!isSaved);
        onCardSave();
    }

    return (
        <div className='movies-card'>
            <div className='movies-card__information'>
                <p className='movies-card__title'>{props.nameRU}</p>
                <p className='movies-card__duration'>{`${props.duration} минут`}</p>
            </div>

            {props.image ?
                <img className='movies-card__image' alt={props.nameEN} src={`${BASE_URL}${props.image.url}`}/> :
                <img className='movies-card__image' alt='нет изображения' src={notFoundImage} />}

            <button className={cardButtonClassName} onClick={handleSaveMovieClick} type="button">{!isSaved && 'Сохранить'}</button>
        </div>
    )
}

export default MoviesCard;