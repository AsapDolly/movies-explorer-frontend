import React from 'react';
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import {moviesFilter} from '../../utils/moviesFilter'
import {Route, Switch, useHistory} from 'react-router-dom';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function App() {
    const history = useHistory();
    const [allCards, setAllCards] = React.useState([]);
    const [displayedCards, setDisplayedCards] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState(null);
    const [displayedSavedMovies, setDisplayedSavedMovies] = React.useState();
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [isDisplayMoreButton, setIsDisplayMoreButton] = React.useState(false);
    const [movieQuery, setMovieQuery] = React.useState('');
    const [isShort, setIsShort] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({
        email: '',
        name: ''
    });
    const [searchErrorText, setSearchErrorText] = React.useState('');

    React.useEffect(() => {
        handleTokenCheck();
    }, []);

    React.useEffect(() => {

        if (loggedIn) {
            const searchData = JSON.parse(localStorage.getItem("searchData"));

            if (searchData) {
                setMovieQuery(searchData.movieQuery);
                setIsShort(searchData.isShort);
                searchMovie(searchData.movieQuery, searchData.isShort, searchData.countOfDisplayedCards);
            }

            loadSavedMovies();
        }
    }, [loggedIn]);

    React.useEffect(() => {

        if (displayedCards && movieQuery) {

            const searchData = {
                movieQuery: movieQuery,
                countOfDisplayedCards: displayedCards.length,
                isShort: isShort
            };

            const serialObj = JSON.stringify(searchData);
            localStorage.setItem('searchData', serialObj);
        }

    }, [displayedCards, movieQuery]);

    React.useEffect(() => {

        if (allCards && displayedCards) {

            if (allCards.length === 0 || allCards.length === displayedCards.length) {
                setIsDisplayMoreButton(false);
            } else {
                setIsDisplayMoreButton(true);
            }
        }

    }, [allCards, displayedCards]);

    function loadSavedMovies(){
        const token = localStorage.getItem('token');
        mainApi.getSavedMovies(token)
            .then(res => {
                setSavedMovies(res);
                setDisplayedSavedMovies(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleTokenCheck() {
        const token = localStorage.getItem('token');
        if (token) {
            mainApi.checkToken(token)
                .then((res) => {
                    if (res.data._id) {
                        setCurrentUser({
                            email: res.data.email,
                            name: res.data.name
                        });
                        setLoggedIn(true);
                        history.push('/movies');
                    }

                    if (res.statusCode === 401) {
                        throw new Error('Переданный токен некорректен');
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setLoggedIn(false);
        }
    }

    function handleLogin(email, password) {

        mainApi.authorize(email, password)
            .then(res => {
                if (res.token) {
                    localStorage.setItem('token', res.token);
                    handleTokenCheck();
                }
                if (res.status === 400) {
                    console.log('Данные введены некорректно.');
                    throw new Error(res.statusText);
                }
                if (res.status === 401) {
                    console.log('Пользователь с такими данными не найден.');
                    throw new Error(res.statusText);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleLogout() {
        setLoggedIn(false);
        localStorage.removeItem('token');
        localStorage.removeItem('searchData');
        setCurrentUser({
            email: '',
            name: ''
        });
        history.push('/');
    }

    function handleChangeUserData({email, name}) {
        setCurrentUser({email, name});
    }

    function handleRegister(name, email, password) {

        mainApi.register(email, password, name)
            .then(res => {
                if (res.data._id) {
                    handleLogin(email, password);
                }

                if (res.statusCode === 400) {
                    throw new Error('Данные введены некорректно');
                }
            })
            .catch(err => {
                console.error(err);
            });
    }

    function searchMovie(movieTitle, isShort, countOfLoadingCards) {
        if (countOfLoadingCards === null) {
            countOfLoadingCards = 12;

            if (window.innerWidth <= 768 && window.innerWidth > 480) {
                countOfLoadingCards = 8;
            } else if (window.innerWidth <= 480 && window.innerWidth >= 320) {
                countOfLoadingCards = 5;
            }
        }
        setDisplayedCards(null);
        setSearchErrorText('');
        moviesApi.getMovieList()
            .then(res => {
                const selectedFilms = moviesFilter(res, movieTitle, isShort);
                if (selectedFilms.length === 0) {
                    setSearchErrorText('Ничего не найдено');
                }
                setAllCards(selectedFilms);
                setDisplayedCards(selectedFilms.slice(0, countOfLoadingCards));
            })
            .catch(() => {
                setAllCards([]);
                setDisplayedCards([]);
                setSearchErrorText('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз');
            });
    }

    function searchSavedMovie(movieTitle, isShort, countOfLoadingCards) {
        const token = localStorage.getItem('token');

        mainApi.getSavedMovies(token)
            .then(res => {
                const selectedFilms = moviesFilter(res, movieTitle, isShort);
                setDisplayedSavedMovies(selectedFilms);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleOnClickMoreMovies() {
        let countOfMoreLoadingCards = 3;

        if (window.innerWidth <= 768) {
            countOfMoreLoadingCards = 2;
        }

        const newIndexOfLastMovie = displayedCards.length + countOfMoreLoadingCards;
        setDisplayedCards(allCards.slice(0, newIndexOfLastMovie));
    }

    function onCardSave(movie) {
        const token = localStorage.getItem('token');
        mainApi.saveMovie(movie, token)
            .then(loadSavedMovies)
            .catch(err => {
                console.log(err);
            });
    }

    function onCardDelete(cardID) {
        const token = localStorage.getItem('token');
        mainApi.deleteMovie(cardID, token)
            .then(loadSavedMovies)
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Switch>

                    <Route exact path="/">
                        <Main
                            loggedIn={loggedIn}
                        />
                    </Route>


                    <ProtectedRoute component={Movies}
                                    path="/movies"
                                    loggedIn={loggedIn}
                                    searchMovie={searchMovie}
                                    movieCards={displayedCards}
                                    savedMovies={savedMovies}
                                    onCardSave={onCardSave}
                                    onCardDelete={onCardDelete}
                                    searchErrorText={searchErrorText}
                                    handleOnClickMoreMovies={handleOnClickMoreMovies}
                                    movieQuery={movieQuery}
                                    setMovieQuery={setMovieQuery}
                                    isDisplayMoreButton={isDisplayMoreButton}
                                    isShort={isShort}
                                    setIsShort={setIsShort}
                    />

                    <ProtectedRoute component={SavedMovies}
                                    path="/saved-movies"
                                    loggedIn={loggedIn}
                                    searchSavedMovie={searchSavedMovie}
                                    savedMovieCards={displayedSavedMovies}
                                    onCardDelete={onCardDelete}
                                    movieQuery={movieQuery}
                                    setMovieQuery={setMovieQuery}
                                    isShort={isShort}
                                    setIsShort={setIsShort}
                    />

                    <ProtectedRoute component={Profile}
                                    path="/profile"
                                    loggedIn={loggedIn}
                                    handleLogout={handleLogout}
                                    handleChangeUserData={handleChangeUserData}
                    />

                    <Route path="/signin">
                        <Login
                            handleLogin={handleLogin}
                        />
                    </Route>

                    <Route path="/signup">
                        <Register
                            handleRegister={handleRegister}
                        />
                    </Route>

                    <Route path="*">
                        <PageNotFound/>
                    </Route>

                </Switch>

            </div>

        </CurrentUserContext.Provider>
    );
}

export default App;
