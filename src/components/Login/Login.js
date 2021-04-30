import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Login({handleLogin}) {

    const [data, setData] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(data.email, data.password);
    }

    return (
        <section className='login'>
            <Link to="/">
                <div className='login__logo'/>
            </Link>

            <form className="login__form" onSubmit={handleSubmit} noValidate>
                <h1 className="login__title">Рады видеть!</h1>
                <div className="login__input-list">

                    <label className="login__input-label">
                        E-mail
                        <input className="login__input login__input_email"
                               id="login-email"
                               name="email"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                               value={data.email}
                               onChange={handleChange}
                        />
                    </label>

                    <label className="login__input-label">
                        Пароль
                        <input className="login__input login__input_type_password"
                               id="login-password"
                               name="password"
                               type="password"
                               required
                               minLength="2"
                               maxLength="200"
                               value={data.password}
                               onChange={handleChange}
                        />

                        <div className="login__input-label_error">Что-то пошло не так...</div>
                    </label>

                </div>
                <button className="login__button" type="submit">Войти</button>

                <div className="login__signin-text">
                    Ещё не зарегистрированы?{' '}
                    <NavLink to="/signup" className="login__signin-text_link">
                        Регистрация
                    </NavLink>
                </div>
            </form>

        </section>
    )
}

export default Login;