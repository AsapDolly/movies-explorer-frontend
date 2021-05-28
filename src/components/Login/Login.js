import React, {useCallback} from 'react';
import {Link, NavLink} from 'react-router-dom';

function Login({handleLogin}) {

    const [data, setData] = React.useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({
        email: '',
        password: '',
    });

    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value
        });
        setErrors({...errors, [name]: e.target.validationMessage});
        setIsValid(e.target.closest("form").checkValidity());
    }

    const resetForm = useCallback(
        (newData = {email: '', password: ''}, newErrors = {email: '', password: ''}, newIsValid = false) => {
            setData(newData);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setData, setErrors, setIsValid]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(data.email, data.password);
        resetForm();
    }

    return (
        <section className='login'>
            <Link to="/">
                <div className='login__logo'/>
            </Link>

            <form className="login__form" onSubmit={handleSubmit} noValidate>
                <h1 className="login__title">Рады видеть!</h1>
                <div className="login__input-list">

                    <div>
                        <label htmlFor="email" className="login__input-label">E-mail</label>
                        <input className="login__input login__input_email"
                               id="login-email"
                               name="email"
                               type="email"
                               required
                               minLength="2"
                               maxLength="40"
                               value={data.email}
                               onChange={handleChange}
                        />
                        <div className="login__input-label_error">{errors.email}</div>
                    </div>

                    <div>
                        <label htmlFor="password" className="login__input-label">Пароль</label>
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
                        <div className="login__input-label_error">{errors.password}</div>
                    </div>

                </div>

                <button className={`login__button ${!isValid && 'login__button-blocked'}`} type="submit" disabled={!isValid}>Войти</button>

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