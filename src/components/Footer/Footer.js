import React from 'react';

function Footer() {

    return (
        <footer className='footer'>
            <p className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__bottom'>
                <p className='footer__copyright-year'>© 2020</p>
                <div className='footer__links'>
                    <a className='footer__link' target="_blank" href=''>Яндекс.Практикум</a>
                    <a className='footer__link' target="_blank" href=''>Github</a>
                    <a className='footer__link' target="_blank" href=''>Facebook</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;