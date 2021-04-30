import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Register({handleRegister}) {

    const [data, setData] = React.useState({
        name: '',
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
        handleRegister(data.name, data.email, data.password);
    }

    return (
        <section className='register'>
            <Link to="/">
                <div className='register__logo'/>
            </Link>

            <form className="register__form" onSubmit={handleSubmit} noValidate>
                <h1 className="register__title">Добро пожаловать!</h1>
                <div className="register__input-list">
                    <label className="register__input-label">
                        Имя
                        <input className="register__input"
                               id="register-name"
                               name="name"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                               value={data.name}
                               onChange={handleChange}
                        />
                    </label>

                    <label className="register__input-label">
                        E-mail
                        <input className="register__input register__input_email"
                               id="register-email"
                               name="email"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                               value={data.email}
                               onChange={handleChange}
                        />
                    </label>

                    <label className="register__input-label">
                        Пароль
                        <input className="register__input register__input_type_password"
                               id="register-password"
                               name="password"
                               type="password"
                               required
                               minLength="2"
                               maxLength="200"
                               value={data.password}
                               onChange={handleChange}
                        />

                        <div className="register__input-label_error">Что-то пошло не так...</div>
                    </label>

                </div>
                <button className="register__button" type="submit">Зарегистрироваться</button>

                <div className="register__signin-text">
                    Уже зарегистрированы?{' '}
                    <NavLink to="/signin" className="register__signin-text_link">
                        Войти
                    </NavLink>
                </div>
            </form>

        </section>
    )
}

export default Register;