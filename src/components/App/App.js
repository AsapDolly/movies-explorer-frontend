import './App.css';
import Main from '../Main/Main'
import {Route, Switch, useHistory} from 'react-router-dom';

function App() {
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
                    <>авторизация</>
                </Route>

                <Route path="/signup">
                    <>регистрация</>
                </Route>

                <Route path="*">
                    <>страница 404</>
                </Route>

            </Switch>
        </div>
    );
}

export default App;
