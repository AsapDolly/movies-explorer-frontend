import React from 'react';

function AboutMe() {

    return (
        <section className='about-me'>
            <h3 className='about-me__running-title'>Студент</h3>
            <div className='about-me__photo'/>

            <h2 className='about-me__title'>Даши</h2>
            <h4 className='about-me__subtitle'>Фронтенд-разработчик, 28 лет</h4>
            <p className='about-me__paragraph'>Я родился в Улан-Удэ, закончил факультет автоматики и вычислительной
                техники в Новосибирском государственном техническом университете. Я люблю слушать музыку, а ещё
                увлекаюсь бегом. После того, как прошёл курс по веб-разработке, начал заниматься
                фриланс-заказами и ушёл с постоянной работы.</p>

            <div className='about-me__my-links'>
                <a target="_blank" href="https://www.facebook.com/" className='about-me__my-link'>Facebook</a>
                <a target="_blank" href="https://github.com/AsapDolly" className='about-me__my-link'>Github</a>
            </div>

        </section>
    )
}

export default AboutMe;