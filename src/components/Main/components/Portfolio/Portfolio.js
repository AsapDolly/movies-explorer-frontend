import React from 'react';

function Portfolio() {

    return (
        <section className='portfolio'>
            <h4 className='portfolio__title'>Портфолио</h4>
            <ul className='portfolio__list'>
                <li className='portfolio__list-element'>
                    <p className='portfolio__link'>Статичный сайт</p>
                    <a className='portfolio__arrow-link' target="_blank" href=''/>
                </li>

                <li className='portfolio__list-element'>
                    <p className='portfolio__link'>Адаптивный сайт</p>
                    <a className='portfolio__arrow-link' target="_blank" href=''/>
                </li>

                <li className='portfolio__list-element'>
                    <p className='portfolio__link'>Одностраничное приложение</p>
                    <a className='portfolio__arrow-link' target="_blank" href=''/>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio;