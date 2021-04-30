import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const checkboxRef = React.useRef();
    const location = useLocation();

    function closeMenu() {
        checkboxRef.current.checked = false;
    }

    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" ref={checkboxRef}/>
            <label className="menu__btn" htmlFor="menu__toggle">
                <span/>
            </label>

            <div className="menu__box">

                <ul className="menu__list">
                    <li>
                        <Link to="/" className={`menu__item ${location.pathname === '/' && 'menu__item_current-item'}`} onClick={closeMenu}>
                            Главная
                        </Link>
                    </li>

                    <li>
                        <Link to="/movies" className={`menu__item ${location.pathname === '/movies' && 'menu__item_current-item'}`} onClick={closeMenu}>
                            Фильмы
                        </Link>
                    </li>

                    <li>
                        <Link to="/saved-movies" className={`menu__item ${location.pathname === '/saved-movies' && 'menu__item_current-item'}`} onClick={closeMenu}>
                            Сохранённые фильмы
                        </Link>
                    </li>

                </ul>

                <Link to="/profile" className='navigation__profile-link' onClick={closeMenu}>
                    Аккаунт
                    <div className='navigation__profile-icon'/>
                </Link>

            </div>

            <div className='navigation__background'/>
        </div>
    )

}

export default Navigation;