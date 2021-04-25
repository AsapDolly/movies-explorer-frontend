import React from 'react';
import NavTab from './components/NavTab/NavTab'
import Promo from './components/Promo/Promo';
import AboutProject from './components/AboutProject/AboutProject';
import Techs from './components/Techs/Techs';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main() {

    return (
        <main className="content">
            <NavTab/>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
            <Footer/>
        </main>
    )
}

export default Main;