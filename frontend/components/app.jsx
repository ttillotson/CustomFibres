import React from 'react';
import SplashContainer from './splash/splash_container';
import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

const App = () => (
    <main className='main_container'>
        <header>
        </header>
        <section>
            <Switch>
                <Route path='/' component={SplashContainer} />
            </Switch>
        </section>
    </main>
);

export default App;