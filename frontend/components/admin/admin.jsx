import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { AuthRoute } from '../util/routes_util';
import AdminSessionPage from './session/session_page';
import DashboardContainer from './dashboard/dashboard_container';


const Admin = () => (
    <main className={'admin_container'}>
        <Switch>
            <AuthRoute exact path='/admin/dashboard' component={DashboardContainer} />
            <Route to='/admin' component={AdminSessionPage} />
        </Switch>
    </main>
);

export default Admin;