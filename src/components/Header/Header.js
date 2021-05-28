import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

function Header() {

    const location = useLocation();
    
    return (
        <nav className='header-tab'>
            <div className='header-tab__left-block'>
                <Link to="/">
                    <div className='header-bar__logo'/>
                </Link>
                <div className='header-tab__navigation-links'>
                    <Link to="/movies"
                          className={`header-tab__navigation-link ${location.pathname === '/movies' && 'header-tab__navigation-link_bold'}`}>
                        Фильмы
                    </Link>
                    <Link to="/saved-movies"
                          className={`header-tab__navigation-link ${location.pathname === '/saved-movies' && 'header-tab__navigation-link_bold'}`}>
                        Сохранённые фильмы
                    </Link>
                </div>
            </div>

            <div className='header-tab__right-block'>

                <Navigation/>

                <Link to="/profile" className='header-tab__profile-link'>
                    Аккаунт
                </Link>
                <div className='header-tab__profile-icon'/>
            </div>
        </nav>
    )
}

export default Header;