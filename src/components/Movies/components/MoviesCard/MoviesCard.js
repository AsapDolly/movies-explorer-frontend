import React from 'react';
import notFoundImage from '../../../../images/image-not-found.jpg';

function MoviesCard({onCardSave, savedMovies, onCardDelete, ...props}) {

    const BASE_URL = 'https://api.nomoreparties.co';
    const [isSaved, setIsSaved] = React.useState(false);
    const cardButtonClassName = `movies-card__save-button ${isSaved && 'movies-card__save-button_saved'}`;

    React.useEffect(() => {
        const isLiked = savedMovies.some(i => i.movieId === props.id);
        setIsSaved(isLiked);
    }, []);

    function handleSaveMovieClick() {
        setIsSaved(!isSaved);
        onCardSave({
            country: props.country ? props.country : 'Страна не указана',
            director: props.director ? props.director : 'Режиссер не указан',
            duration: props.duration ? props.duration : 'Продолжительность не указана',
            year: props.year ? props.year : 'Год не указан',
            description: props.description ? props.description : 'Нет описания',
            image: `${BASE_URL}${props.image.url}`,
            trailer: props.trailerLink,
            thumbnail: `${BASE_URL}${props.image.formats.thumbnail.url}`,
            movieId: props.id,
            nameRU: props.nameRU ? props.nameRU : 'Название не указано',
            nameEN: props.nameEN ? props.nameEN : 'Название не указано'
        });
    }

    function handleDeleteMovieClick() {
        const savedCard = savedMovies.find(i => i.movieId === props.id);
        setIsSaved(!isSaved);
        onCardDelete(savedCard._id);
    }

    return (
        <div className='movies-card'>
            <div className='movies-card__information'>
                <p className='movies-card__title'>{props.nameRU}</p>
                <p className='movies-card__duration'>{`${props.duration} минут`}</p>
            </div>

            {props.image ?
                <img className='movies-card__image' alt={props.nameEN} src={`${BASE_URL}${props.image.url}`}/> :
                <img className='movies-card__image' alt='нет изображения' src={notFoundImage}/>}

            <button className={cardButtonClassName} onClick={isSaved ? handleDeleteMovieClick : handleSaveMovieClick}
                    type="button">{!isSaved && 'Сохранить'}</button>
        </div>
    )
}

export default MoviesCard;