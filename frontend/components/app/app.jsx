import React from 'react';
import SplashContainer from './splash/splash_container';
import TechniqueContainer from './technique/technique_container';
import ShowcaseContainer from './showcase/showcase_container';
import Logo from './shared/logo';
import Emblem from './shared/emblem';
import NavBar from './shared/nav_bar';
import {
    Route,
    Switch
} from 'react-router-dom';

const App = () => {
    // console.log(window);
    // const header = window.visualViewport.width > 768 ? <Logo /> : < Emblem />;
    return (
        <main className='main_container'>
            <header>
                {/* { header } */}
                <Logo />
                <Emblem />
                <NavBar />
            </header>
            <section>
                <Switch> 
                    <Route path='/technique' component={TechniqueContainer} />
                    <Route path='/showcase' component={ShowcaseContainer} />
                    <Route path='/' component={SplashContainer} />
                </Switch>
            </section>
        </main>
    );
};

export default App;