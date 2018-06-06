import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
// import { AuthRoute } from '../util/routes_util'
// import AdminSessionPage from './admin/session_page';


const Admin = () => (
    <main className={'admin_container'}>
        <Switch>
            {/* <AuthRoute exact path='/admin/' component={edit content} /> */}
            {/* <Route component={AdminSessionPage} /> */}
            <Redirect to='/admin' />
        </Switch>
    </main>
);