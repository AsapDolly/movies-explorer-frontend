import React from 'react';

function Footer() {

    return (
        <footer className='footer'>
            <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__bottom'>
                <p className='footer__copyright-year'>© 2020</p>
                <div className='footer__links'>
                    <a className='footer__link' target="_blank" href='https://praktikum.yandex.ru'>Яндекс.Практикум</a>
                    <a className='footer__link' target="_blank" href='https://github.com'>Github</a>
                    <a className='footer__link' target="_blank" href='https://ru-ru.facebook.com/'>Facebook</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;