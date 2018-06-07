import React from 'react';
import {
    Redirect
} from 'react-router-dom';

const App = () => (
    <main className={'main_container'}>
        <header>
        </header>
        <section>
            <Switch>
                <Redirect to='/' />
            </Switch>
        </section>
    </main>
);

export default App;