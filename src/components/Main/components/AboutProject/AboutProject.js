import React from 'react';

function AboutProject() {

    return (
        <section className='about-project'>
            <h2 className='about-project__running-title'>О проекте</h2>
            <div className='about-project__description-area'>
                <div className='about-project__description-block'>
                    <h3 className='about-project__description-title'>
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className='about-project__description-paragraph'>
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                        доработки.
                    </p>
                </div>

                <div className='about-project__description-block'>
                    <h3 className='about-project__description-title'>
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className='about-project__description-paragraph'>
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                        защититься.
                    </p>
                </div>
            </div>
            <div className='about-project__timetable'>
                <p className='about-project__week-block' style={{backgroundColor: '#2BE080', height: '36px'}}>1
                    неделя</p>
                <p className='about-project__week-block' style={{backgroundColor: '#F2F2F2', height: '36px'}}>4
                    недели</p>
                <p className='about-project__week-block about-project__week-block_bold'
                   style={{color: '#A0A0A0'}}>Back-end</p>
                <p className='about-project__week-block about-project__week-block_bold'
                   style={{color: '#A0A0A0'}}>Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;