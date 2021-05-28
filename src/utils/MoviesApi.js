class MoviesApi {
    constructor(config) {
        this._baseUrl = config.baseUrl;
        this._headers = config.headers;
    }

    _checkResult(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(`Произошла ошибка: ${res.status}`);
    }

    getMovieList() {
        return fetch(`${this._baseUrl}`, {
            method: "GET",
            headers: this._headers
        })
            .then((res) => this._checkResult(res))
    }

}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default moviesApi;
