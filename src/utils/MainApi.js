class MainApi {
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

    register(email, password, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, name})
        })
            .then((res) => this._checkResult(res))
    };

    authorize(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        })
            .then((res) => this._checkResult(res))
    };

    checkToken (token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => this._checkResult(res))
    }

    saveMovie(movie, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(movie)
        })
            .then((res) => this._checkResult(res))
    };

    deleteMovie(movieId, token) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => this._checkResult(res))
    };

    getSavedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => this._checkResult(res))
    };
}

const mainApi = new MainApi({
    baseUrl: 'http://api.imekov.bitfilms.nomoredomains.icu',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default mainApi;
