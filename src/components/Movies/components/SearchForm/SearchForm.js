import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({searchMovie, movieQuery, setMovieQuery, isShort, setIsShort}) {

    const [isError, setIsError] = React.useState(false);

    const handleChange = (e) => {
        setMovieQuery(e.target.value);
        if (movieQuery) {
            setIsError(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (movieQuery) {
            searchMovie(movieQuery, isShort, null);
        } else {
            setIsError(true);
        }
    }

    return (
        <section className='search-form'>
            <form className='search-form__form' onSubmit={handleSubmit} noValidate>
                <input className={`search-form-input ${isError && 'search-form-input_invalid'}`}
                       id="search-form-movie"
                       name="movie"
                       type="text"
                       placeholder="Фильм"
                       value={movieQuery}
                       onChange={handleChange}
                       required
                />
                <button className='search-form__find-button' type='submit'/>
            </form>

            <p className={`search-form__error ${isError && 'search-form__error_display'}`}>Нужно ввести ключевое слово</p>

            <FilterCheckbox isShort={isShort} setIsShort={setIsShort} />

            <div className='search-form__demarcation-line'/>
        </section>
    )
}

export default SearchForm;