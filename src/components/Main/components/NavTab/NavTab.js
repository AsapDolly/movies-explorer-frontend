import React from 'react';
import {Link} from 'react-router-dom';

function NavTab() {

    return (
        <nav className='nav-tab'>
            <div className='nav-tab__bar'>
                <div className='nav-tab__left-block'>
                    <Link to="/">
                        <div className='nav-bar__logo'/>
                    </Link>
                </div>

                <div className='nav-tab__right-block'>
                    <Link to="/signup" className='nav-tab__signup-link'>
                        Регистрация
                    </Link>
                    <Link to="/signin">
                        <button className="nav-tab__signin-button" type="button">
                            Войти
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavTab;