import React from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({searchMovie}) {

    const [movie, setMovie] = React.useState('');

    const handleChange = (e) => setMovie(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovie(movie);
    }

    return (
        <section className='search-form'>
            <form className='search-form__form' onSubmit={handleSubmit} noValidate>
                <input className="search-form-input"
                       id="search-form-movie"
                       name="movie"
                       type="text"
                       placeholder="Фильм"
                       value={movie}
                       onChange={handleChange}
                />
                <button className='search-form__find-button' type='submit'/>
            </form>

            <FilterCheckbox/>

            <div className='search-form__demarcation-line'/>
        </section>
    )
}

export default SearchForm;