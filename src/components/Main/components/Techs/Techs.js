import React from 'react';

function Techs() {

    return (
        <section className='techs'>
            <div className='techs__content'>
                <h3 className='techs__running-title'>Технологии</h3>

                <h2 className='techs__title'>7 технологий</h2>
                <p className='techs__paragraph'>На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.</p>

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