import React from 'react';
import SplashContainer from './template_containers/splash_container';
import TechniqueContainer from './template_containers/technique_container';
import ShowcaseContainer from './showcase/showcase_container';
import ShopContainer from './shop/shop_container';
import QuoteContainer from './template_containers/quote_container';
import Logo from './shared/logo';
import Emblem from './shared/emblem';
import NavBar from './shared/nav_bar';
import {
    Route,
    Switch
} from 'react-router-dom';


const App = () => {
    return (
        <main className='main_container'>
            <header className='app_header'>
                {/* <Logo /> */}
                <section className="header_frame">
                    <Emblem />
                    <NavBar />
                </section>
            </header>
            <Switch> 
                <Route path='/technique' component={TechniqueContainer} />
                <Route path='/showcase' component={ShowcaseContainer} />
                <Route path='/shop' component={ShopContainer} />
                <Route path='/quote' component={QuoteContainer} />
                <Route path='/' component={SplashContainer} />
            </Switch>
        </main>
    );
};

export default App;