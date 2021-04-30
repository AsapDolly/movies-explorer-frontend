import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from '../Main/Main';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import {Route, Switch, useHistory} from 'react-router-dom';

function App() {
    const history = useHistory();
    const [cards, setCards] = React.useState(null);
    const [savedMovies, setSavedMovies] = React.useState(null);

    React.useEffect(() => {
        fetch('https://api.nomoreparties.co/beatfilm-movies')
            .then(res => res.json())
            .then(res => {
                setCards(res.slice(0, 12));
                setSavedMovies(res.slice(0, 3));
            });
    }, []);

    function handleLogin(email, password) {
        history.push('/movies');
    }

    function handleRegister(name, email, password) {
        history.push('/movies');
    }

    function searchMovie(movie) {
        console.log(movie);
    }

    function onCardSave() {

    }

    function onCardDelete(cardID) {
        const newSavedMovieCards = savedMovies.filter((c) => c.id !== cardID);
        setSavedMovies(newSavedMovieCards);
    }

    return (
        <div className="page">
            <Switch>

                <Route exact path="/">
                    <Main/>
                    <Footer/>
                </Route>

                <Route path="/movies">
                    <Header/>
                    <Movies
                        searchMovie={searchMovie}
                        movieCards={cards}
                        onCardSave={onCardSave}
                    />
                    <Footer/>
                </Route>

                <Route path="/saved-movies">
                    <Header/>
                    <SavedMovies
                        searchMovie={searchMovie}
                        savedMovieCards={savedMovies}
                        onCardDelete={onCardDelete}
                    />
                    <Footer/>
                </Route>

                <Route path="/profile">
                    <Header/>
                    <Profile/>
                </Route>

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
    );
}

export default App;
