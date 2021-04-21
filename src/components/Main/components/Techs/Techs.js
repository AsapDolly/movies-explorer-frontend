import React from 'react';

function Techs() {

    return (
        <section className='techs'>
            <div className='techs__content'>
                <h2 className='techs__title'>Технологии</h2>
                <div className='about-project__description-area'>
                    <div className='about-project__description-block'>
                        <h2 className='about-project__description-title'>
                            Дипломный проект включал 5 этапов
                        </h2>
                        <p className='about-project__description-paragraph'>
                            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
                            доработки.
                        </p>
                    </div>

                    <div className='about-project__description-block'>
                        <h2 className='about-project__description-title'>
                            На выполнение диплома ушло 5 недель
                        </h2>
                        <p className='about-project__description-paragraph'>
                            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                            защититься.
                        </p>
                    </div>
                </div>

                <div className='techs__stack'>
                    <div className='techs__stack-element'>HTML</div>
                    <div className='techs__stack-element'>CSS</div>
                    <div className='techs__stack-element'>JS</div>
                    <div className='techs__stack-element'>React</div>
                    <div className='techs__stack-element'>Git</div>
                    <div className='techs__stack-element'>Express.js</div>
                    <div className='techs__stack-element'>mongoDB</div>
                </div>
            </div>
        </section>
    )
}

export default Techs;