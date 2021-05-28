export const moviesFilter = (movies, filterWord, isShort) => {

    return movies.filter((movie) => {
        return movie.nameRU.toLowerCase().includes(filterWord.toLowerCase()) && (isShort ? movie.duration <= 40 : true);
    });
};