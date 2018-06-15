import React from 'react';
import SplashContainer from './splash/splash_container';
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
                <Route path='/' component={SplashContainer} />
            </Switch>
        </section>
    </main>
);

export default App;