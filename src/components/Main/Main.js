import React from 'react';
import NavTab from './components/NavTab/NavTab'
import Promo from './components/Promo/Promo';
import AboutProject from './components/AboutProject/AboutProject';
import Techs from './components/Techs/Techs';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';

function Main({loggedIn}) {

    return (
        <main>
            <NavTab
                loggedIn={loggedIn}
            />
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </main>
    )
}

export default Main;