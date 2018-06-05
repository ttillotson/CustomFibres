import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
// import AdminSessionPage from './admin/session_page';
// import { AuthRoute, NonAuthRoute } from './util/routes_util';
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
                {/* <AuthRoute exact path={`/admin`} component={AdminSessionPage}/> */}
                <Route component={App} />
            </Switch>
        </HashRouter>
    </Provider>
);
