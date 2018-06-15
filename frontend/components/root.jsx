import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import Admin from './admin';
import {
    Route,
    Redirect,
    Switch,
    Link,
} from 'react-router-dom';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path={`/admin`} component={Admin}/>
                <Route component={App} />
            </Switch>
        </HashRouter>
    </Provider>
);

export default Root;