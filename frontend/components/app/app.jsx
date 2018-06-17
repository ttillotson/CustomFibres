import React from 'react';
import SplashContainer from './splash/splash_container';
import TechniqueContainer from './technique/technique_container';
import ShowcaseContainer from './showcase/showcase_container';
import Logo from './header/logo';
import NavBar from './header/nav_bar';
import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

const App = () => (
    <main className='main_container'>
        <header>
            <Logo />
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

export default App;