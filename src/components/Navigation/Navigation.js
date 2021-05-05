import React from 'react';
import {Link, useLocation} from "react-router-dom";

function Navigation({colorTheme=''}) {
    const checkboxRef = React.useRef();
    const location = useLocation();

    function closeMenu() {
        checkboxRef.current.checked = false;
    }

    return (
        <div className="navigation">
            <input className="navigation__toggle" id="navigation__toggle" type="checkbox" ref={checkboxRef}/>
            <label className={`navigation__menu-button ${colorTheme === 'white' && 'navigation__menu-button_color_white'}`} htmlFor="navigation__toggle">
                <div className="navigation__menu-icon"/>
            </label>

            <div className="navigation__menu-panel">

                <ul className="navigation__links-list">
                    <li>
                        <Link to="/"
                              className={`navigation__link ${location.pathname === '/' && 'navigation__link_current'}`}
                              onClick={closeMenu}>
                            Главная
                        </Link>
                    </li>

                    <li>
                        <Link to="/movies"
                              className={`navigation__link ${location.pathname === '/movies' && 'navigation__link_current'}`}
                              onClick={closeMenu}>
                            Фильмы
                        </Link>
                    </li>

                    <li>
                        <Link to="/saved-movies"
                              className={`navigation__link ${location.pathname === '/saved-movies' && 'navigation__link_current'}`}
                              onClick={closeMenu}>
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