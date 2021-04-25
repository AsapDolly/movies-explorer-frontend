import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function PageNotFound() {

    return (
        <section className='page-not-found'>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <NavLink to="/signup" className="login__signin-text_link">
                Назад
            </NavLink>
        </section>
    )
}

export default PageNotFound;