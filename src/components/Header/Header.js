import React from 'react';

function Header({backgroundColor}) {

    return (
        <header className='header' style={{backgroundColor: backgroundColor}}>
            <div className='header__left-block'>
            </div>

            <div className='header__right-block'>
            </div>
        </header>
    )
}

export default Header;