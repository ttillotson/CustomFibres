import React from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { AuthRoute, NonAuthRoute } from '../../util/routes_util';
import SessionContainer from './session/session_page_container';
import DashboardContainer from './dashboard/dashboard_container';


const Admin = () => (
    <main className={'admin_container'}>
        <Switch>
            <AuthRoute exact path='/admin/dashboard' component={DashboardContainer} />
            <NonAuthRoute to='/admin' component={SessionContainer} />
        </Switch>
    </main>
);

export default Admin;