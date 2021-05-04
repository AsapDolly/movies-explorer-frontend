import React from 'react';
import {Link} from 'react-router-dom';
import Navigation from "../../../Navigation/Navigation";

function NavTab({loggedIn}) {

    return (
        <nav className='nav-tab'>
            <div className='nav-tab__bar'>
                <div className='nav-tab__left-block'>
                    <Link to="/">
                        <div className='nav-bar__logo'/>
                    </Link>
                </div>

                {
                    loggedIn ?
                        <div className='nav-tab__right-block-authorized'>

                            <Navigation
                                colorTheme={'white'}
                            />

                            <Link to="/movies" className='nav-tab__link-authorized'>
                                Фильмы
                            </Link>
                            <Link to="/saved-movies" className='nav-tab__link-authorized'>
                                Сохраненные фильмы
                            </Link>
                            <Link to="/profile">
                                <button className="nav-tab__profile-button" type="button">
                                    <div className='nav-tab__profile-icon'/>
                                    Аккаунт
                                </button>
                            </Link>
                        </div>
                        :
                        <div className='nav-tab__right-block-unauthorized'>
                            <Link to="/signup" className='nav-tab__link'>
                                Регистрация
                            </Link>
                            <Link to="/signin">
                                <button className="nav-tab__signin-button" type="button">
                                    Войти
                                </button>
                            </Link>
                        </div>
                }
            </div>
        </nav>
    )
}

export default NavTab;