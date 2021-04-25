import './App.css';
import Main from '../Main/Main'
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from "../PageNotFound/PageNotFound";
import {Route, Switch, useHistory} from 'react-router-dom';

function App() {
    const history = useHistory();

    function handleLogin(email, password){
        history.push('/movies');
    }

    function handleRegister(name, email, password) {
        history.push('/signin');
        console.log(name, email, password);
    }

    return (
        <div className="App">
            <Switch>

                <Route exact path="/">
                    <Main/>
                </Route>

                <Route path="/movies">
                    <>мувис</>
                </Route>

                <Route path="/saved-movies">
                    <>сохраненные мувис</>
                </Route>

                <Route path="/profile">
                    <>профиль</>
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
